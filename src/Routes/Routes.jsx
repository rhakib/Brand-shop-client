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
                path: '/productdetail/:id',
                element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/addproduct')
            },
            {
                path: '/mycart',
                element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/cart')
            },
            {
                path: '/products/updateproducts/:id',
                element: <UpdateProducts></UpdateProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/addproduct/${params.id}`)
            }
        ]
    },
]);

export default router;