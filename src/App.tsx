import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import {S} from "./components/pages/_styles";
import "./App.css";

const PATH = {
    Page1: "/adidas",
    Page2: "/puma",
    Page3: "/abibas",
    Prices: "/prices",
    Error: "/error404",
    ProtectedPage: "/protected",

} as const

function App() {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper><NavLink to={PATH.Page1}> Adidas </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.Page2}> Puma </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.Page3}> Abibas </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.Prices}> Prices </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ProtectedPage}> Protected Page </NavLink></S.NavWrapper>
                </S.Nav>

                <S.Content>
                    <Outlet/>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2025</S.Footer>
        </div>
    );
}


export default App;
