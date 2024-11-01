//components
import LoginForm from "../components/forms/loginForm.jsx"

import "../styles/components/loginPage/LoginPage.css"; 

const LoginPage = () => {
  return (
    <div className="login-container"> {/* Cambia a login-container */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
