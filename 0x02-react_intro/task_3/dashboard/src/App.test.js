import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';

Enzyme.configure({adapter: new Adapter()})


let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('testing component <App />', () => {
  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders three list items', () => {
    expect(wrapper.find('div.App')).toHaveLength(1);
  })

it ('should render a div with a className "App-header"', () => {
  expect(wrapper.find('div.App-header')).toHaveLength(1);
})
it ('should render a div with a className "App-body"', () => {
  expect(wrapper.find('div.App-body')).toHaveLength(1);
})
it ('should render a div with a className "App-footer"', () => {
  expect(wrapper.find('div.App-footer')).toHaveLength(1);
})
});