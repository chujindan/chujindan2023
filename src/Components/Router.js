import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Routes/Home";
import Menu1 from "../Routes/Menu1";
import Menu2 from "../Routes/Menu2";
import Menu3 from "../Routes/Menu3";
import Menu4 from "../Routes/Menu4";
import Menu5 from "../Routes/Menu5";
import Menu6 from "../Routes/Menu6";


const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/programs" element={<Menu1 />} />
                <Route exact path="/chujindan" element={<Menu2 />} />
                <Route exact path="/question" element={<Menu3 />} />
                <Route exact path="/talk" element={<Menu4 />} />
                <Route exact path="/survey" element={<Menu5 />} />
                <Route exact path="/guide" element={<Menu6 />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;