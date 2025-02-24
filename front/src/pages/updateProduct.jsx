import UpdateProductForm from "../components/forms/updateProductForm.jsx";
import useRole from "../hooks/useRole.jsx"; // Importa el hook

const UpdateProductPage = () => {
    useRole(2); // Usamos el custom hook

    return (
        <>
            <UpdateProductForm />
        </>
    );
};

export default UpdateProductPage;