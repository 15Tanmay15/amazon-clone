import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history('/');
        })
        .catch(error => alert(error.message))
    // firebase login
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
    // firebase register
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="amazon_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(p) => setPassword(p.target.value)}
          />

          <button type="submit" onClick = {signIn} className="login_signInButton">
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon-Clone's Conditions of Use and
          Privacy Notice.
        </p>

        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
