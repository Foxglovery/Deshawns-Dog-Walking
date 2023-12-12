import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AssignDog, getAllDogs, getWalkerById } from "../../apiManager";

export default function WalkerDogs() {
  const { walkerId } = useParams();
  const navigate = useNavigate();
  const [walker, setWalker] = useState({});
  const [dogsUnpaired, setDogsUnpaired] = useState([]);
  const [citiesArray, setCitiesArray] = useState([]);

  useEffect(() => {
    //get walkers
    getWalkerById(walkerId).then((data) => {
      setWalker(data);
      //map new array of cityIds for walker
      const walkerCitiesArray = data.cities.map((c) => c.id);
      setCitiesArray(walkerCitiesArray);
    });
  }, [walkerId]);

  useEffect(() => {
    //if cities has value
    if (citiesArray.length > 0) {
      //get all dogs
      getAllDogs().then((data) => {
        //get only dogs in those cities
        const localDogs = data.filter((d) => citiesArray.includes(d.cityId));
        //get only unpaired dogs
        const availableDogs = localDogs.filter((d) => d.walkerId == null);
        setDogsUnpaired(availableDogs);
      });
    }
  }, [citiesArray]);

  const handleClick = (walkerId, dogId) => {
    const dogToUpdate = {
      Id: dogId,
      WalkerId: walkerId,
    };

    AssignDog(dogId, dogToUpdate).then(() => {
      navigate(`/dogDetails/${dogId}`);
    });
  };
  return (
    <div className="walker__walker_details">
      <div className="walker__walker_card">
        <h2>{walker.name}</h2>
        <img
          className="walker__walker_img"
          alt="a walker"
          src={walker.imgURL}
        />
        <div className="walker__text_wrapper"></div>
        <p>Dogs Available To Walk:</p>
        {dogsUnpaired.map((d) => (
          <button onClick={() => handleClick(walkerId, d.id)} key={d.id}>
            {d.name}
          </button>
        ))}
      </div>
    </div>
  );
}

// i have walker with cities
// map walker.cities.id into new array [1,3]
// then fetch all dogs, then get dogs with cityId included in
// [1,3]
// then get all those without walkerId
// then set dog state to array of dogs
// then we can list the dogs under the walker.
// i want a list of dogs with CityId that is included in
