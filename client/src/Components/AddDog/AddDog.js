import "./AddDog.css";
import DogCityDropdown from "../Filter/DogCityDropdown";
import { useEffect, useState } from "react";
import { AddADog } from "../../apiManager";
import { useNavigate } from "react-router-dom";
export default function AddDog() {
  const [selectedCity, setSelectedCity] = useState("");
  const [newDog, setNewDog] = useState({
    name: "",
    imgUrl: "",
    CityId: "",
  });
  const navigate = useNavigate();

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
const handleSubmit = async (e) => {
    e.preventDefault();
    // if (newDog.name.trim() === "")
    // {
    //     return;
    // }
    try
    {
        const addedDog = await AddADog(newDog);
        navigate(`/dogDetails/${addedDog.id}`)
    }
    catch (error)
    {
        window.alert(`Error adding dog.

Did you select a city?`, error);
    }
}
//api call will take newDog
  return (
    <div className="addDog__form_container">
      <form action="/" className="dog_form" onSubmit={handleSubmit}>
        <div className="form_inner">
          <h1>Contact us</h1>
          {/* when change, update newDogName. Name = dogName value = {newDogName} */}
          <input
            type="text"
            name="name"
            required
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
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}
