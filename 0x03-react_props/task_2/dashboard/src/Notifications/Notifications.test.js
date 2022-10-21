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
    it('Verify that the components at the very least render', () => {
		expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBeTruthy();
    
    })
    it("Notifications renders Notification Item and correct html", () => {
      expect(wrapper.find("NotificationItem")).toBeDefined();
      expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">New course available</li>');
    });
    
});