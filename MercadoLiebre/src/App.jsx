import { useState, useEffect } from "react";
import LoginForm from "./components/forms/loginForm.jsx"
import Products from "./api/products.api.js";


const App = () => {

    const [productsState, setProductsState] = useState(null);

    useEffect(()=>{

        const getProducts = async() => {

            const products = await Products.getAll();
            setProductsState(products)

        };

        getProducts();

    }, []);

    const handleProductState = () => {
        console.log(productsState)
    }

    return(

        <div className="container">
            <LoginForm />
            <button onClick={handleProductState}>
                Cambiar
            </button>
        </div>

    )

};

export default App;