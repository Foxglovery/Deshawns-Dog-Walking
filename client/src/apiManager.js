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