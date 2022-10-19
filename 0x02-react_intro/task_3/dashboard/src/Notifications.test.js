import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notifications from "./Notifications";

Enzyme.configure({adapter: new Adapter()})


let wrapper;

beforeEach(() => {
  wrapper = shallow(<Notifications />);
});
describe("Testing the <Notifications /> Component", () => {
    it('render without crashing', () => {
      expect(wrapper.exists()).toEqual(true);
    });
  
    it('renders three list items', () => {
      expect(wrapper.find('li')).toHaveLength(3);
    })
  
    it('renders the <p>', () => {
      expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBeTruthy();
      });
});