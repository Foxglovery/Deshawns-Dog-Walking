import { useEffect, useState } from "react";
import { getAllCities } from "../../apiManager";

const DogCityDropdown = ({selectedCity, setSelectedCity}) => {
  const [allCities, setAllCities] = useState([]);
  
  useEffect(() => {
    getAllCities().then((data) => {
      setAllCities(data);
    });
  }, []);

  const handleInputChange = (e) => {
    const selectedCityId = e.target.value;
    setSelectedCity(selectedCityId);
  };

  return (
    <div className="dog__dropdown_container">
      <select
        id="city"
        name="selectedCity"
        value={selectedCity}
        onChange={handleInputChange}
      >
        <option value="">--Select A City--</option>
        {allCities.map((city, index) => (
          <option key={index} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DogCityDropdown;
