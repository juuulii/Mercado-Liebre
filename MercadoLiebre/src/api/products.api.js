import env from "../utils/enviroment.js"

const Products = {

    getProducts: async(id)=> {

        let url;
        const token = window.localStorage.getItem("jwt");

        id 
        ? url = `${env.backUrl}/api/Item/${id}` 
        : url = `${env.backUrl}/api/Item`

        console.log(url)

        const options = {
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            }
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

    create: async(body) => {

        const token = window.localStorage.getItem("jwt");

        //url de la api
        let url = `${env.backUrl}/api/Item`;

        //opciones de configuracion de la peticion
        let options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify(body)
        };

        //hacer la peticion
        const request = await fetch(url, options);

        //convertir la respuesta de la peticion a texto
        const response = await request.text();

        //retornar la respuesta
        return response;

    },

    delete: async(id) => {

        const token = window.localStorage.getItem("jwt");

        //url de la api
        let url = `${env.backUrl}/api/Item/${id}`;

        //opciones de configuracion de la peticion
        let options = {
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        };

        //hacer la peticion
        const request = await fetch(url, options);

        if(request.ok){

            return true;

        }else{
            return false;
        }
    }


};

export default Products;