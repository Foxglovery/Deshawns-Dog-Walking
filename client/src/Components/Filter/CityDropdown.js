import { useEffect, useState } from "react";
import { getCityWalkers } from "../../apiManager";

const CityDropdown = ({ walkers, cities, setFilteredWalkers }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [cityWalkers, setCityWalkers] = useState([]);

  useEffect(() => {
    if (walkers) {
      setFilteredWalkers(walkers);
    }
  }, [walkers, setFilteredWalkers]);
  const handleInputChange = (e) => {
    const selectedCityId = e.target.value;
    setSelectedCity(selectedCityId);
    console.log("cityid", selectedCityId);
    getCityWalkers(parseInt(selectedCityId)).then((data) => {
      setCityWalkers(data);
    });
    if (walkers) {
      if (selectedCityId === "") {
        setFilteredWalkers(walkers);
      } else {
        console.log("cityWalkers", cityWalkers);
        setFilteredWalkers(cityWalkers);
      }
    }
  };

  return (
    <div className="dropdown-container">
      <select
        id="city"
        name="selectedCity"
        value={selectedCity}
        onChange={handleInputChange}
      >
        <option value="">--Select A City--</option>
        {cities.map((city, index) => (
          <option key={index} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default CityDropdown;
