import React from "react";
import p22 from '../pdf/022.png';
import p23 from '../pdf/023.png';
import p24 from '../pdf/024.png';
import p25 from '../pdf/025.png';


import { Link } from "react-router-dom";

const talk6 = () => {

    return (
        <div style={{marginBottom:"auto", paddingBottom:'1vh', display:"flex", flexDirection:"column"}}>
            <div className="pageBack">
                <Link to="/" style={{textDecoration:"none", color:"white"}}> 돌아가기 </Link>
            </div>
            <div><img src={p22} style={{width: "100%", marginTop:"2vh"}}/></div>
            <div><img src={p23} style={{width: "100%"}}/></div>
            <div><img src={p24} style={{width: "100%"}}/></div>
            <div><img src={p25} style={{width: "100%"}}/></div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <Link to="/talk" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 1 </Link>
                <Link to="/talk2" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 2 </Link>
                <Link to="/talk3" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 3 </Link>
                <Link to="/talk4" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 4 </Link>
                <Link to="/talk5" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 5 </Link>
                <div style={{textDecoration:"none", color:"gray", marginLeft:"2vw", marginRight:"2vw"}}> 6 </div>
                <Link to="/talk7" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 7 </Link>
            </div>
        </div>
    )
}

export default talk6