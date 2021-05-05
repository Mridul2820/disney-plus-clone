import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import useReducer from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        user: useReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});
