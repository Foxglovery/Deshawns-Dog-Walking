import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Home/Home";
import DogDetails from "./Components/DogDetails/DogDetails";
import Walkers from "./Components/Walkers/Walkers";
import Cities from "./Components/Cities/Cities";
import AddDog from "./Components/AddDog/AddDog";
import WalkerDogs from "./Components/WalkerDogs/WalkerDogs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //EVERYTHING LOADS APP FIRST BECAUSE OUTLET IS INSIDE OF APP
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/walkers" element={<App />}>
        <Route index element={<Walkers />} />
      </Route>
      <Route path="/cities" element={<App />}>
        <Route index element={<Cities />}/>
      </Route>
      <Route path="/addDog" element={<App />}>
        <Route index element={<AddDog />} />
      </Route>
      <Route path="/dogDetails" element={<App />}>
        <Route path=":currentDog" element={<DogDetails />} />
      </Route>
      <Route path="/walkerDogs" element={<App />}>
        <Route path=":walkerId" element={<WalkerDogs />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
