//react
import { useState, useEffect } from "react"

//components
import DashboardHeader from "../components/headers/dashboardHeader.jsx";
import ProductsSlider from "../components/sliders/productsSlider.jsx";
import ProductContainer from "../components/containers/productContainer.jsx"
import Footer from "../components/footers/footer.jsx";

//api
import Products from "../api/products.api.js"

const DashboardPage = () => {

    const [ productsState, setProductsState ] = useState([]);

    const getProducts = async() => {

        const products = await Products.getProducts();

        console.log(products)

        setProductsState(products);

    };

    useEffect(()=>{

        getProducts();

    }, [])

    return(

        <>
        <DashboardHeader/>
        <ProductsSlider/>
        <div className="dashboardPage_productsContainer">

            {
                productsState.length == 0 
                ? <h1>Cargando...</h1>
                : productsState.map((element, index)=>{
                    return <ProductContainer

                    key={index}
                    product={element}

                    />
                })
            }


        </div>
        <Footer />
        </>

    )
};

export default DashboardPage;