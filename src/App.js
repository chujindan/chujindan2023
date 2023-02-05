

import AppRouter from './Components/Router';
import './App.css';

function App() {


  return (
    <>
      <div className="App">
        <AppRouter />
        <footer id="tail" style={{paddingTop: "1vh"}}>
          <div> &copy; 2023 5급 공채 총정모 추진단 </div>
          <div style={{fontSize: "1vmin", display:"flex", justifyContent: "flex-start", width:"100%"}}> 
            <div style={{marginRight:"10px"}}>단장 정유나 📱010-7153-6227</div>
            <div>부단장 김현수 📱010-2385-0744</div>
          </div>
          <div style={{fontSize: "0.5vmin"}}>홈페이지 관리자 김주호</div>
        </footer>
      </div>
    </>

  );
}

export default App;
