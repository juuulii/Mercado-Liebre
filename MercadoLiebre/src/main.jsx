//libraries
import { createRoot } from 'react-dom/client';

//components
import App from "./app.jsx";

//styles
import "./styles/main.css"
import { StrictMode } from 'react';

//root element
const root = document.getElementById('root')

//root
createRoot(root).render(

        <App />

)
