import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddProduct from "../Pages/AddProduct";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetail";
import Mycart from "../Pages/Mycart";
import PrivateRoute from "./PrivateRoute";
import UpdateProducts from "../Pages/UpdateProducts";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: () => fetch('https://brandshop-server.vercel.app/addproduct')
            },
            {
                path: '/productdetail/:id',
                element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
                loader: () => fetch('https://brandshop-server.vercel.app/addproduct')
            },
            {
                path: '/mycart',
                element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
                loader: () => fetch('https://brandshop-server.vercel.app/cart')
            },
            {
                path: '/products/updateproducts/:id',
                element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brandshop-server.vercel.app/addproduct/${params.id}`)
            }
        ]
    },
]);

export default router;