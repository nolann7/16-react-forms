import { useState } from 'react';

const useInput = validateFn => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  const enteredValueIsValid = validateFn(enteredValue);
  const valueInputIsInvalid = !enteredValueIsValid && enteredValueIsTouched;

  const valueInputChangeHandler = e => {
    setEnteredValue(e.target.value);
  };
  const valueInputBlurHandler = () => {
    setEnteredValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setEnteredValueIsTouched(false);
  };

  return {
    enteredValue:enteredValue,
    enteredValueIsValid:enteredValueIsValid,
    valueInputIsInvalid:valueInputIsInvalid,
    valueInputChangeHandler:valueInputChangeHandler,
    valueInputBlurHandler:valueInputBlurHandler,
    reset,
  };
};

export default useInput;
