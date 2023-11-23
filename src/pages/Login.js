import { useContext, useState } from "react";
import HandleLogin from "../handlers/HandleLogin";
import { alertContext } from "../context/AlertContext";
import HandleSignUp from "../handlers/HandleSignUp";


function Login() {
  const [showSignup, setShowSignUp] = useState(false);
  const [error, setError] = useState(false);
  const [
    ,
    setOpenAlert,
    Message,
    setMessage,
    ,
    setAlertType,
    ,
    setOpenBackDrop,
  ] = useContext(alertContext);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
    userType: "CUSTOMER",
  });

  // Handle Title Render
  if (showSignup) {
    document.title = "CRM - Sign Up";
  } else {
    document.title = "CRM - Log In";
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const toggleSignup = () => {
    clearState();
    setShowSignUp(!showSignup);
  };

  const clearState = () => {
    setLoginForm({
      email: "",
      password: "",
      name: "",
      username: "",
      userType: "CUSTOMER",
    });
    setMessage("");
  };

  const onSignUp = (e) => {
    e.preventDefault();
    HandleSignUp(
      setMessage,
      setError,
      loginForm,
      setOpenBackDrop,
      setOpenAlert,
      setAlertType
    );
    clearState();
  };

  const onLogin = (e) => {
    e.preventDefault();
    HandleLogin(
      setMessage,
      setError,
      loginForm,
      setOpenBackDrop,
      setOpenAlert,
      setAlertType
    );
    clearState();
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" 
    style={{ backgroundImage: `url("https://source.unsplash.com/random/?Animals+Art+Textures+Landscape&1")`,
     backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
    <div className="card rounded-circle d-flex flex-column align-items-center justify-content-center" 
    style={{ width: '500px', height: '500px', backgroundColor: '#0ef', boxShadow: '0 0 500px rgba(0, 0, 0, 1)', 
    transition: 'box-shadow 0.3s ease-in-out' }}>
     <h1 className="text-info text-center mb-4" style={{ fontFamily: 'cursive', fontSize: '2.0em', color: 'black' }}>{showSignup ? "Welcome to the Club!" : "Log In to Your Account"}</h1>

  
      <form onSubmit={showSignup ? onSignUp : onLogin}>
        <div className="input-group">
          <input
            className="form-control m-1"
            type="text"
            value={loginForm.username}
            id="username"
            name="username"
            onChange={handleInputChange}
            placeholder="Your Username"
            style={{ borderRadius: '20px' }}
          />
        </div>
  
        {showSignup && (
          <>
            <div className="input-group">
              <input
                className="form-control m-1"
                type="text"
                value={loginForm.name}
                id="name"
                name="name"
                onChange={handleInputChange}
                placeholder="Your Full Name"
                style={{ borderRadius: '20px' }}
              />
            </div>
  
            <div className="input-group">
              <input
                name="email"
                className="form-control m-1"
                value={loginForm.email}
                id="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Your Email"
                style={{ borderRadius: '20px' }}
              />
            </div>
          </>
        )}
  
        <div className="input-group">
          <input
            className="form-control m-1"
            value={loginForm.password}
            id="password"
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="Your Password"
            style={{ borderRadius: '20px' }}
          />
        </div>
  
        <div className="input-group">
          <input
            className="btn btn-dark form-control text-white m-1 cursor-pointer"
            type="submit"
            value={showSignup ? "Sign Up" : "Log In"}
            style={{ backgroundColor: 'black', borderRadius: '20px' }}
          />
        </div>
  
        <div>
          {showSignup ? (
            <>
              <p>
                Already have an account ?
                <a href="#Signup" className="m-1" style={{ color: 'black' }} onClick={toggleSignup}>
                  LogIn
                </a>
              </p>
            </>
          ) : (
            <>
              <p>
                Don't have an account ?
                <a href="#Login" className="m-1" style={{ color: 'black' }} onClick={toggleSignup}>
                  Sign Up
                </a>
              </p>
            </>
          )}
        </div>
  
        <div className={error ? "text-danger mt-3" : "text-success"}>
          {Message}
        </div>
      </form>
    </div>
  </div>
    );
}

export default Login;
