import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const useRequestData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);

  const getData = () => {
    axios
      .get(`${BASE_URL}${endpoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    getData();
  }, [endpoint]);

  return [data, getData];
};