import React from "react";
import seatTable from '../seatTable.jpg';
import { Link } from "react-router-dom";
import { AiOutlineInsertRowAbove } from "react-icons/ai";

const Seat = () => {

    const seatText = "테이블 자리표";
    const seatText2 = "제 자리가 어디에요?";

    return (
        <div style={{marginBottom:"auto", paddingBottom:'1vh', display:"flex", flexDirection:"column"}}>
            <div className="pageBack">
                <Link to="/" style={{textDecoration:"none", color:"white"}}> 돌아가기 </Link>
            </div>
            <div className="pageTop"><AiOutlineInsertRowAbove size={"10%"} />{seatText}</div>
            <div><img src={seatTable} style={{width: "100%", marginTop:"2vh"}}/></div>
        </div>
    )
}

export default Seat