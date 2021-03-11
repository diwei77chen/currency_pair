import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { render, shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import NewQuoteButton from './NewQuoteButton';

Enzyme.configure({ adapter: new Adapter() });

describe('Quote Result New Quote Button Test Suite', () => {
  test('renders with the correct submit text', () => {
    const wrapper = render(<NewQuoteButton />);
    expect(wrapper.text()).toContain('START NEW QUOTE');
  });

  // TODO: Testing simulating click
  // test('simulates click', () => {
  //   const clickMe = jest.fn();
  //   const wrapper = shallow(<NewQuoteButton onNewQuotePress={clickMe} />);
  //   wrapper.find(Button).simulate('click');
  //   expect(clickMe).toBeCalled();
  // });
});
