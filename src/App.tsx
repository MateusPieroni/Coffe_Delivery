import { Default } from "./layouts/Default";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Default/>,
        children:[

            {
                path: '/',
                element: <Home/>
            },

            {
                path: '/checkout',
                element: <Checkout/>
            },

            {
                path: '/success',
                element: <Success/>
            }

        ]
    }
    
])
