import {Error404} from "../components/pages/Error404";
import {ReactNode} from "react";

type Props = {
    children: ReactNode;
}

export const ProtectedRoute = ({children}: Props) => {
    const logged = true
    return (
        <>{logged ? children : <Error404/>}</>
    )


};