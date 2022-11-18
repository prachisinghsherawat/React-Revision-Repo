import { Route, Routes } from "react-router-dom"
import { Counter } from "../Components/Counter"


export const AllRoutes = () => {

    return(

        <>
        <Routes>
            <Route path={"/counter"} element={<Counter/>} />
        </Routes>
        </>
    )
}