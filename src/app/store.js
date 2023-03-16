import { configureStore } from '@reduxjs/toolkit';
import { listeSlice } from '../features/liste/listeSlice';

export const store = configureStore({
    reducer: {
        liste: listeSlice.reducer,
    },
});