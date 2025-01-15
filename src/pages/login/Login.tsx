import "./Login.css";
import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`http://18.226.4.205//:8081/user/login`, { username, password })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setLoading(false);
        navigate('/authenticated');
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        setErrorMessage(error.response.data);
      });
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />
      <p className="separator">
        <span>or</span>
      </p>
      <form action="#" className="login-form">
        <InputField
          type="text"
          placeholder="Username or email"
          icon={
            <img
              src="./src/assets/icon/gmail-icon.webp"
              alt=""
              height="25px"
              width="25px"
            />
          }
          onChange={(e: any) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          icon={
            <img
              src="./src/assets/icon/lock-icon.png"
              alt=""
              height="25px"
              width="25px"
            />
          }
          onChange={(e: any) => setPassword(e.target.value)}
        />
        {error ? (
          <p style={{color: 'red', marginBottom: '15px'}}>{errorMessage}</p>
        ) : (
          ''
        )}
        <a href="#" className="forgot-password-link" style={{marginTop: '5px'}}>
          Forgot password?
        </a>
        <button type="submit" className="login-button" onClick={handleLogin}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress sx={{ color: 'white' }}/>
            </Box>
          ) : (
            "Log In"
          )}
        </button>
      </form>
      <p className="signup-prompt">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="signup-link">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
