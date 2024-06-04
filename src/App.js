import React, { useState } from "react";
import MemeData from "./components/frontendSystemDesign/MemeData";
import Header from "./components/frontendSystemDesign/Header";
import "./App.css";
import About from "./components/frontendSystemDesign/About";
import Home from "./components/frontendSystemDesign/Home";
import Contact from "./components/frontendSystemDesign/Contact";
import Comments from "./components/frontendSystemDesign/comments/Comments";
import Login from "./components/frontendSystemDesign/Login";
import ProtectedRoute from "./components/frontendSystemDesign/ProtectedRoute";
import { Route, Routes, BrowserRouter as Routing } from "react-router-dom";
import Accordian from "./components/frontendSystemDesign/Accordian/Accordian";
import Debouncing from "./components/frontendSystemDesign/debounce/Debouncing";
import LiveChat from "./components/frontendSystemDesign/liveChat/LiveChat";
import Pagination from "./components/frontendSystemDesign/pagination/Pagination";

function App() {
  const [lang, setLang] = useState("en");
  //const isAuthenticated = true; please write auth logic in WraperRoute Component(Protected route)

  return (
    <div className="App">
      <Routing>
        <Header lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<MemeData />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/debounce" element={<Debouncing />}></Route>

          <Route path="/about" element={<About lang={lang} />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/comment" element={<Comments />}></Route>{" "}
          </Route>
          <Route path="/accordian" element={<Accordian />}></Route>
          <Route path="/liveChat" element={<LiveChat />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/login-protect" element={<Login />}></Route>
        </Routes>
      </Routing>
    </div>
  );
}

export default App;
