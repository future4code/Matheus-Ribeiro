import  { useState } from 'react';

const useLoginForm = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const validate = (value) => {
    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else {
      setError(null)
      return true
    }
  }

  const onChange = ({ target }) => {
    if (error) validate(target.value)
    setValue(target.value)
  }

  const clearForm = () => {
    setValue('')
  }

  return {
    value,
    setValue,
    error,
    onChange,
    clearForm,
    onBlur: () => validate(value),
    validate: () => validate(value)
  }
};

export default useLoginForm;
