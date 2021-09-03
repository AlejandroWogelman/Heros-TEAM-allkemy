import axios from "axios";
import { useEffect, useState } from "react";

import { URLbase } from "../../Constants/constants";

//Fetch individual por medio del SEARCH
export const useFetchIndIvidual = (name) => {
  const [SEARCH, setSearch] = useState([]);

  const searchAPI = async (name) => {
    const request = await axios.get(`${URLbase}search/${name}`);
    setSearch(request.data.results);
  };

  useEffect(() => {
    name.length > 2 && searchAPI(name);
  }, [name]);

  return { SEARCH, setSearch };
};
