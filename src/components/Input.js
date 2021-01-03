import { useSelector } from 'react-redux';

const Input = () => {
  const success = useSelector((state) => state.success);

  const content = !success && (
    <form className="form-inline">
      <input
        type="text"
        data-test="input-box"
        className="mb-2 mx-sm-3"
        placeholder="enter guess"
      />
      <button data-test="submit-button" type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );

  return <div data-test="component-input">{content}</div>;
};

export default Input;
