import React from 'react';

const aboutRenderer = (row) => row.title;
const contractRenderer = (row) => `${row.contractLength} months`;
const speedRenderer = (row) => `${row.speed.label} MB`;
const offerRenderer = (row) => <img className="cellImage" src={row.offer.smallLogo} />;
const tvRenderer = (row) =>
(row.productTypes.includes('TV') ? row.popularChannels.map((channel) =>
  <span key={channel.name}><img className="cellImage"  src={channel.logo} /><br/></span>) : 'N/A');
const mobileRenderer = (row) =>
(row.mobile !== null) ? Object.keys(row.mobile).map((mobileitem) =>
  <span key={mobileitem}>{`${mobileitem}: ${row.mobile[mobileitem].label}`}<br/></span>) : 'N/A';
const costRenderer = (row) => `£${row.prices[0].firstYear}`;

export const gridDefinition = [
  { title: 'About', render: aboutRenderer },
  { title: 'contract length', render: contractRenderer },
  { title: 'speed/usage', render: speedRenderer },
  { title: 'offer', render: offerRenderer },
  { title: 'TV', render: tvRenderer },
  { title: 'Moblie', render: mobileRenderer },
  { title: 'Cost', render: costRenderer },
];


export const gridFilters =
  {
    'Broadband': false,
    'Mobile': false,
    'TV': false,
};

export const speedFilters = {
  'Speed 17MB': false,
  'Speed 52MB': false,
  'Speed 76MB': false,
  'Mobile Data 4GB': false,
  'Mobile Data 5GB': false,
};

