import {adidasArr, CurrentModel} from "./Adidas";
import {useParams} from "react-router-dom";
import {S} from "./_styles"
import {pumaArr} from "./Puma";

type CrossModels = {
    [key: string]: CurrentModel[]
}
const crossModel: CrossModels = {
    adidas: adidasArr,
    puma: pumaArr
}
export const Model = () => {
    const {model, id} = useParams();

    const currentModel = model ? crossModel[model].find(el => Number(el.id) === Number(id)) : null;

    return currentModel ? (
        <S.ModelWrapper>
            <img src={currentModel.picture} alt=""/>
            <p>Model: {currentModel.model}</p>
            <p>Collection: {currentModel.collection}</p>
            <p>Price: {currentModel.price}</p>
        </S.ModelWrapper>
    ) : <S.NotFoundModel>Not found model</S.NotFoundModel>;

};

