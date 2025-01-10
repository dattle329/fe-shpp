const SocialLogin = () => {
    return (
      <div className="social-login">
        <button className="social-button">
          <img src="./src/assets/logos/google.svg" alt="Google" className="social-icon" />
          Google
        </button>
        <button className="social-button">
          <img src="./src/assets/icon/keycloak-icon.png" alt="Keycloak" className="social-icon" />
          Keycloak
        </button>
      </div>
    )
  }
  export default SocialLogin;