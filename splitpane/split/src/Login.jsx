import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import BG from "./assets/login.jpeg";
import logo from "./assets/logo.png";
let Login = () => {
  let navigate = useNavigate();
  let buttonEl = useRef(null);
  let buttonHandler = (event) => {
    buttonEl.current.disabled = !event.target.checked;
  };
  let submitHandler = (event) => {
    event.preventDefault();
    navigate("navbar");
  };
  return (
    <div>
      <img className="backgroundImg" src={BG} />
      <div className="login">
        <div className="card card-color">
          <div className="card-body ">
            <div class="text-center ">
              <img className="logoimg" src={logo} />
            </div>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  placeholder="Enter Valid UserName"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Enter Valid Password"
                  className="form-control"
                />
              </div>
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={buttonHandler}
                />
                <span className="checkboxspan">Remember me</span>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Sign-In"
                  className="form-control btn btn-success"
                  ref={buttonEl}
                  disabled
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
