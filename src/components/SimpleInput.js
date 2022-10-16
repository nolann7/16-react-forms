import { useState, useRef } from 'react';

const SimpleInput = props => {
  const inputNameRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)

  const inputNameChangeHandler = e => {
    // 1-st path
    setEnteredName(e.target.value);
  };
  const submitFormHandler = e => {
    e.preventDefault();

    // validating name input for blank input
    if (enteredName.trim() === ''){
      setEnteredNameIsValid(false)
      return;
    }

    setEnteredNameIsValid(true)

    console.log(enteredName);

    // 2-nd path
    console.log(inputNameRef.current.value);

    // delting input after submission
    // inputNameRef.current.value = '' // NOT IDIAL cause we shouldnt change DOM without react
    setEnteredName('');
  };

const inputNameClasses = enteredNameIsValid ? 'form-control': 'form-control invalid'

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
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
