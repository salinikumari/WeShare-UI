1. Master Branch
=================
- Basic Angular Sample setup

2. KS-1 - Router
=======
1 Added the following components
  -- Login Component
  -- Header Component
  -- Sidebar Component
  -- App Component
  -- Post Message Component
  -- View Message Component
2 Added Router for Sidebar links
  -- Passed Query Parameter to load ViewMessageComponent for both "My Messages" and "Others Messages"

* App Component
  -- Bootstrap Component
  -- Display the components based on the "isLoggedIn" status
     --- isLoggedIn = false
         Shows only Login Component
     --- isLoggedIn = true
	 Shows Header Component, Sidebar Component, Footer
  -- Listen for the  custom events (loginAuthenticated and logoutEvent)

* Login Component
  -- On click "Login" button, emits event to change the isLoggedIn status

*Header Component
 -- On click "Logout" button, emits event to change the isLoggedIn status


3. KS-2 - Service
=======
1. Login Component
   -- Validations to fill the values
   -- Store the Username in Local Storage
2. Header Component
   -- Display the username from local storage
3. Message Service
   -- Stores the Messages in an array
   -- Add Message
   -- Get Message (Provided Filter for Username)
3. Post Message 
   -- Add Message 
   -- Change User
      (To simulate message postings of other users)
   -- Uses MessageService
4. View Message
   -- Display the Messages based on myMsg
   -- Uses MessageService

3. KS-3 - Reactive Forms
========
1. User Add Component
   a. Details
   - Personal
     First Name
     Last Name
     User Name(email)
   - Contact Details (Multiple - Can be added using "Add More" and can be removed using "delete" option)
     Phone
     Address
     City
     State
     Country
     Zip Code
   - Hobbies (Multiple selection)
     - Can select from checkboxes
     - "Other" selection should bring up Textbox to accept the values
   
  b. Use Model, Service
  c. Use FormGroup and FormArray 
  d. Add Validators and display error
  e. On Submit
     - Add the user using UserService
     - After successful add, display User List
  f. Use same component for User Edit
     - Display the existing Details
     - On submit update the user
     - After successful update, display User List


2. Users List Component
   a. Display all the users in a table
   b. Provide "Edit" and "Delete" option for each user record
   c. On "edit", load UserAddComponent
   d. On "delete", delete the user (using UserService)

3. Sidebar Component
   a. Add link for User List and User Add

4. Issue Fix:
On hitting F5: the ui logged out: Fixed
(App component checks localStorage and retain the isLoggedIn)

4. KS-4 - API Calls
========
1. Connect to WeShare-API
   - Login
   - Post Message
   - View My Messages
   - View Others Messages
   