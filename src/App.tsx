import React from "react";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {S} from "./components/pages/_styles";
import "./App.css";
import {ModelAdidas} from "./components/pages/ModelAdidas";
import {ModelPuma} from "./components/pages/ModelPuma";

const PATH = {
    Page1: "/adidas",
    Page2: "/puma",
    Page3: "/abibas",
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
                </S.Nav>

                <S.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/page1"}/>}/>

                        <Route path={PATH.Page1} element={<Adidas/>}/>
                        <Route path={PATH.Page2} element={<Puma/>}/>
                        <Route path={PATH.Page3} element={<Abibas/>}/>
                        <Route path={"/adidas/:id"} element={<ModelAdidas/>}/>
                        <Route path={"/puma/:id"} element={<ModelPuma/>}/>

                        {/*<Route path="/*" element={<Error404/>}/>*/}
                        <Route path="/*" element={<Navigate to={PATH.Error}/>}/>

                    </Routes>

                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}


export default App;
