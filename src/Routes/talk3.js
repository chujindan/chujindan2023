import React from "react";
import p7 from '../pdf/007.png';
import p8 from '../pdf/008.png';
import p9 from '../pdf/009.png';
import p10 from '../pdf/010.png';
import p11 from '../pdf/011.png';
import p12 from '../pdf/012.png';
import p13 from '../pdf/013.png';


import { Link } from "react-router-dom";

const talk3 = () => {

    return (
        <div style={{marginBottom:"auto", paddingBottom:'1vh', display:"flex", flexDirection:"column"}}>
            <div className="pageBack">
                <Link to="/" style={{textDecoration:"none", color:"white"}}> 돌아가기 </Link>
            </div>
            <div><img src={p7} style={{width: "100%", marginTop:"2vh"}}/></div>
            <div><img src={p8} style={{width: "100%"}}/></div>
            <div><img src={p9} style={{width: "100%"}}/></div>
            <div><img src={p10} style={{width: "100%"}}/></div>
            <div><img src={p11} style={{width: "100%"}}/></div>
            <div><img src={p12} style={{width: "100%"}}/></div>
            <div><img src={p13} style={{width: "100%"}}/></div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <Link to="/talk" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 1 </Link>
                <Link to="/talk2" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 2 </Link>
                <div style={{textDecoration:"none", color:"gray", marginLeft:"2vw", marginRight:"2vw"}}> 3 </div>
                <Link to="/talk4" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 4 </Link>
                <Link to="/talk5" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 5 </Link>
                <Link to="/talk6" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 6 </Link>
                <Link to="/talk7" style={{textDecoration:"none", color:"white", marginLeft:"2vw", marginRight:"2vw"}}> 7 </Link>
            </div>
        </div>
    )
}

export default talk3