import React from "react";
import { InputSelect, OptionForm } from "./StyledSelect";

const Select = ({ name, onChange, required, options, text, disabled }) => {
  return (
    <InputSelect
      name={name}
      defaultValue=""
      onChange={onChange}
      required={required}
    >
      <OptionForm value="" disabled={disabled}>
        {text}
      </OptionForm>
      {options?.map((option) => {
        return (
          <OptionForm key={option.id || option} value={option.id || option}>
            {option.name || option}
          </OptionForm>
        );
      })}
    </InputSelect>
  );
};

export default Select;
