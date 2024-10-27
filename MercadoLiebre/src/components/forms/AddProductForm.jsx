//react
import {useState} from "react";

//utils
import handleChangeForm from "../../utils/helpers/handleChangeForm.js"

const AddProductForm = () => {

    const model = {
        title:"",
        description:"",
        price:"",
        category:"",
        image:""
    }

    const [ formState, setFormState ] = useState(model);

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(formState)
    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Title" value={formState.title} onChange={ (event)=>{ handleChangeForm(event, formState, setFormState,"title") } } />
            <input type="text" placeholder="Description" value={formState.description} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "description") }} />
            <input type="number" placeholder="Price"  value={formState.price} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "price") }}/>
            <input type="text" placeholder="Category" value={formState.category} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "category") }} />
            <input type="text" placeholder="Image URL" value={formState.image} onChange={(event)=>{ handleChangeForm(event, formState, setFormState, "image") }} />

            <button type="submit"> Cargar Producto </button>
        </form>
    )

};


export default AddProductForm;