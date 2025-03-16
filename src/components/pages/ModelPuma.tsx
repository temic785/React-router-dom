import React from "react";
import {useParams} from "react-router-dom";
import {pumaArr} from "./Puma";
import {S} from "./_styles";

export const ModelPuma = () => {
    const params = useParams();
    console.log(params);
    const idObj = pumaArr.findIndex(puma => puma.id === params.id);
    const modelPuma = pumaArr[idObj];
    return modelPuma ? (
        <S.ModelWrapper>
            <img src={modelPuma.picture} alt=""/>
            <p>Model: {modelPuma.model}</p>
            <p>Collection: {modelPuma.collection}</p>
            <p>Price: {modelPuma.price}</p>
        </S.ModelWrapper>
    ) : <S.NotFoundModel>Not found model</S.NotFoundModel>;
};