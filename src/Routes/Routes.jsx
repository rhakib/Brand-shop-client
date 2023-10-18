import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

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
            }
        ]
    },
]);

export default router;