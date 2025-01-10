import './Login.css'
import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";

const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />
      <p className="separator"><span>or</span></p>
      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon={<img src="./src/assets/icon/gmail-icon.webp" alt="" height='25px' width='25px'/>} />
        <InputField type="password" placeholder="Password" icon={<img src="./src/assets/icon/lock-icon.png" alt="" height='25px' width='25px'/>} />
        <a href="#" className="forgot-password-link">Forgot password?</a>
        <button type="submit" className="login-button">Log In</button>
      </form>
      <p className="signup-prompt">
        Don&apos;t have an account? <a href="#" className="signup-link">Sign up</a>
      </p>
    </div>
  )
}
export default App;
