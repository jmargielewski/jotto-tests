import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import Input from './Input';

const setup = (props = { secretWord: 'party' }) => {
  const wrapper = shallow(<Input {...props} />);

  return wrapper;
};

// describe('render', () => {
//   describe('word has not been guessed', () => {
//     let wrapper;
//     beforeEach(() => {
//       const props = { success: false };
//       wrapper = setup();
//     });

//     test('renders component without error', () => {
//       const component = findByTestAttr(wrapper, 'component-input');
//       expect(component.length).toBe(1);
//     });

//     test('does not throw warning with expected props', () => {
//       checkProps(Input, { secretWord: 'party' });
//     });

// test('renders input box', () => {
//   const inputBox = findByTestAttr(wrapper, 'input-box');
//   expect(inputBox.length).toBe(1);
// });

// test('renders submit button', () => {
//   const submitButton = findByTestAttr(wrapper, 'submit-button');
//   expect(submitButton.length).toBe(1);
// });
// });

//   describe('word has been guessed', () => {
//     let wrapper;
//     beforeEach(() => {
//       wrapper = setup();
//     });

//     test('renders component without error', () => {
//       const component = findByTestAttr(wrapper, 'component-input');
//       expect(component.length).toBe(1);
//     });

//     test('does not renders input box', () => {
//       const inputBox = findByTestAttr(wrapper, 'input-box');
//       expect(inputBox.length).toBe(0);
//     });

//     test('does not renders submit button', () => {
//       const submitButton = findByTestAttr(wrapper, 'submit-button');
//       expect(submitButton.length).toBe(0);
//     });
//   });
// });

describe('state controlled input field', () => {
  let wrapper;
  let mockSetCurrentGuess = jest.fn();
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };

    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('filed is cleared upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');

    submitButton.simulate('click', { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
