import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatRoom from "./Components/ChatRoom/ChatRoom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="chartroom/:roomName" element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
