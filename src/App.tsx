import React from "react";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {S} from "./components/pages/_styles";
import "./App.css";
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";

const PATH = {
    Page1: "/adidas",
    Page2: "/puma",
    Page3: "/abibas",
    Prices:"/prices",
    Error: "/error404"
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
                </S.Nav>

                <S.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.Page1}/>}/>

                        <Route path={PATH.Page1} element={<Adidas/>}/>
                        <Route path={PATH.Page2} element={<Puma/>}/>
                        <Route path={PATH.Page3} element={<Abibas/>}/>
                        <Route path={PATH.Prices} element={<Prices/>}/>
                        <Route path="/:model/:id" element={<Model />} />

                        {/*<Route path="/*" element={<Error404/>}/>*/}
                        <Route path="/*" element={<Navigate to={PATH.Error}/>}/>

                    </Routes>

                </S.Content>
            </S.Body>
            <S.Footer>abibas 2025</S.Footer>
        </div>
    );
}


export default App;
