import React from 'react';

const Input = ({ inputName, onNameChange, onNameSubmit }) => {
  return (
    <form onSubmit={onNameSubmit}>
      <div>
        <div className="nameInputs">
          <input
            type="text"
            placeholder="Name"
            name="inputName"
            value={inputName}
            onChange={onNameChange}
            className="nameInput"
          />
          <button
            type="submit"
            className="btn"
            disabled={inputName === '' ? true : false}
          >
            <span>Submit</span>
          </button>
        </div>
        <p>What's your name?</p>
      </div>
    </form>
  );
};

export default Input;
