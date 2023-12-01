import { getDogById, walkerByDog } from "../apiManager";
import { useEffect, useState } from "react";
import "./DogDetails.css";
import { useParams } from "react-router-dom";

export default function DogDetails() {
  const [walker, setWalker] = useState({});
  const { currentDog } = useParams();
  const [dog, setDog] = useState({});

  useEffect(() => {
    getDogById(currentDog).then((data) => {
      setDog(data);
    });
  }, [currentDog]);

  useEffect(() => {
    if (dog.walkerId) {
      walkerByDog(dog.walkerId).then((data) => {
        setWalker(data);
      });
    }
  }, [dog]);
  
  return (
    <div className="dog_details">
      <div className="dog__dog_card">
        <h2>{dog.name}</h2>

        <img className="dog__dog-img" alt="a dog" src={dog.imgURL} />
        <div className="dog__text_wrapper"></div>
        <p>Walker: {walker.name}</p>
      </div>
    </div>
  );
}