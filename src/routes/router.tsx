import * as React from "react";
import {createBrowserRouter, Navigate, Outlet, RouteObject,} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Prices} from "../components/pages/Prices";
import {Abibas} from "../components/pages/Abibas";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {LogIn} from "../components/pages/LogIn";

const PATH = {
    ADIDAS: "/adidas",
    PUMA: "/puma",
    ABIBAS: "/abibas",
    PRICES: "/prices",
    ERROR: "*",
    MODEL: "/:model/:id",
    PROTECTED_PAGE: "/protected",
    LOGIN: "/login",
} as const

const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED_PAGE,
        element: <ProtectedPage/>
    },
]
const publicRoutes: RouteObject[] = [
    {
        index: true,
        element: <Adidas/>,
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },

    {
        path: "*",
        element: <Error404/>,
    },
    {
        path: PATH.LOGIN,
        element: <LogIn/>
    },
]

export const PrivateRoutes = () => {
    const isAuth = true
    return (
        <>{isAuth ? <Outlet/> : <Navigate to={`/login`}/>}</>
    )
};


export const routerSneakers = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes,
        ]
    }

]);

