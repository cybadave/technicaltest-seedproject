import React from 'react';
import { Filter } from './filter-component';
import { shallow } from 'enzyme';

const createMockMediaMatcher = (matches) => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {}
});

let originalMatchMedia = window.matchMedia;

describe('The Filter Component',() => {

  window.matchMedia = createMockMediaMatcher(false);
  let filters = {
    'Mobile': true,
    'Broadband': false,
  };
  const callBack = () => filters.Mobile = false;
  const filter = shallow(<Filter filters={filters} filterCallBack={callBack} display={true} />);
  it('Renders given filters', () => {
    expect(filter.node.props.children[0][0].props.children[0].props.type).toBe('checkbox');
    expect(filter.node.props.children[0][0].props.children[0].props.checked).toBe(true);
    expect(filter.node.props.children[0][1].props.children[0].props.type).toBe('checkbox');
    expect(filter.node.props.children[0][1].props.children[0].props.checked).toBe(false);
  });

  it('Fires the appropriate callback on click', () => {
    filter.find('input').first().simulate('click');
    expect(filters.Mobile).toBe(false);
  });

  it('Renders when either the display flag is true or in desktop mode', () => {
    expect(filter.node).not.toBe(null);
    window.matchMedia = createMockMediaMatcher(false);
    const filterDisplayFalse = shallow(<Filter filters={filters} filterCallBack={callBack} display={false} />);
    expect(filterDisplayFalse.node).toBe(null);
    window.matchMedia = createMockMediaMatcher(true);
    const filterDisplayFalseDesktop = shallow(<Filter filters={filters} filterCallBack={callBack} display={false} />);
    expect(filterDisplayFalseDesktop.node).not.toBe(null);
  });
});

window.matchMedia = originalMatchMedia;