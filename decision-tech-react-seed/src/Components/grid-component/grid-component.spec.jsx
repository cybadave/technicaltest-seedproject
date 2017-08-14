import React from 'react';
import { Grid } from './grid-component';
import { shallow } from 'enzyme';
const liveData = require('../../assets/deals.json');

const testData = [
  { title: 'mr dobs', price: 1.11, currency: '£', },
  { title: 'mrs dobs', price: 2.22, currency: '$' }
];

const nameRenderer = (row) => row.title;
const priceRenderer = (row) => row.price + row.currency;

const gridDefinition = [
  { title: 'name', render: nameRenderer },
  { title: 'cost', render: priceRenderer },
];

const aboutRenderer = (row) => row.title;
const contractRenderer = (row) => `${row.contractLength} months`;
const speedRenderer = (row) => `${row.speed.label} MB`;
const offerRenderer = (row) => <image src={row.offer.smallLogo} />;
const tvRenderer = (row) =>
  (row.productTypes.includes('TV') ? row.popularChannels.map((channel) =>
    <image src={channel.logo} />) : 'N/A');
const mobileRenderer = (row) =>
  (row.mobile !== null) ? Object.keys(row.mobile).map((mobileitem) =>
    `${mobileitem}: ${row.mobile[mobileitem].label}`): 'N/A';
const costRenderer = (row) => `£${row.prices.firstYear}`;

const liveDefinition = [
  { title: 'About', render: aboutRenderer },
  { title: 'contract length', render: contractRenderer },
  { title: 'speed/usage', render: speedRenderer },
  { title: 'offer', render: offerRenderer },
  { title: 'TV', render: tvRenderer },
  { title: 'Moblie', render: mobileRenderer },
  { title: 'Cost', render: costRenderer },
];


const filterDefinition = {
  'Broadband': (row) => row.productTypes.includes('Broadband'),
  'Mobile': (row) => row.productTypes.includes('Phone'),
  'TV': (row) => row.productTypes.includes('TV'),
  'Speed 17MB': (row) => row.speed.sortValue === 17408,
  'Speed 52MB': (row) => row.speed.sortValue === 53248,
  'Speed 76MB': (row) => row.speed.sortValue === 77824,
  'Mobile Data 4GB': (row) => (row.mobile !== null) ? row.mobile.data.sortValue === 4 : false,
  'Mobile Data 5GB': (row) => (row.mobile !== null) ? row.mobile.data.sortValue === 5 : false,
};

describe('The Grid Component', () => {
  it('Renders fields using a render function for each field', () => {
    const grid = shallow(<Grid filters={[]} gridData={testData} definition={gridDefinition} />);
    expect(grid.node.props.children[1].length).toBe(2);
    expect(grid.node.props.children[1][0].length).toBe(2);
  });
  describe('Filters fields using the filterer', () => {
    it('Shows 4 results when filtering by Broadband', () => {
      const filters = [];
      filters.push(filterDefinition['Broadband']);
      const grid = shallow(<Grid filters={filters} gridData={liveData.deals} definition={liveDefinition} />);
      expect(grid.node.props.children[1].length).toBe(5);
    });
    it('Shows 2 results when filtering by Broadband and TV', () => {
      const filters = [];
      filters.push(filterDefinition['Broadband']);
      filters.push(filterDefinition['TV']);
      const grid = shallow(<Grid filters={filters} gridData={liveData.deals} definition={liveDefinition} />);
      expect(grid.node.props.children[1].length).toBe(2);
    });
    it('Shows 1 results when filtering by Broadband and Mobile', () => {
      const filters = [];
      filters.push(filterDefinition['Broadband']);
      filters.push(filterDefinition['Mobile']);
      const grid = shallow(<Grid filters={filters} gridData={liveData.deals} definition={liveDefinition} />);
      expect(grid.node.props.children[1].length).toBe(1);
    });
    it('Shows 0 results when filtering by Broadband and Mobile and TV and Mobile Data 5GB', () => {
      const filters = [];
      filters.push(filterDefinition['Broadband']);
      filters.push(filterDefinition['Mobile']);
      filters.push(filterDefinition['TV']);
      filters.push(filterDefinition['Mobile Data 5GB']);
      const grid = shallow(<Grid filters={filters} gridData={liveData.deals} definition={liveDefinition} />);
      expect(grid.node.props.children[1].length).toBe(0);
    });
    it('Shows 0 results when filtering by Broadband and Mobile and TV and Mobile Data 4GB', () => {
      const filters = [];
      filters.push(filterDefinition['Broadband']);
      filters.push(filterDefinition['Mobile']);
      filters.push(filterDefinition['TV']);
      filters.push(filterDefinition['Mobile Data 4GB']);
      const grid = shallow(<Grid filters={filters} gridData={liveData.deals} definition={liveDefinition} />);
      expect(grid.node.props.children[1].length).toBe(2);
    });
    it('Shows 2 results when filtering by Broadband and Speed 76MB', () => {
      const filters = [];
      filters.push(filterDefinition['Broadband']);
      filters.push(filterDefinition['Speed 76MB']);
      const grid = shallow(<Grid filters={filters} gridData={liveData.deals} definition={liveDefinition} />);
      expect(grid.node.props.children[1].length).toBe(2);
    });
  })
});