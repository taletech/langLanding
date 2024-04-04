import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Main from "./components/main/Main";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
