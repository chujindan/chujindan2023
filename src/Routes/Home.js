import React from "react";
import logo from '../logo.png';
import opentalk from '../opentalk.png';
import { Link } from "react-router-dom";
import { AiOutlineAppstore, AiOutlineTeam, AiOutlineQuestionCircle, AiOutlineComment, AiOutlineLike, AiOutlineFileDone } from "react-icons/ai";

const Home = () => {

    const menu1 = "총정모\n프로그램";
    const menu2 = "총정모\n추진단";
    const menu3 = "선배에게\n묻습니다";
    const menu4 = "선배와의\n대화\n-부록-";
    const menu5 = "총정모\n만족도조사";
    const menu6 = "뒤풀이\n가이드";
    const open = "오픈카톡";
    return (
        <div id="main">
            <div id="main_title">
                <div id="main_logo">
                    <img src={logo} id="logo" alt="logo" />
                </div>
                <div id="title">총정모 길라잡이</div>
                <div id="main_openChatLink">  
                    <a href="https://open.kakao.com/o/gRyHiq1e" id="openChatLink">
                        <img src={opentalk} className="openlogo"/>{open}
                    </a>
                </div>
            </div>
            <div id="main_menuBox">
                <ul id="menuContents">
                    <div className="contentsRow">
                        <Link to="/programs" className="content"><AiOutlineAppstore size={"50%"} />{menu1}</Link>
                        <Link to="/chujindan" className="content"><AiOutlineTeam size={"50%"} />{menu2}</Link>
                    </div>
                    <div className="contentsRow">
                        <Link to="/question" className="content"><AiOutlineQuestionCircle size={"50%"} />{menu3}</Link>
                        <Link to="/talk" className="content"><AiOutlineComment size={"50%"} />{menu4}</Link>
                    </div>
                    <div className="contentsRow">
                        <Link to="/survey" className="content"><AiOutlineLike size={"50%"} />{menu5}</Link>
                        <Link to="/guide" className="content"><AiOutlineFileDone size={"50%"} />{menu6}</Link>
                    </div>
                </ul>

            </div>
        </div>
    )

}

export default Home;
