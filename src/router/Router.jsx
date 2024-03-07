import { Route, Routes } from "react-router-dom"
import Details from "../pages/Details"
import Home from "../pages/Home"

const Router =()=>{
    return (
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/details/:userId' element= {<Details/>}/>
        </Routes>
    )
}
export default Router