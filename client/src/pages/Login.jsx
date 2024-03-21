import "./style.css";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import { PiHandWaving } from "react-icons/pi";
import image from '../images/back.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  //.env file variables
  const BaseURl = process.env.REACT_APP_URI;

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post( BaseURl+"/api/v1/login", {email, password})
    .then(result => {
      if(result.data === 'success'){
        navigate('/home')
      }
      else{
        alert(result.data)
      }
    })
    .catch(err => console.log(err))
  };


  return (
    <div className="container " style={{ zoom:'100%', display:'flex',flexDirection:'row', justifyContent:'center' }}>
      <div className="row">
        <div className="col text-start column">
          <div className="heading pt-4">
            <h3 className="mb-3">
              Welcome Back <PiHandWaving />
            </h3>
            <p className="mb-2">
              Today is a new day. It's your day. You shape it. Sign in to start
              managing your projects.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Example@gmail.com"
                  style={{ backgroundColor: "rgba(240, 240, 240, 0.6)" }}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="email"
                  placeholder="At Least 8 characters"
                  style={{ backgroundColor: "rgba(240, 240, 240, 0.6)" }}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="forgot-pw text-end">
                <Link to="">
                  <p>Forgot Password?</p>
                </Link>
              </div>
              <div className="button mt-4">
                <button type="submit" className="btn btn-dark w-100">
                  Submit
                </button>
              </div>
            </form>

            <div className="d-flex align-items-center mt-4">
              <div className="flex-grow-1">
                <hr className="my-4 w-100" />
              </div>
              <div className="or">OR</div>
              <div className="flex-grow-1">
                <hr className="my-4 w-100" />
              </div>
            </div>

            <div className="buttons">
              <button
                type="button"
                className="btn btn-white w-100"
                style={{ backgroundColor: "rgba(240, 240, 240, 0.8)" }}
              >
                <FcGoogle className="custom-icon"/> Sign in with Google
              </button>

              <button
                type="button"
                className="btn btn-white w-100 mt-3"
                style={{ backgroundColor: "rgba(240, 240, 240, 0.8)" }}
              >
                <MdOutlineFacebook className="custom-icon"/> Sign in with Facebook
              </button>
            </div>

            <div className="sign text-center mt-3">
              <p>
                Don't you have an account?<Link to="/register"> Sign up</Link>
              </p>
            </div>

            <div className="right mt-5 text-center">
              <p className="custom-font-size">© 2024 ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>

        <div className="col imagediv text-center">
          <div className="banner1">
            <img src={image} alt="backhround"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
