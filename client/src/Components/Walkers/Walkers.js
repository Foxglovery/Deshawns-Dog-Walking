import { useEffect, useState } from "react";
import {
  UpdateWalkerCities,
  getAllCities,
  getAllWalkers,
  getWalkerById,
} from "../../apiManager";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Walkers.css";
import CityDropdown from "../Filter/CityDropdown";

export default function Walkers() {
  const navigate = useNavigate();
  const [walkers, setWalkers] = useState([]);
  const [walker, setWalker] = useState({});
  const [cities, setCities] = useState([]);
  const [filteredWalkers, setFilteredWalkers] = useState([]);
  const [detailsOpen, setDetailsOpen] = useState({});

  useEffect(() => {
    getAllWalkers()
      .then(setWalkers)
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

  const handleClick = (id) => {
    navigate(`/walkerDogs/${id}`);
  };
//here is where the details open, changing the value of id to true made them only open one at a time.
//look at old branch to see difference
  const handleDetails = (id) => {
    setDetailsOpen(() => ({
      [id]: true,
    }));
    getWalkerById(id).then((data) => {
      setWalker(data);
    });
  };

  const handleOnChange = (event) => {
    const cityToBeFound = cities.find((c) => c.id === event.target.value * 1);
    console.log(cityToBeFound);

    //if uncheck a city and city is in cityArray, needs to be removed
    //THIS RIGHT HERE IS WHERE THE MAGIC HAPPENS, THANK YOU EDWIN
    if (walker.cities.some((c) => cityToBeFound.id === c.id)) {
      const filteredCites = walker.cities.filter(
        (fc) => cityToBeFound.id !== fc.id
      );
      const copy = { ...walker };
      copy.cities = filteredCites;
      setWalker(copy);
    } else {
      const copy = { ...walker };
      copy.cities.push(cityToBeFound);
      setWalker(copy);
    }
  };

  const handleSubmit = () => {
    UpdateWalkerCities(walker).then(() => {
      getAllWalkers()
        .then(setWalkers)
        .catch(() => {
          console.log("API not connected");
        });
      setDetailsOpen({});
    });
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
                {/* had to abstract handleDetails into anonymous to prevent infinite rerender */}
                <button onClick={() => handleDetails(w.id)}>
                  Edit Walker Info
                </button>
                {detailsOpen[w.id] && (
                  <>
                    <fieldset>
                      <legend>Choose your walker's Cities:</legend>
                      {/* map over ALL cities instead of walkers cities */}
                      {cities.map((city, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={city.name}
                            value={city.id}
                            checked={walker.cities?.some(
                              (c) => city.id === c.id
                            )}
                            onChange={handleOnChange}
                          />
                          <label for={`custom-checkbox-${index}`}>
                            {city.name}
                          </label>
                        </div>
                      ))}
                    </fieldset>
                    <button onClick={handleSubmit}>Submit</button>
                  </>
                )}

                <button
                  className="add_dog_btn"
                  onClick={() => handleClick(w.id)}
                >
                  &#10133; &#128021;
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
