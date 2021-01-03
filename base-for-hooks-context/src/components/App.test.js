import { shallow } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../../test/testUtils';

const setup = () => {
  return shallow(<App />);
};

test('renders without crashing', () => {
  const wrapper = setup();

  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
