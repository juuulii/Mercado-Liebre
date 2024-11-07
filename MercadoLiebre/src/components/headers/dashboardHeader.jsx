import "../../styles/components/headers/dashboardHeader.css";

import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../hooks/theme.ctx";

const DashboardHeader = () => {
    const { themeState, setThemeState } = useContext(ThemeContext);

    useEffect(() => {
        const theme = window.localStorage.getItem("theme") ?? "light";
        setThemeState(theme);
    }, []);

    const changeTheme = () => {
        const newTheme = themeState === "light" ? "dark" : "light";
        setThemeState(newTheme);
        window.localStorage.setItem("theme", newTheme);
        console.log(newTheme);
    };

    return (
        <header className={themeState === "dark" ? "header-dark" : "header-light"}>
            <img src="" alt="" />
            <nav>
                <a className={themeState === "dark" ? "header-a-dark" : "header-a-light"} href="">Crea Tu Cuenta</a>
                <a className={themeState === "dark" ? "header-a-dark" : "header-a-light"} href="">Ingresa</a>
                <a className={themeState === "dark" ? "header-a-dark" : "header-a-light"} href="">Todos Los Productos</a>
                <button onClick={changeTheme}>Cambiar Tema</button>
            </nav>
        </header>
    );
};

export default DashboardHeader;
