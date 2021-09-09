/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../index';

export interface Story {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

interface NewStoriesState {
  storyIdsList: number[];
  storyIdsStatus: 'loading' | 'success' | 'error';
  storiesStatus: 'loading' | 'success' | 'error';
  storiesList: Story[];
}

const initialState: NewStoriesState = {
  storyIdsList: [],
  storyIdsStatus: 'loading',
  storiesStatus: 'loading',
  storiesList: [],
};

export const fetchStoryIds = createAsyncThunk(
  'newStories/fetchStoryIds',
  async () => {
    try {
      const response = await axios.get<number[]>(
        'https://hacker-news.firebaseio.com/v0/newstories.json',
      );
      return response.data.slice(0, 100);
    } catch (error: any) {
      throw Error(error!.message);
    }
  },
);

export const fetchStories = createAsyncThunk<
  Story[],
  {
    start: number;
    end: number;
    isRefreshing: boolean;
  },
  { state: RootState }
>('newStories/fetchStories', async ({ start, end }, thunkAPI) => {
  const { newStories } = thunkAPI.getState();
  try {
    const result: Story[] = await Promise.all(
      newStories.storyIdsList.slice(start, end + 1).map(async (id) => {
        const response = await axios.get<Story>(
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

export const newStoriesSlice = createSlice({
  name: 'newStories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStoryIds.pending, (state) => {
      state.storyIdsStatus = 'loading';
      state.storiesStatus = 'loading';
    });
    builder.addCase(fetchStoryIds.fulfilled, (state, action) => {
      state.storyIdsStatus = 'success';
      state.storyIdsList = action.payload;
    });
    builder.addCase(fetchStoryIds.rejected, (state) => {
      state.storyIdsStatus = 'error';
    });
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.storiesStatus = 'success';
      state.storiesList =
        action.meta.arg.isRefreshing || state.storiesList === null
          ? [...action.payload]
          : [...state.storiesList, ...action.payload];
    });
    builder.addCase(fetchStories.rejected, (state) => {
      state.storiesStatus = 'error';
    });
  },
});

export default newStoriesSlice.reducer;
