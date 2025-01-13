import "./Login.css";
import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`http://localhost:8080/user/login`, { username, password })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response.data);
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
        <a href="#" className="forgot-password-link">
          Forgot password?
        </a>
        <button type="submit" className="login-button" onClick={handleLogin}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            "Log In"
          )}
        </button>
      </form>
      <p className="signup-prompt">
        Don&apos;t have an account?{" "}
        <a href="#" className="signup-link">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
