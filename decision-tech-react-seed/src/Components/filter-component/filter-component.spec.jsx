import React from 'react';
import { Filter } from './filter-component';
import { shallow } from 'enzyme';

describe('The Filter Component',() => {
  let filters = [
    { label: 'Mobile', value: 'Mobile', selected: true,  },
    { label: 'Broadband', value: 'Broadband', selected: false,  },
    [ { label: '5GB', value: '5 GB', selected: true, }, { label: '70 MB/s', value: '70', selected: false, } ],
  ];
  const callBack = () => filters[0].selected = false;
  const filter = shallow(<Filter filters={filters} filterCallBack={callBack} />);
  it('Filter renders given filters', () => {
    expect(filter.node.props.children[0].props.type).toBe('checkbox');
    expect(filter.node.props.children[0].props.checked).toBe(true);
    expect(filter.node.props.children[1].props.type).toBe('checkbox');
    expect(filter.node.props.children[1].props.checked).toBe(false);
    expect(filter.node.props.children[2].props.children.length).toBe(2);
    expect(filter.node.props.children[2].props.children[0].props.selected).toBe(true);
    expect(filter.node.props.children[2].props.children[1].props.selected).toBe(false);
  });

  it('Filters fire the appropriate callback on click', () => {
    filter.find('input').first().simulate('click');
    expect(filters[0].selected).toBe(false);
  });
});