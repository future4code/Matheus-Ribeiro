import React from 'react';
import { InputText } from './StyledInput';

const Input = ({placeholder, name, value, type, onChange, onBlur, required}) => {
  return <InputText 
    placeholder={placeholder}
    name={name}
    value={value}
    type={type}
    onChange={onChange}
    onBlur={onBlur}
    required={required}
  />
};

export default Input;
