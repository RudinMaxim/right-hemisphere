import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import apiService from '../services/apiService';
import postsReducer from './slice/postsSlice';
import usersReducer from './slice/usersSlice';

const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        posts: postsReducer,
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiService.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;