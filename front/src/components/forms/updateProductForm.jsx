//utli
import handleChangeForm from "../../utils/helpers/handleChangeForm.js";

//api
import Products from "../../api/products.api.js";

//react
import { useEffect, useState } from "react";

//components
import ProductContainer from "../containers/productContainer.jsx";
import env from "../../utils/enviroment.js";

//styles
import "../../styles/pages/AddProductForm.css"


const UpdateProductForm = () => {

    const model = {
        id:"",
        title:"",
        description:"",
        price:"",
        category:"",
        imageURL:""
    }

    const [ formState, setFormState ] = useState(model);

    useEffect(()=>{
        const getProduct = async() =>{

            const idProduct = window.localStorage.getItem("product");

            const product = await Products.getProducts(idProduct);

            setFormState({...product, id:idProduct});

        };

        getProduct();

    },[])

    const handleSubmit = async(event) => {

        event.preventDefault();

        const idProduct = window.localStorage.getItem("product");

        setFormState({...formState, id:idProduct});

        const isUpdated = await Products.update(formState);

        if(isUpdated){

            alert(`Producto ${formState.id} Actualizado Exitosamente`);
            window.location.href = env.frontUrl + "/admin"

        }else{ alert(`Error al actualizar el producto ${formState.id}`)};
        
    }

    return (
        <>

        {
            formState.id == "" 
            ? <h1>Cargando...</h1> 
            :<form className="form-add" onSubmit={handleSubmit} >
            <input type="text" placeholder="Título" value={formState.title} onChange={ (event)=>{ handleChangeForm(event, formState, setFormState,"title") } } />
            <input type="text" placeholder="Descripción" value={formState.description} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "description") }} />
            <input type="number" placeholder="Precio"  value={formState.price} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "price") }}/>
            <input type="text" placeholder="Categoría" value={formState.category} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "category") }} />
            <input type="text" placeholder="Imagen URL" value={formState.imageURL} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "imageURL") }} />

            <button type="submit"> Actualizar Producto </button> <br />

            <ProductContainer product={formState}></ProductContainer>
        </form>
        }
        
        

        </>


    )

};


export default UpdateProductForm;