//Start Back-End
>npm start or node index.js
---------------------------


//Server
#Server is Running on Port ( 5000 )
#BackEnd End point start with ( http://localhost:5000 )  -> Localhost:Port
---------------------------------------------------------------------------



//Technology and packages used
>Express         -> Create back-end server
>mongoose        -> Connect with mongoDB
>cors            -> Access Resources
-------------------------------------------


//Models
>UserModel      -> Create Datatable and make schema
#use mongoose Schema
#save it in "register" table
---------------------------------------------------


//MongoDB - Atlas Connection
mongoDB Account ( pramodcodeolima:codeolima123 | Database : CODEOLIMA )
>Make connection for Error handling in MongoDB
------------------------------------------------------------------------


//Back-End http Function

# ( /register )
1) Catch front-end pass data and save it in UserModel Model
2) Is this process is ok then response "201" Status Code
3) Is this process has error response "500" Ststus Code And Print error in Console

# ( /login )
1) Catch front-end pass data and find data in UserModel using "Email"
2) Is email is found then check it is "password" correct with front-end pass "password"
3) Then password is correct response "success" to frontend using json call
4) When Password is incorrect then response "password incorrect" to frontend using json call
5) when there are no any records email = "frontend pass email" then resonse to frontend "no account existed" using json
