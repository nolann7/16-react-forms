import { useState } from 'react';

const BasicForm = () => {
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [firstNameInputIsTouched, setFirstNameInputIsTouched] = useState(false);

  const enteredFirstNameIsValid = enteredFirstName.trim() !== '';
  const fistNameInputHasError = !enteredFirstNameIsValid && firstNameInputIsTouched;

  let formIsValid = false;
  if (enteredFirstNameIsValid) {
    formIsValid = true;
  }

  const firstNameInputChangeHandler = e => {
    setEnteredFirstName(e.target.value);
  };
  const firstNameInputBlurHandler = () => {
    setFirstNameInputIsTouched(true);
  }

  const formSubmitHandler = e => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log(enteredFirstName);

    setEnteredFirstName('')
    setFirstNameInputIsTouched(false)

  }

  const firstNameClassIsValid = fistNameInputHasError
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
          {fistNameInputHasError && <p className='error-text'>Please enter valid First Name</p>}
        </div>
        {/* <div className={lastNameClassIsValid}> */}
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
          {/* {lastNameInputHasError && <p className='error-text'>Please enter valid Last Name</p>} */}
        </div>
      </div>
      {/* <div className={emailClassIsValid}> */}
      <div>
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" id="email" />
        {/* {emailInputHasError && <p className='error-text'>Please enter valid Email</p>} */}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
