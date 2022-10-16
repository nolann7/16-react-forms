import { useState, useRef } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const inputNameRef = useRef();

  const inputNameChangeHandler = e => {
    // 1-st path
    setEnteredName(e.target.value);
  };
  const submitFormHandler = e => {
    e.preventDefault();

    console.log(enteredName);

    // 2-nd path
    console.log(inputNameRef.current.value);

    // delting input after submission
    // inputNameRef.current.value = '' // NOT IDIAL cause we shouldnt change DOM without react
    setEnteredName('');
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputNameRef}
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
