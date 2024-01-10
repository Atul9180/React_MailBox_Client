//thunk bts uses rtk query to  interact with backend api:

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//kept empty as using proxy:
const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"], //for caching most fetching data
  endpoints: (builder) => ({
    getUsers: builder.query({
      //get all users
      query(limit) {
        return {
          url: `/users?_limit=${limit}`, //url for getting user list
          method: "GET",
        };
      },
    }),
  }),
});
