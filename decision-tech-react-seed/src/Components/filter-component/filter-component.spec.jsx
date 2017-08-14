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
  let filters = [
    { label: 'Mobile', value: 'Mobile', selected: true,  },
    { label: 'Broadband', value: 'Broadband', selected: false,  },
    [ { label: '5GB', value: '5 GB', selected: true, }, { label: '70 MB/s', value: '70', selected: false, } ],
  ];
  const callBack = () => filters[0].selected = false;
  const filter = shallow(<Filter filters={filters} filterCallBack={callBack} display={true} />);
  it('Renders given filters', () => {
    expect(filter.node.props.children[0].props.type).toBe('checkbox');
    expect(filter.node.props.children[0].props.checked).toBe(true);
    expect(filter.node.props.children[1].props.type).toBe('checkbox');
    expect(filter.node.props.children[1].props.checked).toBe(false);
    expect(filter.node.props.children[2].props.children.length).toBe(3);
    expect(filter.node.props.children[2].props.children[1].props.selected).toBe(true);
    expect(filter.node.props.children[2].props.children[2].props.selected).toBe(false);
  });

  it('Fires the appropriate callback on click', () => {
    filter.find('input').first().simulate('click');
    expect(filters[0].selected).toBe(false);
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