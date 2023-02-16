import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import './index.css';
export default function App() {
  return (
    
   
    <BrowserRouter>
      <Routes>
      <Route className="layout" path="/" element={<Navbar />}>
          <Route className="layout" path="home" element={<Home />} />
          <Route className="layout" path="login" element={<Login />} />
          <Route className="layout" path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

