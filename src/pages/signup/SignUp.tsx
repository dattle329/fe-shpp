import { Box, CircularProgress } from "@mui/material";
import InputField from "../../components/InputField";
import axios from "axios";
import { useEffect, useState } from "react";
import "../login/Login.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleSignup = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`http://18.226.4.205//:8080/user/signup`, { username, password })
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
      <h2 className="form-title">Create an account</h2>
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
        <button type="submit" className="login-button" onClick={handleSignup}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            "Sign up"
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
