import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home/Home";
import DogDetails from "./DogDetails/DogDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //EVERYTHING LOADS APP FIRST BECAUSE OUTLET IS INSIDE OF APP
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/walkers" element={<App />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/dogDetails" element={<App />}>
        <Route path=":currentDog" element={<DogDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
