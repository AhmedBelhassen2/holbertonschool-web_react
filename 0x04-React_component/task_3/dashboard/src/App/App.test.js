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
it ('should render a div with a className "Notifications"', () =>{
  expect(wrapper.find("Notifications")).toHaveLength(1);
})
it ('should render a div with a className "App-header"', () => {
  expect(wrapper.find("Header")).toHaveLength(1);
})
it ('should render a div with a className "App-body"', () => {
  expect(wrapper.find("Login")).toHaveLength(1);
})
it ('should render a div with a className "App-footer"', () => {
  expect(wrapper.find("Footer")).toHaveLength(1);
})
it('isLoggedIn true', () => {
  const wrapper = shallow(<App isLoggedIn />);
  expect(wrapper.find('Login')).toHaveLength(0);
  expect(wrapper.find('CourseList')).toHaveLength(1);
});


});
