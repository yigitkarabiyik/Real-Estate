import React, { useEffect, useState } from 'react'
import useGetRequest from './useGetRequest';

function useHouses() {
  const [houses, setHouses] = useState([]);
  const {get, loadingState} = useGetRequest("/api/houses");
  useEffect(() => {
    const fetchHouses = async () => {
      const houses = await get();
      setHouses(houses);
    };
    fetchHouses();
  },[get])

  return { houses, setHouses, loadingState };
};

export default useHouses;
