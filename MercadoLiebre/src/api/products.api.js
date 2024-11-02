import env from "../utils/enviroment.js"

const Products = {

    getProducts:async(id)=> {

        let url;

        id 
        ? url = `${env.backUrl}/products/${id}` 
        : url = `${env.backUrl}/products`

        const options = {
            method:"GET"
        }

        const request = await fetch(url, options);

        if(!request.ok){
            console.error("Request Error!")
            return false;
        }

        const response = request.json();

        console.log("Request Successfull");
        return response;

    },
};

export default Products;