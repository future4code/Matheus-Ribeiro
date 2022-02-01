import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const useRequestData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      auth: token,
    },
  };

  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}${endpoint}`, headers)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setIsLoading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, [endpoint]);

  return [data, getData, headers, isLoading, error];
};
