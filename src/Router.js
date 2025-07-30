import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyApp from "./App";
import LoginCard from "./LoginCard";
import SimpleButton from "./SimpleButton";
import BasicAppComponent from "./BasicAppComponent";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MyApp />} />
                <Route path="/home" element={<MyApp />} />
                <Route path="/login" element={<LoginCard />} />
                <Route path="/simple" element={<SimpleButton />} />
                <Route path="/basic" element={<BasicAppComponent />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
