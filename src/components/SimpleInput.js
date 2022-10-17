import { useState } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const enteredEmailIsValid = mailformat.test(enteredEmail);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = e => {
    setEnteredName(e.target.value);
  };
  const emailInputChangeHandler = e => {
    setEnteredEmail(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };
  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const submitFormHandler = e => {
    e.preventDefault();

    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) return;
    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName('');
    setEnteredNameIsTouched(false);
    setEnteredEmail('');
    setEnteredEmailIsTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must be valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
