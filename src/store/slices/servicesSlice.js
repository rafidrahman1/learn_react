import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Mock service fetch - replace with actual API call
export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async (_, { rejectWithValue }) => {
    try {
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      return [
        {
          title: "Embroidery",
          description: "sophisticated embroidery technique",
          image: "/images/home-Services/Embroidery(406-528).jpg"
        },
        {
          title: "Trimming & Accessories",
          description: "Production & Sourcing Team",
          image: "/images/home-Services/Trimming-&-Accessories(406-528).jpg"
        },
        {
          title: "Production",
          description: "Skilled and Committed Production Team",
          image: "/images/home-Services/Production(406-528).jpg"
        },
        {
          title: "Merchandising",
          description: "A committed team of merchandisers",
          image: "/images/home-Services/Merchandising(406-528).jpg"
        },
        {
          title: "Sample Development",
          description: "Dynamic and Skilled Group",
          image: "/images/home-Services/Sample-Development(406-528).jpg"
        },
        {
          title: "Printing",
          description: "Every kind of printing",
          image: "/images/home-Services/Printing(406-528).jpg"
        },
        {
          title: "QA and QC",
          description: "Seasoned team for quality assurance",
          image: "/images/home-Services/QA-and-QC(406-528).jpg"
        },
        {
          title: "Knitting",
          description: "Sophisticated Knitting Methods",
          image: "/images/home-Services/Knitting(406-528).jpg"
        }
      ];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    loading: true,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch services";
      });
  }
});

export default servicesSlice.reducer;