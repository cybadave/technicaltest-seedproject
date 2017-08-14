import React from 'react';
export class Filter extends React.Component {
  constructor() {
    super();
    this.renderFilter = this.renderFilter.bind(this);
  }
  renderFilter(filter) {
    if (!filter.length){
      return (<input
        key={filter.value}
        type="checkbox"
        value={filter.value}
        checked={filter.selected}
        onclick={this.props.filterCallBack(filter.value, filter.selected)}
      >{filter.label}</input>);
    }else{
      const options =  filter.map(item => <option
        key={item.value}
        value={item.value}
        selected={item.selected}
        onclick={this.props.filterCallBack(filter.value, filter.selected)}
      >{item.label}</option>);
      return (<select key="speeds">{options}</select>);
    }
  }
  render() {
    const filterItems = this.props.filters.map(filter => this.renderFilter(filter));
    return (<div>{filterItems}</div>);
  }
}