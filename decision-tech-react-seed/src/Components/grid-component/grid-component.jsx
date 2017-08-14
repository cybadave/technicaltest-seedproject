import React from 'react';
export class Grid extends React.Component {
  render() {
    const rows = this.props.gridData.map((rowData, rowIndex) => {
      const cells = this.props.definition.map((d, cellindex) => {
        return <div key={`gridRow${rowIndex}cell${cellindex}`} className="gridCell">{d.render(rowData)}</div>
      });
      return cells;
    });
    return <div className="dataGrid">{rows}</div>;
  }
}