import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import {S} from "./_styles"

export const ModelAdidas = () => {
    const params = useParams();
    const idObj = adidasArr.findIndex(adidas => adidas.id === params.id)
    const modelSneakers = adidasArr[idObj]


    return modelSneakers ? (
        <S.ModelWrapper>
            <img src={modelSneakers.picture} alt=""/>
            <p>Model: {modelSneakers.model}</p>
            <p>Collection: {modelSneakers.collection}</p>
            <p>Price: {modelSneakers.price}</p>
        </S.ModelWrapper>
    ) : <S.NotFoundModel>Not found model</S.NotFoundModel>;

};

