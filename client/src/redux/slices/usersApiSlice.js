//have/create endpoints for backend apis and inject in apiSlice endpoints :
//now only have to dispatch these  action creators :
//builder.query(READ operartion) and builder.mutation(state change oprn) are used to define endpoints for making API calls.

import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //login action creator :
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),

    signup: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    getProfile: builder.query({
      query: () => ({
        url: `${USERS_URL}/profile`,
        method: "GET",
      }),
    }),

    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
  useGetProfileQuery,
  useUpdateUserMutation,
} = usersApiSlice;

/* Make codebase modular clean:
The apiSlice.injectEndpoints function is part of the Redux Toolkit's API slices feature.
It is used to define and inject multiple endpoints into an API slice created using 
createApi. This function allows you to encapsulate the definition of various API endpoints
(queries and mutations) and their corresponding operations in a clean and modular way.

1. Why endpoints:
 it will automatically generate actions and reducers for handling the asynchronous API call.

*/
