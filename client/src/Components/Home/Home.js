import { getAllDogs, getGreeting } from "../../apiManager";
import { useEffect, useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState({
    message: "Not Connected to the API",
  });
  const [allDogs, setAllDogs] = useState([]);

  useEffect(() => {
    getGreeting()
      .then(setGreeting)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);

  useEffect(() => {
    getAllDogs()
      .then(setAllDogs)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);

  const handleClick = () => {
    navigate("/addDog")
  };

  return (
    <>
      <p>{greeting.message}</p>
      <div className="home__main">
        <section className="home__dog_gallery">
          <header className="home__header_container">
            <div className="spacer"></div>
            <h2>All Dogs</h2>
            <button  className="home__add_dog_btn" onClick={handleClick}>Add A Dog</button>
          </header>

          <div className="home__dog_container">
            {allDogs.map((item) => (
              <div className="home__dog_card">
                <button className="home__delete_btn">&#x2718;</button>
                <img className="home__dog-img" alt="a dog" src={item.imgURL} />
                <Link to={`/dogDetails/${item.id}`}>
                  <p>{item.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
