import { configureStore } from '@reduxjs/toolkit';
import listeReducer from '../features/liste/listeSlice';

export const store = configureStore({
    reducer: {
        liste: listeReducer,
    },
});