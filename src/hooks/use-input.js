import { useReducer } from 'react';

const initialState = {
  value: '',
  isTouched: false,
};
const inputStateRefucer = (state, action) => {
  if (action.type === 'Add') {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === 'Blur') {
    return {
      value: state.value,
      isTouched: action.isTouched,
    };
  }
  if (action.type === 'Reset') {
    return {
      value: '',
      isTouched: false,
    };
  }
  return initialState;
};

const useInput = validateFn => {
  const [inputState, dispatch] = useReducer(inputStateRefucer, initialState);

  const enteredValueIsValid = validateFn(inputState.value);
  const valueInputHasError = !enteredValueIsValid && inputState.isTouched;

  const valueInputChangeHandler = e => {
    dispatch({
      type: 'Add',
      value: e.target.value,
    });
  };
  const valueInputBlurHandler = () => {
    dispatch({ type: 'Blur', isTouched: true });
  };

  const reset = () => {
    dispatch({ type: 'Reset' });
  };

  return {
    enteredValue: inputState.value,
    enteredValueIsValid: enteredValueIsValid,
    valueInputHasError: valueInputHasError,
    valueInputChangeHandler: valueInputChangeHandler,
    valueInputBlurHandler: valueInputBlurHandler,
    reset,
  };
};

export default useInput;
