import { useEffect, useState } from "react";
import {
  getAllCities,
  getAllDogs,
  getAllWalkers,
  getWalkerById,
} from "../../apiManager";
import { Link } from "react-router-dom";
import "./Walkers.css";
import CityDropdown from "../Filter/CityDropdown";

export default function Walkers() {
  const [walkers, setWalkers] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredWalkers, setFilteredWalkers] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [allDogs, setAllDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [walkerIdToAssign, setWalkerIdToAssign] = useState(0);
  const [walkerToAssign, setWalkerToAssign] = useState({});
  const [citiesForWalker, setCitiesForWalker] = useState([]);
  const [displayedWalkers, setDisplayedWalkers] = useState({});


  useEffect(() => {
    getAllWalkers()
      .then(setWalkers)
      .catch(() => {
        console.log("API not connected");
      });
    getAllDogs()
      .then(setAllDogs)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);

  useEffect(() => {
    getAllCities()
      .then(setCities)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);

  useEffect(() => {
    if (walkerToAssign.cities) {
      const filteredCitiesForWalker = walkerToAssign.cities.map((c) => c.id);
      setCitiesForWalker(filteredCitiesForWalker);
    }
  }, [walkerToAssign]);

  useEffect(() => {
    const dogsInCity = allDogs.filter((d) =>
      citiesForWalker.includes(d.cityId)
    );
    const unpairedDogs = dogsInCity.filter(dog => dog.walkerId == null);
    setFilteredDogs(unpairedDogs);
  }, [citiesForWalker, allDogs]);

  const handleToggle = (id) => {
    setWalkerIdToAssign(id);
    //used this instead of original toggle, to stop each one from opening.
    setDisplayedWalkers(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
    getWalkerById(id).then((data) => {
      setWalkerToAssign(data);
    });

    setIsDisplayed(!isDisplayed);
  };

  return (
    <>
      <div className="walker__main">
        <section className="walker__walker_gallery">
          <header className="walker__header_container">
            <h2>All Walkers</h2>
            <CityDropdown
              walkers={walkers}
              cities={cities}
              filteredWalkers={filteredWalkers}
              setFilteredWalkers={setFilteredWalkers}
            />
          </header>

          <div className="walker__walker_container">
            {filteredWalkers.map((w) => (
              <div key={w.id} className="walker__walker_card">
                <button className="walker__delete_btn">&#x2718;</button>
                <img
                  className="walker__walker-img"
                  alt="a walker"
                  src={w.imgURL}
                />
                <Link to={`/walkerDetails/${w.id}`}>
                  <p>{w.name}</p>
                </Link>
                <button
                  className="add_dog_btn"
                  onClick={() => handleToggle(w.id)}
                >
                  &#10133; &#128021;
                </button>
                {displayedWalkers[w.id] && (
                  <ul>
                    {filteredDogs.map((dog) => (
                      <Link to={`/dogDetails/${dog.id}`}>
                      <li key={dog.id}>{dog.name}</li>
                      </Link>
                      
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
