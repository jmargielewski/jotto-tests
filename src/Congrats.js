import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component
 */
const Congrats = ({ success }) =>
  success ? (
    <div data-test="component-congrats">
      <span data-test="congrats-message">Congratulations! You gussed the word!</span>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
