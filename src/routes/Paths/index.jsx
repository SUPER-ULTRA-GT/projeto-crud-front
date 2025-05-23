import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Home from "../../components/Home";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />} >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;