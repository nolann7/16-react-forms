import { useState, useRef } from 'react';

const SimpleInput = props => {
  const inputNameRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const inputNameChangeHandler = e => {
    // 1-st path
    setEnteredName(e.target.value);
  };
  const submitFormHandler = e => {
    e.preventDefault();

    setEnteredNameIsTouched(true);

    // validating name input for blank input
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    // 2-nd path
    console.log(inputNameRef.current.value);

    // delting input after submission
    // inputNameRef.current.value = '' // NOT IDIAL cause we shouldnt change DOM without react
    setEnteredName('');
  };
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const inputNameClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputNameRef}
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
