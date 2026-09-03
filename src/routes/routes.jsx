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
    // ড্যাশবোর্ড লেআউটকে প্রাইভেট রুট দিয়ে মোড়ানো হলো
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    // আপনি যখন Dashboard.jsx ফাইলটি তৈরি করবেন, তখন নিচের অংশটি আনকমেন্ট করে ইমপোর্ট করে নেবেন
    /*
    children: [
      {
        path: "",
        element: <Dashboard />, 
      },
    ],
    */
  },
]);