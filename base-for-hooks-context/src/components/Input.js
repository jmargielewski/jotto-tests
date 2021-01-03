import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ success }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  const content = (
    <form className="form-inline">
      <input
        type="text"
        data-test="input-box"
        className="mb-2 mx-sm-3"
        placeholder="enter guess"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value)}
      />
      <button
        data-test="submit-button"
        type="submit"
        className="btn btn-primary mb-2"
        onClick={(e) => {
          e.preventDefault();

          setCurrentGuess('');
        }}
      >
        Submit
      </button>
    </form>
  );

  return <div data-test="component-input">{content}</div>;
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
