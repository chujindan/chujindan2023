import React from "react";
import p14 from '../pdf/014.png';
import p15 from '../pdf/015.png';
import p16 from '../pdf/016.png';


import { Link } from "react-router-dom";

const talk4 = () => {

    return (
        <div style={{marginBottom:"auto", paddingBottom:'1vh', display:"flex", flexDirection:"column"}}>
            <div className="pageBack">
                <Link to="/" style={{textDecoration:"none", color:"white"}}> 돌아가기 </Link>
            </div>
            <div><img src={p14} style={{width: "100%", marginTop:"2vh"}}/></div>
            <div><img src={p15} style={{width: "100%"}}/></div>
            <div><img src={p16} style={{width: "100%"}}/></div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <Link to="/talk" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 1 </Link>
                <Link to="/talk2" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 2 </Link>
                <Link to="/talk3" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 3 </Link>
                <div style={{textDecoration:"none", color:"gray", marginLeft:"2vw", marginRight:"2vw"}}> 4 </div>
                <Link to="/talk5" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 5 </Link>
                <Link to="/talk6" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 6 </Link>
                <Link to="/talk7" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 7 </Link>
            </div>
        </div>
    )
}

export default talk4
