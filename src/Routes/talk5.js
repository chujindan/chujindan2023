import React from "react";
import p17 from '../pdf/017.png';
import p18 from '../pdf/018.png';
import p19 from '../pdf/019.png';
import p20 from '../pdf/020.png';
import p21 from '../pdf/021.png';


import { Link } from "react-router-dom";

const talk5 = () => {

    return (
        <div style={{marginBottom:"auto", paddingBottom:'1vh', display:"flex", flexDirection:"column"}}>
            <div className="pageBack">
                <Link to="/" style={{textDecoration:"none", color:"white"}}> 돌아가기 </Link>
            </div>
            <div><img src={p17} style={{width: "100%", marginTop:"2vh"}}/></div>
            <div><img src={p18} style={{width: "100%"}}/></div>
            <div><img src={p19} style={{width: "100%"}}/></div>
            <div><img src={p20} style={{width: "100%"}}/></div>
            <div><img src={p21} style={{width: "100%"}}/></div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <Link to="/talk" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 1 </Link>
                <Link to="/talk2" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 2 </Link>
                <Link to="/talk3" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 3 </Link>
                <Link to="/talk4" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 4 </Link>
                <div style={{textDecoration:"none", color:"gray", marginLeft:"2vw", marginRight:"2vw"}}> 5 </div>
                <Link to="/talk6" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 6 </Link>
                <Link to="/talk7" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 7 </Link>
            </div>
        </div>
    )
}

export default talk5