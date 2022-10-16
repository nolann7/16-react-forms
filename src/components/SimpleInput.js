import { useState, useRef } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const inputNameRef = useRef();
  const [inputNameIsValid, setInputNameIsValid] = useState(true)

  const inputNameChangeHandler = e => {
    // 1-st path
    setEnteredName(e.target.value);
  };
  const submitFormHandler = e => {
    e.preventDefault();

    // validating name input for blank input
    if (enteredName.trim() === ''){
      setInputNameIsValid(false)
      return;
    }

    setInputNameIsValid(true)

    console.log(enteredName);

    // 2-nd path
    console.log(inputNameRef.current.value);

    // delting input after submission
    // inputNameRef.current.value = '' // NOT IDIAL cause we shouldnt change DOM without react
    setEnteredName('');
  };

const inputNameClasses = inputNameIsValid ? 'form-control': 'form-control invalid'

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
        {!inputNameIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
