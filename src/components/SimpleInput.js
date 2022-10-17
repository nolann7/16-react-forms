import useInput from '../hooks/use-input';

const SimpleInput = () => {
  const {
    enteredValue: enteredName,
    enteredValueIsValid: enteredNameIsValid,
    valueInputHasError: nameInputHasError,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset:resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    valueInputHasError: emailInputHasError,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset:resetEmailInput,
  } = useInput(value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));



  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = e => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) return;
    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputHasError
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
        {nameInputHasError && (
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
        {emailInputHasError && (
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
