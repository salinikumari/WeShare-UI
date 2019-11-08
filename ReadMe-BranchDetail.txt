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
   Details
   - Personal
     First Name
     Last Name
     User Name(email)
   - Contact Details (Multiple)
     Phone
     Address1
     Address2
     City
     State
     Country
     Zip Code
   - Hobbies (Multiple)
     - Can select from checkboxes
     - "Other" selection should bring up Textbox to accept the values
   
 Use Model
 Use FormGroup and FormArray

2. Users List Component