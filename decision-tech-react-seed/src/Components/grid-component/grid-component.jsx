import React from 'react';
export class Grid extends React.Component {
  render() {
    const filteredRows = this.props.gridData.filter(rowData =>
      this.props.filters.reduce((acc, filter) => {
        return acc && filter(rowData);
      }, true)
    );
    const rows = filteredRows.map((rowData, rowIndex) => {
      const cells = this.props.definition.map((d, cellindex) => {
        return <div key={`gridRow${rowIndex}cell${cellindex}`} className="gridCell">{d.render(rowData)}</div>
      });
      return cells;
    });
    const header = this.props.definition.map((d) => <div key={d.title} className="gridHeading">d.title</div>)
    return (<div className="dataGrid">
      <div key="gridHeader" className="gridHeader">{header}</div>
      {rows}
    </div>);
  }
}