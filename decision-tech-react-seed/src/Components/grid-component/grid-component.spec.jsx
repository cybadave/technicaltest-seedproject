import React from 'react';
import { Grid } from './grid-component';
import { gridDefinition, gridFilters } from './gridUtils';
import { shallow } from 'enzyme';
const liveData = require('../../assets/deals.json');

const testData = [
  { title: 'mr dobs', price: 1.11, currency: '£', },
  { title: 'mrs dobs', price: 2.22, currency: '$' }
];

const nameRenderer = (row) => row.title;
const priceRenderer = (row) => row.price + row.currency;

const testDefinition = [
  { title: 'name', render: nameRenderer },
  { title: 'cost', render: priceRenderer },
];

describe('The Grid Component', () => {
  describe('Filters fields using the filterer', () => {
    it('Shows 4 results when filtering by Broadband', () => {
      const filters = ['Broadband'];
      const grid = shallow(<Grid filters={filters} speed={''} gridData={liveData.deals} definition={gridDefinition} />);
      expect(grid.node.props.children[1].length).toBe(4);
    });
    it('Shows 2 results when filtering by Broadband and TV', () => {
      const filters = ['Broadband','TV'];
      const grid = shallow(<Grid filters={filters} speed={''} gridData={liveData.deals} definition={gridDefinition} />);
      expect(grid.node.props.children[1].length).toBe(2);
    });
    it('Shows 1 results when filtering by Broadband and Mobile', () => {
      const filters = ['Broadband','Mobile'];
      const grid = shallow(<Grid filters={filters} speed={''} gridData={liveData.deals} definition={gridDefinition} />);
      expect(grid.node.props.children[1].length).toBe(1);
    });
    it('Shows 0 results when filtering by Broadband and Mobile and TV and Mobile Data 5GB', () => {
      const filters = ['Broadband','Mobile','TV'];
      const grid = shallow(<Grid speed="Mobile Data 5GB" filters={filters} gridData={liveData.deals} definition={gridDefinition} />);
      expect(grid.node.props.children[1].length).toBe(0);
    });
    it('Shows 0 results when filtering by Broadband and Mobile and TV and Mobile Data 4GB', () => {
      const filters = ['Broadband','Mobile','TV'];
      const grid = shallow(<Grid speed="Mobile Data 4GB" filters={filters} gridData={liveData.deals} definition={gridDefinition} />);
      expect(grid.node.props.children[1].length).toBe(2);
    });
    it('Shows 2 results when filtering by Broadband and Speed 76MB', () => {
      const filters = ['Broadband'];
      const grid = shallow(<Grid speed="Speed 76MB" filters={filters} gridData={liveData.deals} definition={gridDefinition} />);
      expect(grid.node.props.children[1].length).toBe(2);
    });
  })
});