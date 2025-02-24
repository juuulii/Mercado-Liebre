import { useEffect } from "react";
import handleRole from "../utils/helpers/handleRole.js";

const useRole = (role) => {
    useEffect(() => {
        handleRole(role);
    }, [role]);
};

export default useRole;