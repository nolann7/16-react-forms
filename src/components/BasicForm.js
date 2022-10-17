import useInputBasicForm from '../hooks/use-input-basic-form';

const BasicForm = () => {
  const {
    enteredValue: enteredFirstName,
    enteredValueIsValid: enteredFirstNameIsValid,
    valueInputHasError: firstNameInputHasError,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHandler,
    reset: firstNameInputReset,
  } = useInputBasicForm(value => value.trim() !== '');
  const {
    enteredValue: enteredLastName,
    enteredValueIsValid: enteredLastNameIsValid,
    valueInputHasError: lastNameInputHasError,
    valueInputChangeHandler: lastNameInputChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameInputReset,
  } = useInputBasicForm(value => value.trim() !== '');
  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    valueInputHasError: emailInputHasError,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  // eslint-disable-next-line no-useless-escape
  } = useInputBasicForm(value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = e => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    firstNameInputReset();
    lastNameInputReset();
    emailInputReset();
  };

  const firstNameClassIsValid = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameClassIsValid = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailClassIsValid = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClassIsValid}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
            <p className="error-text">Please enter valid First Name</p>
          )}
        </div>
        <div className={lastNameClassIsValid}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">Please enter valid Last Name</p>
          )}
        </div>
      </div>
      <div className={emailClassIsValid}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
