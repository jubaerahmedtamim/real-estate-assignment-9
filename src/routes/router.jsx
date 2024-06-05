import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/404NotFound/NotFound";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/residence.json'),
            },
            {
                path: '/property-details/:id',
                element: <PropertyDetails></PropertyDetails>,
                loader:() => fetch('/public/residence.json'),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    }
]) 