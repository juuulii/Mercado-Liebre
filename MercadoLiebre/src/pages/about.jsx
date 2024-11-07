import { useContext, useEffect } from "react";
import DashboardHeader from "../components/headers/dashboardHeader";
import Footer from "../components/footers/footer";
import { ThemeContext } from "../hooks/theme.ctx";
import "../styles/pages/about.css"

const About = () => {
    const { themeState, setThemeState } = useContext(ThemeContext);

    useEffect(() => {
        const theme = window.localStorage.getItem("theme") ?? "light";
        setThemeState(theme);
    }, []);

    return (
        <>
            <DashboardHeader />
            <div className={themeState === "dark" ? "about-dark" : "about-light"}>
                <h1>Sobre Nosotros</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quasi veritatis eligendi tempora ducimus numquam quibusdam explicabo unde repellat nam, tempore, consequuntur iure. Fuga iure numquam, praesentium eveniet modi omnis?</p>
            </div>
            <Footer />
        </>
    );
};

export default About;
