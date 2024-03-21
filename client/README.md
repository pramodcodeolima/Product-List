//Run Project
>npm start
--------------


//Technology and packages used
>react-router-dom  ( Navigation and Links )
>react-icons       ( Icons )
>bootstrap         ( For Styling )
>axios             ( For Pass Front-End data to Back-End )
----------------------------------------------------------


//Components
>NavBarAni.jsx     ( NavBar for Animation.jsx page )
>NavBarHome.jsx    ( NavBar for Home.jsx page )
>nav.css           ( for style NavBars )
----------------------------------------------------------


//Images
>back.png          ( for background )
>banner.jpg        ( for banner )
>icon.png          ( for icon )
------------------------------------------------------------


//Pages
>Login.jsx          ( Get user email and password )
>Register.jsx       ( Get user details and create account )
>Home.jsx           ( Show wallpeper page )
>Animation.jsx      ( Show animation page )
>style.css          ( for style pages )
--------------------------------------------------------------


#PAGES

//App.js
>use BrowserRouter, Routes, Route for make router (react-router-dom)

#Route path = "/"           -> Render Login.jsx
#Route path = "/register"   -> Render Register.jsx
#Route path = "/home"       -> Render Home.jsx
#Route path = "/animation"  -> Render Animation.jsx
-----------------------------------------------------------------------


//Login.jsx
>use useState for Assign form vavlue
>use bootstrap for style
>>use style.css
>use images and react icons
>use {Link} for Hyperlinks
>use {useNavigation} for Navigation
>use axios for pass data to Back-End

1) user enter email and password
2) pass data to backend and check with mongodb atlas database 
3)
when email and password correct backend pass json value as "success" (alert) and navigate Home.jsx
*when password is incorrect backend pass json value as "incorrect password" (alert)
*when both email and password incorrect pass json value as "no account existed" (alert)

#http://localhost:5000/login    -> backend login endpoint

#functions
>handleSubmit    -> for get form value and send that value to backend and catch backend response
-------------------------------------------------------------------------------------------------


//Register.jsx
>use useState for Assign user data from form
>use axios for pass data to Back-End
>use {useNavigation} for Navigation
>use style.css
>use bootstrap for style

1) user enter
*First name
*Last Name
*Email
*Password
*Confirm Password And Create account
2) pass data to back-end using axios
3) when create account navigate Login.jsx page

#http://localhost:5000/register      -> backend Register endpoint

#Functions
>handleSubmit      -> get all value from form and send it to backend and then it is successfull navigate "Login.jsx"
---------------------------------------------------------------------------------------------------------------------


//Home.jsx
>use bootstrap for style
>use iamage
>use style.css
>use NavBarHome component

1)Load NavBarHome component
-----------------------------------------------------------------------------------------------------------------------


//Animation.jsx
>use bootstrap for style
>use iamage
>use style.css
>use NavBarAni component

1)Load NavBarAni component
-------------------------------------------------------------------------------------------------------------------------
