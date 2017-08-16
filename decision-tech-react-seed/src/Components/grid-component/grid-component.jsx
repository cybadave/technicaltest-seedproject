import React from 'react';

export class Grid extends React.Component {
  render() {
    const {
      filters,
      speed,
      gridData,
    } = this.props;
    const speedFilters = {
      '': () => true,
      'Speed 17MB': (row) => row.speed.sortValue === 17408,
      'Speed 52MB': (row) => row.speed.sortValue === 53248,
      'Speed 76MB': (row) => row.speed.sortValue === 77824,
      'Mobile Data 4GB': (row) => (row.mobile !== null) ? row.mobile.data.sortValue === 4 : false,
      'Mobile Data 5GB': (row) => (row.mobile !== null) ? row.mobile.data.sortValue === 5 : false,
    };
    const negFilters = ['Broadband','Mobile','TV'].filter(f => !filters.includes(f));
    const arrayOrStringIncludes = (arr, needle) =>
      arr.reduce((acc, ar) => ar.includes(needle),false);
    const filteredRows = gridData.filter(rowData =>
      !negFilters.reduce((acc, nf) => arrayOrStringIncludes(rowData.productTypes,nf),false) &&
      filters.reduce((acc, f) => arrayOrStringIncludes(rowData.productTypes,f),false) &&
      speedFilters[speed](rowData)
    );
    const rows = filteredRows.map((rowData, rowIndex) => {
      const cells = this.props.definition.map((d, cellindex) => {
        return <div key={`cell(${rowIndex}:${cellindex}})`} className="gridCell">{d.render(rowData)}</div>
      });
      return <div key={`gridRow${rowIndex}`} className="gridRow">{cells}</div>;
    });
    const header = this.props.definition.map((d) => <div key={d.title} className="gridHeading">{d.title}</div>);
    return (<div className="dataGrid">
      <div key="gridHeader" className="gridHeader">{header}</div>
      {rows}
    </div>);
  }
}