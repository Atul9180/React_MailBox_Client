import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sentEmails: JSON.parse(localStorage.getItem("sentEmails")) || null,
  receivedEmails: JSON.parse(localStorage.getItem("receivedEmails")) || null,
  unreadEmails: localStorage.getItem("unreadEmails") || null,
};

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    setSentEmails: (state, action) => {
      state.sentEmails = action.payload.sentEmails;
      state.receivedEmails = action.payload.receivedEmails;
    },
  },
});

export const { setSentEmails } = emailSlice.actions;

export default emailSlice.reducer;
