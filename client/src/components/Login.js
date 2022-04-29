import { useState } from "react";
// import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
// import { button } from "../styles/button";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <container>
      {/* <Logo>Log in</Logo> */}
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
  
          <p>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
  
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </container>
  );
}

export default Login;