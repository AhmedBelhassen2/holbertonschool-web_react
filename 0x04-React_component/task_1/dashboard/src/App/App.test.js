import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';

Enzyme.configure({adapter: new Adapter()})


let wrapper;
let events = {};


beforeEach(() => {
  wrapper = shallow(<App />); 
  events = {}; // Empty our events before each test case
  // Define the addEventListener method with a Jest mock function
  document.addEventListener = jest.fn((event, callback) => {
    events[event] = callback;
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

describe('logOut alerts with correct string', () => {
	const myLogOut = jest.fn(() => undefined);
	const appComp = mount(<App logOut={myLogOut} />);
	const log = jest.spyOn(console, 'log');

	expect(appComp.props.logOut);
	expect(log);

	jest.restoreAllMocks();

});
});
});