//components
import DashboardHeader from "../components/headers/dashboardHeader.jsx";
import AddProductForm from "../components/forms/AddProductForm.jsx";

import { useEffect, useState } from "react";

//api
import Products from "../api/products.api.js"
import env from "../utils/enviroment.js";

const AdminPage = () => {

    const [productsState, setProductsState] = useState([]);

    const getProducts = async() => {

        const products = await Products.getProducts();

        if(!products){
            setProductsState([]);
        }else{
            setProductsState(products);
        }

    };

    useEffect(()=>{ getProducts() },[])

    const deleteProduct = async(id) => {

        const deleteResult = await Products.delete(id);

        if(deleteResult){

            console.log("Producto Eliminado");
            window.location.reload();

        }else{
            console.error(`El producto: ${id} no se elimino`)
        }

    }

    const redirectToUpdate = (id) => {

        window.localStorage.setItem("product", id);
        window.location.href = `${env.frontUrl}/updateProduct`
    }

    return(

        <div className="admin-container-products">

            <DashboardHeader></DashboardHeader>
            <AddProductForm></AddProductForm>
                {
                    productsState.length == 0
                    ? <h1>Cargando Productos...</h1>
                    : productsState.map((element, index)=>{
                        return <div key={index}> 
                        <img style={{"width":"50px", "height":"50px", "margin":"10px"}} src={element.imageURL} alt="" />
                        {element.title} - {element.price} 
                        <button style={{"margin":"20px"}} onClick={()=>{ deleteProduct(element.id) }}> Eliminar </button> 
                        <button onClick={()=>{ redirectToUpdate(element.id) }}> Actualizar </button>
                        </div>
                    })
                }
            
        </div>
    )

};

export default AdminPage;