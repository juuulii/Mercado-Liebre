import { useState, useEffect } from "react";
import LoginForm from "./components/forms/loginForm.jsx"
import Products from "./api/products.api.js";


const App = () => {

    return(

        <div className="container">
            <LoginForm />
        </div>

    )

};

export default App;