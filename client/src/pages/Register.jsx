import React, { useState } from 'react'
import image from '../images/back.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  //.env file variables
  const BaseUrl = process.env.REACT_APP_URI;


  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post( BaseUrl+"/api/v1/register", {fname, lname, email, password})
    .then((result) => {
      navigate("/")
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="container" style={{ zoom:'100%', display:'flex',flexDirection:'row', justifyContent:'center' }}>
      <div className="row">
        <div className="col text-start">
          <div className="banner1">
            <img src={image}></img>
          </div>
        </div>

        <div className="col text-start">
          <div className="heading mt-4">
            <div className="subhead">
              <h2>Create a new Account</h2>
              <p>
                Today is a new day. It's your day. You shape it. Sign in to
                start managing your projects.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label for="fname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  placeholder="Enter Your First Name"
                  required
                  style={{ backgroundColor: "rgba(240, 240, 240, 0.6)" }}
                  onChange={(e)=>setFname(e.target.value)}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="lname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  placeholder="Enter Your Last Name"
                  required
                  style={{ backgroundColor: "rgba(240, 240, 240, 0.6)" }}
                  onChange={(e)=>setLname(e.target.value)}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Example@email.com"
                  required
                  style={{ backgroundColor: "rgba(240, 240, 240, 0.6)" }}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="At least 8 characters"
                  required
                  style={{ backgroundColor: "rgba(240, 240, 240, 0.6)" }}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="repassword" className="form-label">
                  Re Enter Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="repassword"
                  placeholder="At least 8 characters"
                  required
                  style={{ backgroundColor: "rgba(240, 240, 240, 0.6)" }}
                />
              </div>
              <div className="button mt-5">
                <button type="submit" className="btn btn-dark w-100">Signup</button>
              </div>
            </form>
            <div className="right mt-5 text-center">
              <p className="custom-font-size">© 2024 ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
