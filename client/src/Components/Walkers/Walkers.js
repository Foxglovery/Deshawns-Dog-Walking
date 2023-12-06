import { useEffect, useState } from "react";
import { getAllCities, getAllWalkers } from "../../apiManager";
import { Link } from "react-router-dom";
import "./Walkers.css"
import CityDropdown from "../Filter/CityDropdown";


export default function Walkers() {
  const [walkers, setWalkers] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredWalkers, setFilteredWalkers] = useState([]);

  useEffect(() => {
    getAllWalkers()
      .then(setWalkers)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);

  useEffect(() => {
    getAllCities().then(setCities).catch(() => {
        console.log("API not connected");
    });
  },[])

  return (
    <>
      <div className="walker__main">
        <section className="walker__walker_gallery">
          <header className="walker__header_container">
            <h2>All Walkers</h2>
            <CityDropdown
            walkers = {walkers}
            cities = {cities}
            filteredWalkers = {filteredWalkers}
            setFilteredWalkers = {setFilteredWalkers}
             />
          </header>

          <div className="walker__walker_container">
            {filteredWalkers.map((item) => (
              <div className="walker__walker_card">
                <button className="walker__delete_btn">&#x2718;</button>
                <img
                  className="walker__walker-img"
                  alt="a walker"
                  src={item.imgURL}
                />
                <Link to={`/walkerDetails/${item.id}`}>
                  <p>{item.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
