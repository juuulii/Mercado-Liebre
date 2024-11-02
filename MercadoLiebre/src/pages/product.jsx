//react
import { useEffect, useState } from "react";

//api
import Products from "../api/products.api.js"

//components
import DashboardHeader from "../components/headers/dashboardHeader.jsx"
import Footer from "../components/footers/footer.jsx";

//utils
import env from "../utils/enviroment.js";

const ProductPage = () => {

    const [ productState, setProductState ] = useState(null);

    useEffect(()=>{

        const getProduct = async() => {

            //obtener el id desde el localstorage
            const idProduct = window.localStorage.getItem("product")

            if(!idProduct){
                window.location.href = `${env.frontUrl}/dashboard`
            }

            //hacer la peticion a la base de datos usando el id
            const product = await Products.getProducts(idProduct);

            //establecer el valor de productState en product (el producto obtenido de la DB)
            setProductState(product);

        };

        getProduct();

    },[])

    return(
        <>

       <DashboardHeader/>
        
        {
            !productState 
            ? <h1>Cargando...</h1> 
            : <div>
                <h1>{productState.title}</h1>
                <img src={productState.image} />
                <h3>{productState.price}</h3>
                <p>{productState.description}</p>
            </div>
        }

        <Footer/>
        </>

    )

};

export default ProductPage;