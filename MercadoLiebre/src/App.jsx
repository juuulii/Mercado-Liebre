//react
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//page
import LoginPage from "./pages/login.jsx";
import DashboardPage from "./pages/dahsboard.jsx";
import AdminPage from "./pages/admin.jsx";
import ProductPage from "./pages/product.jsx"
import About from "./pages/about.jsx";
import SysAdmin from "./pages/sysAdmin.jsx"
// import { AuthContextProvider } from "./components/Services/AuthContex.jsx";
import  {ThemeProvider}  from "./hooks/theme.ctx.jsx"

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
      element: <SysAdmin />,
      path: "/sysAdmin",
    },
    {
      element: <ProductPage />,
      path:"/product"
    },
    {
      element: <About />,
      path:"/about"
    },
    {
      path: "*", element: <NotFound />
    }
  ]);
  return (
    <div className="container">
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
};
export default App;
