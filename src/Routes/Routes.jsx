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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                element: <AddProduct></AddProduct>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: () => fetch('http://localhost:5000/addproduct')
            },
            {
                path: '/productDetail/:id',
                element: <ProductDetail></ProductDetail>,
                loader: () => fetch('http://localhost:5000/addproduct')
            },
            {
                path: '/mycart',
                element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/cart')
            }
        ]
    },
]);

export default router;