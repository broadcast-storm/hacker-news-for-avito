import { configureStore } from '@reduxjs/toolkit';
import newStoriesReducer from './newStories/newStoriesSlice';
import openedStoryReducer from './openedStory/openedStorySlice';

export const store = configureStore({
  reducer: {
    newStories: newStoriesReducer,
    openedStory: openedStoryReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
