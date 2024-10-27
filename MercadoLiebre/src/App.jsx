//react
import { createBrowserRouter, RouterProvider } from "react-router-dom"

//page
import LoginPage from "./pages/login.jsx";
import DashboardPage from "./pages/dahsboard.jsx";
import AdminPage from "./pages/admin.jsx";

const App = () => {
    const router = createBrowserRouter([
        {
            element:<LoginPage />,
            path:"/"
        },
        {
            element:<DashboardPage />, //client
            path:"/dashboard"
        },
        {
            element:<AdminPage />, //admin
            path:"/admin"
        },
        /*
        {
            element:<SuperAdmin />, //client
            path:"/dashboard"
        },
        */
    ])
    return(
        <div className="container">
        <RouterProvider router={router} />
        </div>
    )
};
export default App;