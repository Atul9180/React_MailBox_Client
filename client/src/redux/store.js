import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import emailReducer from "./slices/emailSlice.js";
import { apiSlice } from "./slices/apiSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    emails: emailReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

/*
here middleware is default middleware of createAsyncThunk to handles the lifecycle of API
 calls (like pending, fulfilled, and rejected states)
 and manages caching using the tagTypes specified.
*/
