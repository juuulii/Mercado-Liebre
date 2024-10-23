//react
import { useState } from "react";

//components
import LargeButton from "../buttons/largeButton.jsx";

const LoginForm = () => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const handleEmailState = (event) => {
    setEmailState(event.target.value);
  };

  const handlePasswordState = (event) => {
    setPasswordState(event.target.value);
  };

  const handleSendData = (event) => {
    try {
      event.preventDefault();

      if (!emailState.includes(["@"])) {
        throw new Error("Che esto no es un mail");
      }
      if (!passwordState) {
        throw new Error("Che, llena el password");
      }

      const body = {
        email: emailState,
        password: passwordState,
      };

      console.log(body);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className = "login">
       <form>
      <h1>LOG IN</h1>
      <input
        type="text"
        placeholder="Email"
        value={emailState}
        onChange={handleEmailState}
      />
      <input
        type="password"
        placeholder="Password"
        value={passwordState}
        onChange={handlePasswordState}
      />

      <LargeButton text={"Submit"} action={handleSendData} />
    </form>

    </div>
   
  );
};

export default LoginForm;
