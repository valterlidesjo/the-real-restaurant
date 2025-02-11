import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, 
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Homepage />
            }, 
            {
                path: "/reservation",
                element: <Reservation />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])