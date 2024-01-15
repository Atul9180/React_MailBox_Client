import { apiSlice } from "./apiSlice";
const EMAIL_URL = "/api/emails";

export const emailsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //get All Emails:
    getEmails: builder.query({
      query: () => ({
        url: `${EMAIL_URL}`,
        method: "GET",
      }),
    }),

    //create email:
    createEmail: builder.mutation({
      query: (data) => ({
        url: `${EMAIL_URL}/`,
        method: "POST",
        body: data,
      }),
    }),

    //delete email:
    deleteEmail: builder.mutation({
      query: (data) => ({
        url: `${EMAIL_URL}/:id`,
        method: "DELETE",
        body: data,
      }),
    }),

    //update Read status of email:
    markEmailAsRead: builder.mutation({
      query: (data) => ({
        url: `${EMAIL_URL}/:id`,
        method: "PUT",
        body: data,
      }),
    }),

    // get unread Emails Count:
    getUnreadEmailCount: builder.query({
      query: `${EMAIL_URL}/unread`,
      method: "GET",
    }),
  }),
});

export const {
  useCreateEmailMutation,
  useDeleteEmailMutation,
  useGetEmailsQuery,
  useGetUnreadEmailCountQuery,
  useGetUsersQuery,
} = emailsApiSlice;
