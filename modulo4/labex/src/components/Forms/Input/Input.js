import React from "react";
import { InputText } from "./StyledInput";

const Input = ({
  placeholder,
  name,
  value,
  onChange,
  required,
  title,
  pattern,
  min,
  type,
}) => {
  return (
    <InputText
      placeholder={placeholder}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      required={required}
      title={title}
      pattern={pattern}
      min={min}
    />
  );
};

export default Input;
