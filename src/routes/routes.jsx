import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import AllServices from "../pages/AllServices/AllServices";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PropertyList from "../pages/PropertyList/PropertyList";
import Singup from "../pages/Singup/Singup";
import PrivateRoute from "../utils/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/sing-up",
                element: <Singup />
            },
            {
                path: "/propertylist",
                element: (
                    <PrivateRoute>
                        <PropertyList />
                    </PrivateRoute>
                )

            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/services",
                element: <AllServices></AllServices>
            },



        ]

    }
])

export default routes