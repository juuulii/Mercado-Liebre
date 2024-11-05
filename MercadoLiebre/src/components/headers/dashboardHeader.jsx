import "../../styles/components/headers/dashboardHeader.css";

//react
import { useContext, useState } from "react";

//context
import { ThemeContext } from "../../hooks/theme.ctx"
import { useEffect } from "react";

const DashboardHeader = () => {

    const { themeState, setThemeState } = useContext(ThemeContext);

    const classList = {
        dark:{
            nav:"nav-dark",
            a:"a-dark"
        },
        light:{
            nav:"nav-light",
            a:"a-light"
        }
    }

    const { styleState, setStyleState } = useState(classList.light)

    useEffect(()=>{

        const theme = window.localStorage.getItem("theme") ?? "light";
        setThemeState(theme);

    },[])

    const changeTheme = () => {

        if(themeState == "light"){
            setThemeState("dark");
            setStyleState(classList.dark);
            window.localStorage.setItem("theme", "dark")
        }else{
            setThemeState("light");
            setStyleState(classList.light);
            window.localStorage.setItem("theme", "light")
        };

        console.log(themeState)
    }

    return(

        <header >
            <img src="" alt=""  />
            <nav className={styleState.nav}>
                <a href="">Crea Tu Cuenta</a>
                <a href="">Ingresa</a>
                <a href="">Todos Los Productos</a>
                <button onClick={changeTheme}>Cambiar Tema</button>
            </nav>
        </header>

    )

};

export default DashboardHeader;