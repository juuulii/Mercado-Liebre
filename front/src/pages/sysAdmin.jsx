//components
import DashboardHeader from "../components/headers/dashboardHeader";
import Footer from "../components/footers/footer";
import UserForm from "../components/forms/userForm";
import { useEffect } from "react";
import handleRole from "../utils/helpers/handleRole";

//styles

import "../styles/main.css";

const SysAdmin = () => {

    useEffect(()=>{
        handleRole(3);
    },[])
    
    return(
        <div className="sysAdmin-container">
            <DashboardHeader />
            <UserForm />
            <Footer />
        </div>
    );

};

export default SysAdmin;