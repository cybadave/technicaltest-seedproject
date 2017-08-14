import React from 'react';
import { BurgerMenu } from './burgermenu-component';
import { shallow } from 'enzyme';

let originalMatchMedia = window.matchMedia;

const createMockMediaMatcher = (matches) => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {}
});

test('Burger menu renders when on mobile', () => {
  window.matchMedia = createMockMediaMatcher(true);
  const burgerMenu = shallow(<BurgerMenu />);
  expect(burgerMenu.node).not.toBe(null);
});

test('Burger menu does not render when on desktop', () => {
  window.matchMedia = createMockMediaMatcher(false);
  const burgerMenu = shallow(<BurgerMenu />);
  expect(burgerMenu.node).toBe(null);
});

test('Burger menu fires a toggle function on click', () => {
  window.matchMedia = createMockMediaMatcher(true);
  let visible = false;
  const toggleFunction = () => {
    visible = !visible;
  };
  const burgerMenu = shallow(<BurgerMenu toggleFunction={toggleFunction} />);
  burgerMenu.find('span').simulate('click');
  expect(visible).toBe(true);
});

window.matchMedia = originalMatchMedia;