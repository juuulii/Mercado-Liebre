import { useState } from "react";

const LoginForm = () => {

    const [ emailState, setEmailState ] = useState(null);
    const [ passwordState, setPasswordState ] = useState(null);

    const handleEmailState = (event) => {
        setEmailState(event.target.value)
    };

    const handlePasswordState = (event) => {
        setPasswordState(event.target.value)
    };

    const handleSendData = (event) => {

        event.preventDefault();

        const body = {
            email:emailState,
            password: passwordState
        }

        console.log(body)

    };

    return(

        <form onSubmit={handleSendData}>
                <input type="text" placeholder="Email" value={emailState} onChange={handleEmailState} />
                <input type="password" placeholder="Password" value={passwordState} onChange={handlePasswordState} />
                <button type="submit"> Login </button>
        </form>

    )

};

export default LoginForm;