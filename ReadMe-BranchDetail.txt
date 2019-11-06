1. Master Branch
=================
- Basic Angular Sample setup

2. KS-1
=======
- Added the following components
  -- Login Component
  -- Header Component
  -- Sidebar Component
  -- App Component
  -- Post Message Component
  -- View Message Component
- Added Router for Sidebar links
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

3. KS-2
=======
