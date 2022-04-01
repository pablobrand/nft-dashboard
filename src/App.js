import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ethers } from "ethers";
import Navbar from "./components/NavBar";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <script>var Alert = ReactBootstrap.Alert;</script>
      </header>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
