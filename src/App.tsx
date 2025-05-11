import React from "react";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {S} from "./components/pages/_styles";
import styles from "./components/pages/Site.module.css";
import "./App.css";

const PATH = {
    Adidas: "/adidas",
    Puma: "/puma",
    Abibas: "/abibas",
    Prices: "/prices",
    Error: "/error404",
    ProtectedPage: "/protected",

} as const

function App() {

    const navigate = useNavigate()
    const navigateHandler = () => {
                navigate(-1)
    }
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper><NavLink to={PATH.Adidas}> Adidas </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.Puma}> Puma </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.Abibas}> Abibas </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.Prices}> Prices </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ProtectedPage}> Protected Page </NavLink></S.NavWrapper>
                </S.Nav>

                <S.Content>
                    <div className={styles.HorizontalNavigation}>
                        <Link to={PATH.Adidas} onClick={navigateHandler} className={styles.LinkLikeButton}>HOME</Link>
                        <button onClick={navigateHandler} className={styles.ButtonLikeLink}>Назад</button>
                    </div>

                    <Outlet/>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2025</S.Footer>
        </div>
    );
}


export default App;
