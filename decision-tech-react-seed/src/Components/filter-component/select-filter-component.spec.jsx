import React from 'react';
import { SelectFilter } from './select-filter-component';
import { shallow } from 'enzyme';

describe('The SelectFilter Component',() => {
  let filters = {
    'Speed 17MB': false,
    'Speed 52MB': false,
    'Speed 76MB': false,
    'Mobile Data 4GB': false,
    'Mobile Data 5GB': false,
  };
  const callBack = () => filters['Speed 17MB'] = true;
  const filter = shallow(<SelectFilter filters={filters} filterCallBack={callBack} />);
  it('Renders given filters', () => {
    expect(filter.node.type).toBe('select');
    expect(filter.node.props.children[1].length).toBe(5);
  });

  it('Fires the appropriate callback on click', () => {
    filter.find('select').simulate('change', {target: { value : 'Speed 17MB'}});
    expect(filters['Speed 17MB']).toBe(true);
  });

});