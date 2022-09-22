const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import axios from 'axios'

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState: {
    data: [],
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonial.pending, (state, action) => {
      })
      .addCase(fetchTestimonial.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchTestimonial.rejected, (state, action) => {
      });
  },
});

export const { setTestimonial, setStatus } = testimonialSlice.actions;
export default testimonialSlice.reducer;

// Thunks
export const fetchTestimonial = createAsyncThunk('testimonial', async () => {
  try {
    const res = await axios.get('api/testimonial');
    return res.data;
  }
  catch(err) {
    console.log(err)
  }
});

