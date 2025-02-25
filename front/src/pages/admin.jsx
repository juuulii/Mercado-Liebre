//components
import DashboardHeader from "../components/headers/dashboardHeader.jsx";
import AddProductForm from "../components/forms/AddProductForm.jsx";

import { useEffect, useState } from "react";

//styles
import "../styles/components/buttons/DeleteButton.css";
import "../styles/components/buttons/UpdateButton.css";
import "../styles/pages/admin.css"

//api
import Products from "../api/products.api.js"
import env from "../utils/enviroment.js";

//utils
import handleRole from "../utils/helpers/handleRole.js";

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

    useEffect(()=>{ 

        handleRole(2);
        getProducts() 
    
    },[]);

    return (
        <div className="admin-container-products">
            <DashboardHeader />
            <AddProductForm />
            
            <div className="products-container">
                {productsState.length === 0 ? (
                    <h1>Cargando Productos...</h1>
                ) : (
                    productsState.map((element, index) => (
                        <div className="product-row" key={index}>
                            <img className="product-image" src={element.imageURL} alt={element.title} />
                            <div className="product-info">
                                <h3>{element.title}</h3>
                                <p>${element.price}</p>
                            </div>
                            <div className="product-buttons">
                                <button className="deleteButton" onClick={() => deleteProduct(element.id)}>
                                    Eliminar
                                </button>
                                <button className="updateButton" onClick={() => redirectToUpdate(element.id)}>
                                    Actualizar
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
    

    
    

};

export default AdminPage;