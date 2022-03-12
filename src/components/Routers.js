import { Routes,Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Nc } from "./Normal-Certificate"
export const Routers = () => {
    return <div>
   <BrowserRouter>
   <Routes>
        <Route path="/Certi" element={<Nc/>}/>
    </Routes>
   </BrowserRouter>
</div>
}