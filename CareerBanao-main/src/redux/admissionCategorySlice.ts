import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("admissionCategory/fetchData", async () => {
  const response = await fetch("YOUR_API_ENDPOINT");
  const data = await response.json();
  return data; // Ensure data structure matches AdmissionEngineeringDataType[]
});

const admissionCategorySlice = createSlice({
  name: "admissionCategory",
  initialState: {
    data: [],
    default: true,
    government: false,
    private: false,
    status: "idle", // for async states
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setGovernment: (state) => {
      state.government = true;
      state.private = false;
      state.default = false;
    },
    setPrivate: (state) => {
      state.private = true;
      state.government = false;
      state.default = false;
    },
    setDefault: (state) => {
      state.government = false;
      state.private = false;
      state.default = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default admissionCategorySlice.reducer;
export const { setGovernment, setPrivate, setDefault, setData } = admissionCategorySlice.actions;