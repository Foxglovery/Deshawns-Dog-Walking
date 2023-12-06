export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getAllDogs = async () => {
  const res = await fetch("/api/dogs");
  return res.json();
};

export const getDogById = async (id) => {
  const res = await fetch(`/api/dogs/${id}`);
  return res.json();
};

export const getAllWalkers = async () => {
  const res = await fetch("/api/walkers");
  return res.json();
}

export const walkerByDog = async (walkerId) => {
  const res = await fetch(`/api/walkers/byDog/${walkerId}`);
  return res.json();
}

export const getAllCities = async () => {
  const res = await fetch("/api/cities");
  return res.json();
}

export const getCityWalkers = async (cityId) => {
  const res = await fetch(`/api/walkerCities/${cityId}`);
  return res.json();
}

export const getWalkerById = async (walkerId) => {
  const res = await fetch(`/api/walkers/${walkerId}`);
  return res.json();
}

export const AddCity = async (newCityName) => {
  const res = await fetch(`/api/cities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    //THE BODY, FOR THE LOVE OF GOD, HERE IS WHERE THE BODY IS DEFINED
    body: JSON.stringify({name: newCityName }),
  });
  return res.json();
}

export const AddADog = async (newDog) => {
  const res = await fetch(`/api/dogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newDog),
  });
  return res.json();
}