//components
import DashboardHeader from "../components/headers/dashboardHeader.jsx";
import AddProductForm from "../components/forms/AddProductForm.jsx";

import { useEffect, useState } from "react";

//api
import Products from "../api/products.api.js"

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
                        <button style={{"margin":"20px"}} onClick={()=>{ deleteProduct(element.id) }}> Eliminar </button> </div>
                    })
                }
            
        </div>
    )

};

export default AdminPage;