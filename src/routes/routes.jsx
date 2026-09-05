import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";
import Overview from "../pages/dashboard/Overview";
import SellerRoute from "./private/SellerRoute";
import Myproducts from "../pages/dashboard/seller/Myproducts";
import Addproducts from "../pages/dashboard/seller/Addproducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",

    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },

      // seller routes

      {
        path: "/dashboard/my-products",
        element: <SellerRoute><Myproducts /></SellerRoute>,
      },

      {
        path: "/dashboard/add-products",
        element: <SellerRoute><Addproducts /></SellerRoute>,
      },
    ],
  
  },
]);


