// src/store/slices/testimonialSlice.js
import { createSlice } from '@reduxjs/toolkit';

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState: {
    testimonials: []
  },
  reducers: {
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
    }
  }
});

export const { setTestimonials } = testimonialSlice.actions;
export default testimonialSlice.reducer;

