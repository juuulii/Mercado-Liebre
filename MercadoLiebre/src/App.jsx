//react
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//page
import LoginPage from "./pages/login.jsx";
import DashboardPage from "./pages/dahsboard.jsx";
import AdminPage from "./pages/admin.jsx";
import ProductPage from "./pages/product.jsx"

// import { AuthContextProvider } from "./components/Services/AuthContex.jsx";
import { ThemeContextProvider } from "./components/Services/ThemeContex.jsx";

import NotFound from "./components/notFound/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <LoginPage />,
      path: "/",
    },
    {
      element: <DashboardPage />, //client
      path: "/dashboard",
    },
    {
      element: <AdminPage />, //admin
      path: "/admin",
    },
    {
      element: <ProductPage />,
      path:"/product"
    },
    /*
        {
            element:<SuperAdmin />, //client
            path:"/dashboard"
        },
        */
    {
      path: "*", element: <NotFound />
    }
  ]);
  return (
    <div className="container">
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </div>
  );
};
export default App;
