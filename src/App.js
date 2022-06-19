import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/basket" element={<Basket/>}/>
        <Route exact path="/logs" element={<Logs/>}/>
      </Routes>
    </div>
  );
}

export default App;
