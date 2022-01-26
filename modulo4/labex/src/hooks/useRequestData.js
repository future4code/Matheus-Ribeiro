import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const useRequestData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState)

  const token = localStorage.getItem("token")

  const headers = {
    headers: {
      auth: token
    }
  }

  const getData = () => {
    axios
      .get(`${BASE_URL}${endpoint}`, headers)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err.data)
      })
  }

  useEffect(() => {
    getData()
  }, [endpoint])

  return [data, getData, headers];
}