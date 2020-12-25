/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component
 */
export default ({ success }) =>
  success ? (
    <div data-test="component-congrats">
      <span data-test="congrats-message">Congratulations! You gussed the word!</span>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );
