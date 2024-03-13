import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk("fetchApi", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await data.json();
  return json;
});

const apiThunkSlice = createSlice({
  name: "apiSlice",
  initialState: {
    isLoading: false,
    isError: false,
    userList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.userList = action.payload;
      });
  },
});
export default apiThunkSlice.reducer;
