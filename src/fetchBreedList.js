const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

  if (!animal) return [];

  if (!res.ok) {
    throw new Error(`breeds/${animal} fetch not found`);
  }

  return res.json();
};

export default fetchBreedList;
