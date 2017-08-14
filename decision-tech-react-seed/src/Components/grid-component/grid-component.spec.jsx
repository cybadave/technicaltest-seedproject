import React from 'react';
import { Grid } from './grid-component';
import { shallow } from 'enzyme';

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

describe('The Grid Component', () => {
  it('Renders fields using a render function for each field', () => {
    const grid = shallow(<Grid gridData={testData} definition={gridDefinition} />);
    expect(grid.node.props.children[1].length).toBe(2);
    expect(grid.node.props.children[1][0].length).toBe(2);
  });
});