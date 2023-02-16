import React from "react";
import { Link } from "react-router-dom";

import '../style.css';

const Login = () => {
  return (
    <div>
      <header>
        <link rel="stylesheet" href="style.css" />
        <title>Login Page</title>
        <link rel="icon" type="image/x-icon" href="sheep2.png" />
        <div className="cloud1" />
        <div className="cloud2" />
      </header>
      <div className="outerbox">
        <div className="innerbox">
          <div id="head">LOG IN</div>
          <div>
            <div>
              <form>
                <input type="text" id="forms" name="name" placeholder="Username" />
              </form></div>
            <div>
              <input type="password" id="forms" name="pass" placeholder="Password" />
            </div>
          </div>
          <div className="centerblock">
            <div className="forgot">
              <label className="scale">
                <input type="checkbox" className="checksize" defaultChecked="checked" name="remember" />Remember me
              </label>
              <div className="scale">Forgot Password</div>
            </div>
          </div>
          <div className="centerblock">
            <div className="social">
              <div id="left" />
              <div id="middle" />
              <div id="right" />
            </div>
          </div>
          <div className="centerblock">
            <div className="enter"><span> Sign in</span></div>  
          </div>
          <div className="noaccount">
            <div>If you don't have a sheep yet  <Link to="/register">Sign Up</Link></div>
          </div>
        </div>
      </div>     
      <div className="sheep" />
    </div>
  );
};
  
export default Login;