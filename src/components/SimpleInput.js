import { useState } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;


  const inputNameChangeHandler = e => {
    setEnteredName(e.target.value);
  };

  const inputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const submitFormHandler = e => {
    e.preventDefault();

    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) return;
    console.log(enteredName);

    setEnteredName('');
    setEnteredNameIsTouched(false);
  };

  const inputNameClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          onBlur={inputBlurHandler}
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
