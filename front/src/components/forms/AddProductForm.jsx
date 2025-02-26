//react
import {useState} from "react";

//utils
import handleChangeForm from "../../utils/helpers/handleChangeForm.js";

//api
import Products from "../../api/products.api.js";

//styles
import "../../styles/pages/AddProductForm.css";


const AddProductForm = () => {

    const model = {
        title:"",
        description:"",
        price:"",
        category:"",
        imageURL:""
    }

    const [ formState, setFormState ] = useState(model);

    const handleSubmit = async(event) => {

        event.preventDefault();

        const id = await Products.create(formState);

        console.log(`producto ${id} creado!`);

        window.location.reload();
        
    }

    return (
        
        <form className ="form-add"onSubmit={handleSubmit} >

            <input type="text" placeholder="Título" value={formState.title} onChange={ (event)=>{ handleChangeForm(event, formState, setFormState,"title") } } />
            <input type="text" placeholder="Descripción" value={formState.description} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "description") }} />
            <input type="number" placeholder="Precio"  value={formState.price} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "price") }}/>
            <input type="text" placeholder="Categoría" value={formState.category} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "category") }} />
            <input type="text" placeholder="Imagen URL" value={formState.image} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "imageURL") }} />

            <button type="submit"> Cargar Producto </button>
            
        </form>
    )

};


export default AddProductForm;