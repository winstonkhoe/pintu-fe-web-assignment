const fetchToJson = async (apiUrl: string) => {
  const data = await fetch(apiUrl);
  return await data.json();
};

export { fetchToJson };
