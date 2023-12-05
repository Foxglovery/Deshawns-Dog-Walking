import "./AddDog.css";
import DogCityDropdown from "../Filter/DogCityDropdown";
import { useEffect, useState } from "react";
export default function AddDog() {
  const [selectedCity, setSelectedCity] = useState("");
  const [newDog, setNewDog] = useState({
    name: "",
    imgUrl: "",
    CityId: "",
  });

  useEffect(() => {
    setNewDog((prevDog) => ({
      ...prevDog,
      CityId: selectedCity,
    }));
  }, [selectedCity]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewDog({
      ...newDog,
      [name]: value,
    });
  };
//when user submits, call post method on newDog
//api call will take newDog
  return (
    <div className="addDog__form_container">
      <form action="/" className="dog_form">
        <div className="form_inner">
          <h1>Contact us</h1>
          {/* when change, update newDogName. Name = dogName value = {newDogName} */}
          <input
            type="text"
            name="name"
            placeholder="Dog Name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="imgUrl"
            placeholder="Image URL"
            onChange={handleInputChange}
          />
          {
            <DogCityDropdown
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          }
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
