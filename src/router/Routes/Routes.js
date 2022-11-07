import Main from "../../LayOut/Main";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Home from "../../pages/Home/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Orders from "../../pages/Orders/Orders";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRouter> <CheckOut></CheckOut></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            }
        ]

    }
])

export default router;