import React from "react";
import { Link } from "react-router-dom";

import '../style.css';
  
const Register = () => {
  return (
    <div>
  <link rel="stylesheet" href="style.css" />
  <title>Register</title>
  <link rel="icon" type="image/x-icon" href="sheep2.png" />
  <div className="outerbox">
    <div className="innerbox">
      <div id="head">SIGN UP</div>
      <div>
        <form>
          <div className="idpass">
            <input type="text" id="forms" name="name" placeholder="Username" />
          </div>
          <div className="idpass">
            <input type="text" id="forms" name="mail" placeholder="Email" />
          </div>
          <div className="idpass">
            <input type="password" id="forms" name="pass" placeholder="Password" />
          </div>
          <div className="idpass">
            <input type="password" id="forms" name="pass2" placeholder="Confirm Password" />
          </div>
        </form></div>
      <div className="terms">
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" />I accept <Link to="/loremipsum">Term of Use</Link> &amp; <Link to="/loremipsum">Privacy Policy</Link>
        </label>
      </div>
      <div className="centerblock"> 
        <div className="social">
          <div id="left" />
          <div id="middle" />
          <div id="right" />
        </div>
      </div>
      <div className="centerblock"> 
        <div className="enter"><span> Sign Up</span></div>
      </div>
      <div className="already">
        <div>If you already have a sheep <Link to="/login">Sign In</Link></div>
      </div>
    </div>
  </div>
  <div className="sheep" />
</div>

  );
};
  
export default Register;