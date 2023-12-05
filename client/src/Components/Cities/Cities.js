import { useEffect, useState } from "react";
import "./Cities.css";
import { AddCity, getAllCities } from "../../apiManager";

export default function Cities() {
  //need cities
  const [allCities, setAllCities] = useState([]);
  const [newCityName, setNewCityName] = useState("");

  useEffect(() => {
    getAllCities()
      .then(setAllCities)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);

  const handleInputChange = (e) => {
    const userInput = e.target.value.split(' ');
    const capitalizedInput = userInput.map(ui => {
        const firstLetter = ui.charAt(0).toUpperCase();
        const remainingLetters = ui.slice(1).toLowerCase();
        return firstLetter + remainingLetters;
    })
    const capitalized = capitalizedInput.join(' ');
    setNewCityName(capitalized);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newCityName.trim() === "") {
        return;
    }
    try {
        const newCity = await AddCity(newCityName);
        setAllCities((prevCities) => [...prevCities, newCity]);
        setNewCityName("");
    } catch (error) {
        console.log("Failed to add city", error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label for="cityName">Add A City</label>
          <input id="cityName" type="text" value={newCityName} onChange={handleInputChange}></input>
          <button type="submit">Add City</button>
        </form>
      </div>
      <ul className="city__list">
        {allCities.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}
