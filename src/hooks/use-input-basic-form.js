import { useState } from 'react';

const useInputBasicForm = validateFn => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueInputIsTouched, setValueInputIsTouched] = useState(false);

  const enteredValueIsValid = validateFn(enteredValue);
  const valueInputHasError = !enteredValueIsValid && valueInputIsTouched;

  const valueInputChangeHandler = e => {
    setEnteredValue(e.target.value);
  };
  const valueInputBlurHandler = () => {
    setValueInputIsTouched(true);
  };
  const reset = () => {
    setEnteredValue('');
    setValueInputIsTouched(false);
  };

  return {
    enteredValue: enteredValue,
    enteredValueIsValid: enteredValueIsValid,
    valueInputHasError: valueInputHasError,
    valueInputChangeHandler: valueInputChangeHandler,
    valueInputBlurHandler: valueInputBlurHandler,
    reset: reset,
  };
};

export default useInputBasicForm;
