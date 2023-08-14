import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./Demo";
import FullscreenDemo from "./FullscreenDemo";
import Navbar from "./Navbar";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Demo />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
