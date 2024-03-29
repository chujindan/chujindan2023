import React from "react";
import logo from '../logo.png';
import opentalk from '../opentalk.png';
import { Link } from "react-router-dom";
import { AiOutlineAppstore, AiOutlineTeam, AiOutlineQuestionCircle, AiOutlineComment, AiOutlineLike, AiOutlineFileDone } from "react-icons/ai";

const Home = () => {

    const menu1 = "총정모\n프로그램";
    const menu2 = "총정모\n추진단원";
    const menu3 = "총정모\n오픈채팅방";
    const menu4 = "선배님께\n묻습니다";
    const menu5 = "선배님과의\n대화\n-부록-";
    const menu6 = "뒤풀이\n가이드";

    const seatText = "테이블 자리표";
    const surveyText = "총정모 만족도 조사";

    const openkatalkLink = "https://open.kakao.com/o/gRyHiq1e";
    const questionLink = "https://docs.google.com/forms/d/e/1FAIpQLSdZtYjBipwVkaKQUgXsrOV8MsG5GT5bI0VpubdJzA9d-XWuag/viewform";
    const surveyLink = "https://docs.google.com/forms/d/e/1FAIpQLScFHOxV87wKDAeEC1rbZHI35j9kKsXp79MshrNWuKB01aS5Ew/viewform"
    
    return (
        <div id="main">
            <div id="main_title">
                <div id="main_logo">
                    <img src={logo} id="logo" alt="logo" />
                </div>
                <div id="title">총정모 길라잡이</div> 
            </div>
            <div id="main_menuBox">
                <ul id="menuContents">
                    <div className="contentsRow">
                        <Link to="/programs" className="content"><AiOutlineAppstore size={"50%"} />{menu1}</Link>
                        <Link to="/chujindanMembers" className="content"><AiOutlineTeam size={"50%"} />{menu2}</Link>
                    </div>
                    <div className="contentsRow">
                        <div className="content"> 
                            <a href={openkatalkLink} className="content2" target="_blank">
                                <div><img src={opentalk} width={"50%"} /></div>
                                {menu3}
                            </a>
                        </div>
                        <div className="content"> 
                            <a href={questionLink} className="content2" target="_blank" >
                                <AiOutlineQuestionCircle size={"50%"} />{menu4}
                            </a>
                        </div>
                    </div>
                    <div className="contentsRow">
                        <Link to="/talk" className="content"><AiOutlineComment size={"50%"} />{menu5}</Link>
                        <Link to="/guide" className="content"><AiOutlineFileDone size={"50%"} />{menu6}</Link>
                    </div>
                    <div className="contentsRow">
                        <Link to="/whereIsMySeat" className="content3">{seatText}</Link>
                        <a href={surveyLink} className="content3" target="_blank" >{surveyText}</a>
                    </div>
                </ul>

            </div>
        </div>
    )

} //

export default Home;
