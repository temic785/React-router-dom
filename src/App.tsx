import React from "react";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles";

const PATH = {
    Page1: "/page1",
    Page2: "/page2",
    Page3: "/page3",
    Error: "/error404"
} as const

function App() {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper><NavLink to={PATH.Page1}> Page 1 </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.Page2}> Page 2 </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.Page3}> Page 3 </NavLink></S.NavWrapper>


                </S.Nav>
                <S.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/page1"}/>}/>

                        <Route path={PATH.Page1} element={<PageOne/>}/>
                        <Route path={PATH.Page2} element={<PageTwo/>}/>
                        <Route path={PATH.Page3} element={<PageThree/>}/>

                        <Route path={PATH.Error} element={<Error404/>}/>
                        <Route path="/*" element={<Navigate to={PATH.Error}/>}/>

                    </Routes>

                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}


export default App;
