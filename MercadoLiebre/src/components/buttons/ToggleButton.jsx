import { useContext } from "react";
import { ThemeContext } from "../Services/ThemeContex";
import { Button } from "react-bootstrap";

const ToggleTheme = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <Button
      onClick={() => handleToggleTheme(theme === "LIGHT" ? "DARK" : "LIGHT")}
      className="my-3"
    >
      {theme === "LIGHT" ? "cambiar a claro" : "cambiar a oscuro"}
    </Button>
  );
};
export default ToggleTheme;
