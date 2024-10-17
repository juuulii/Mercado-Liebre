const Products = {

    getAll:async()=> {

        const url = "https://fakestoreapi.com/products";
        const options = {
            method:"GET"
        }

        const request = await fetch(url, options);

        if(!request.ok){
            console.error("Request Error!")
            return false;
        }

        const response = request.json();
        console.log("Request Successfull")
        return response;

    },
    getOne:async() => {

    }

};

export default Products;