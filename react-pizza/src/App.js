import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home";
import NoteFoundBlock from "./pages/NoteFound";
import "./scss/app.scss";
import FullPizza from "./pages/FullPizza";
import MainLayouts from "./layouts/MainLayouts";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<NoteFoundBlock />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
