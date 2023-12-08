import { useEffect, useState } from "react";
import { getAllCities, getAllWalkers, getWalkerById } from "../../apiManager";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Walkers.css";
import CityDropdown from "../Filter/CityDropdown";

export default function Walkers() {
  const navigate = useNavigate();
  const [walkers, setWalkers] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredWalkers, setFilteredWalkers] = useState([]);
  const [detailsOpen, setDetailsOpen] = useState({});
  const [walkerCities, setWalkerCities] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(walkerCities.length).fill(true)
  );

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

  const handleDetails = (id) => {
    setDetailsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    getWalkerById(id).then((data) => {
      const citiesArray = data.cities.map((c) => c.id);
      setWalkerCities(citiesArray);
    });
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }

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
                {detailsOpen[w.id] && (<>
                  
                  <fieldset>
                        <legend>Choose your walker's Cities:</legend>
                        
                        {w.cities.map(({name}, index) => (
                          //if walkercities.includes c.Id, then render the box checked
                          
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            checked = {checkedState[index]}
                            onChange={() => handleOnChange(index)}
                            
                          />
                          <label for={`custom-checkbox-${index}`}>{name}</label>
                        </div>))}

                        
                      </fieldset>
                    <button>Submit</button>
                  
                </>)}

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
