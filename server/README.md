### ----------Userss Api----------------

###### POST /api/users - registerUser -Register a user

###### POST /api/users/auth - authUser - Authenticate a user and get token

###### POST /api/users/logout - logoutUser - Logout user and clear cookie

###### GET /api/users/profile - getUserProfile - Get user profile

###### PUT /api/users/profile - updateUserProfile - Update profile

### ----------Emails Api----------------

###### POST /api/emails - createAndSendEmail - Create email

###### GET /api/emails - getReceivedAndSentEmails - Get all emails

###### GET /api/emails/unread - getTotalUnreadMessages - Get total unread emails count

###### PUT /api/emails/:id - markEmailAsRead - Mark an email as read

###### DELETE /api/emails/:id - deleteEmail - Delete an email
