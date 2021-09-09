/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../index';

export interface OpenedStory {
  by: string;
  descendants: number;
  id: number;
  kids?: number[] | null;
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url?: string;
}

export interface Comment {
  by: string;
  id: number;
  parent: number;
  kids?: number[] | null;
  deleted?: boolean;
  text: string;
  time: number;
  type: string;
  answers?: {
    answersStatus: 'loading' | 'success' | 'error';
    answersData: Comment[];
  };
}

interface OpenedStoryState {
  storyStatus: 'loading' | 'success' | 'error';
  storyData: OpenedStory | null;
  commentsStatus: 'loading' | 'success' | 'error';
  comments: Comment[];
}

const initialState: OpenedStoryState = {
  commentsStatus: 'loading',
  storyStatus: 'loading',
  storyData: null,
  comments: [],
};

export const fetchOpenedStory = createAsyncThunk<OpenedStory, number>(
  'openedStory/fetchOpenedStory',
  async (id) => {
    try {
      const response = await axios.get<OpenedStory>(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
      );
      if (response.data === null) throw Error();
      return response.data;
    } catch (error: any) {
      throw Error(error!.message);
    }
  },
);

export const fetchComments = createAsyncThunk<
  Comment[],
  {
    start: number;
    end: number;
  },
  { state: RootState }
>('openedStory/fetchComments', async ({ start, end }, thunkAPI) => {
  const { openedStory } = thunkAPI.getState();
  try {
    if (!openedStory.storyData!.kids) return [];
    const result: Comment[] = await Promise.all(
      openedStory.storyData!.kids!.slice(start, end).map(async (id) => {
        const response = await axios.get<Comment>(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
        );
        return response.data;
      }),
    );
    return result;
  } catch (error: any) {
    throw Error(error!.message);
  }
});

export const refreshComments = createAsyncThunk<
  {
    ids: number[] | null;
    comments: Comment[];
  },
  number,
  { state: RootState }
>('openedStory/refreshComments', async (id) => {
  try {
    const responseStory = await axios.get<OpenedStory>(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    );
    const newCommentsIds = responseStory.data.kids;
    if (!newCommentsIds)
      return {
        ids: null,
        comments: [],
      };
    const result: Comment[] = await Promise.all(
      newCommentsIds.slice(0, 4).map(async (commentId) => {
        const response = await axios.get<Comment>(
          `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`,
        );
        return response.data;
      }),
    );
    return {
      ids: newCommentsIds,
      comments: result,
    };
  } catch (error: any) {
    throw Error(error!.message);
  }
});

export const fetchAnswers = createAsyncThunk<
  Comment[],
  {
    commentId: number;
  },
  { state: RootState }
>('openedStory/fetchAnswers', async ({ commentId }, thunkAPI) => {
  const { openedStory } = thunkAPI.getState();
  try {
    const result: Comment[] = await Promise.all(
      openedStory
        .comments!.find((val) => val.id === commentId)!
        .kids!.map(async (id) => {
          const response = await axios.get<Comment>(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
          );
          return response.data;
        }),
    );
    return result;
  } catch (error: any) {
    throw Error(error!.message);
  }
});

export const openedStorySlice = createSlice({
  name: 'openedStory',
  initialState,
  reducers: {
    clearAll: (state) => {
      state.comments = [];
      state.commentsStatus = 'loading';
      state.storyData = null;
      state.storyStatus = 'loading';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOpenedStory.fulfilled, (state, action) => {
      state.storyStatus = 'success';
      state.storyData = action.payload;
      if (!action.payload.kids) {
        state.commentsStatus = 'success';
      }
    });
    builder.addCase(fetchOpenedStory.rejected, (state) => {
      state.storyStatus = 'error';
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.commentsStatus = 'success';
      state.comments = [...state.comments, ...action.payload];
    });
    builder.addCase(fetchComments.rejected, (state) => {
      state.commentsStatus = 'error';
    });
    builder.addCase(refreshComments.pending, (state) => {
      state.commentsStatus = 'loading';
      state.comments = [];
    });
    builder.addCase(refreshComments.fulfilled, (state, action) => {
      state.commentsStatus = 'success';
      state.comments = [...action.payload.comments];
      if (action.payload.ids) {
        const result = {
          ...state.storyData,
          kids: [...action.payload.ids],
        } as OpenedStory;
        state.storyData = result;
      }
    });

    builder.addCase(fetchAnswers.pending, (state, action) => {
      const index = state.comments.findIndex(
        (val) => val.id === action.meta.arg.commentId,
      );
      state.comments[index].answers = {
        answersStatus: 'loading',
        answersData: [],
      };
    });

    builder.addCase(fetchAnswers.fulfilled, (state, action) => {
      const index = state.comments.findIndex(
        (val) => val.id === action.meta.arg.commentId,
      );
      state.comments[index].answers = {
        answersStatus: 'success',
        answersData: [...action.payload],
      };
    });
    builder.addCase(fetchAnswers.rejected, (state, action) => {
      const index = state.comments.findIndex(
        (val) => val.id === action.meta.arg.commentId,
      );
      state.comments[index].answers = {
        answersStatus: 'error',
        answersData: [],
      };
    });
  },
});

export const { clearAll } = openedStorySlice.actions;

export default openedStorySlice.reducer;
