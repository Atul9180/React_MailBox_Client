/* using the Redux Toolkit's createApi and fetchBaseQuery 
functions to create an API slice for interacting with a backend API */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//kept empty as using proxy, intended to filled dynamically:
const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Email"], //for caching most fetching data
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

/*
The created apiSlice object will have generated action creators 
and reducers based on the provided configuration. 

1. fetchBaseQuery: This function is used to create a base query
   that will be used by the API slice. The baseUrl is set to an empty string, which
   typically means that the API requests will be relative to the current domain 
   (i.e., using the same origin as the frontend)

2. createApi: This function creates an API slice. It takes an object with configuration options, including the baseQuery and endpoints.

3. tagTypes: An array specifying the tag types for caching. In this case, the "User" tag type is specified.
*/
