import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Header from './Header.js';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()})


let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe('testing component <Header />', () => {

it('<Header /> verify it renders without crashing', () => {
  expect(wrapper.exists()).toEqual(true);
});
it('<Header /> Verify that the components render img', () => {
  expect(wrapper.find("div.App-header h1")).toHaveLength(1);
  expect(wrapper.find("div.App-header img")).toHaveLength(1);
});

});

