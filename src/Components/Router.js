import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Routes/Home";
import Menu1 from "../Routes/Menu1";
import Menu2 from "../Routes/Menu2";

import Menu5 from "../Routes/Menu5";
import Menu6 from "../Routes/Menu6";
import Menu7 from "../Routes/Menu7";
import Menu8 from "../Routes/Menu8";
import Seat from "../Routes/Seat";


const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/programs" element={<Menu1 />} />
                <Route exact path="/chujindanMembers" element={<Menu2 />} />
                <Route exact path="/talk" element={<Menu5 />} />
                <Route exact path="/guide" element={<Menu6 />} />
                <Route exact path="/clubAd" element={<Menu7 />} />
                <Route exact path="/survey" element={<Menu8 />} />
                <Route exact path="/whereIsMySeat" element={<Seat />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;