import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clearForm = () => {
    setForm(initialState);
  };

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      auth: token,
    },
  };

  return { form, onChange, clearForm, headers };
};
