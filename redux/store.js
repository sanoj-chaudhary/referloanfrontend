import { configureStore } from '@reduxjs/toolkit';

import testimonialReducer from './testimonialSlice';
const store = configureStore({
    reducer: {

        testimonial: testimonialReducer,
    },
});

export default store;