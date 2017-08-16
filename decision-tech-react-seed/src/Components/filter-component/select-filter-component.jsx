import React from 'react';
export class SelectFilter extends React.Component {
  constructor() {
    super();
    this.renderFilter = this.renderFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.filterCallBack(event.target.value);
  }
  renderFilter(filterName) {
      return(<option
        key={filterName}
        value={filterName}
        >{filterName}</option>);
  }
  render() {
    const {
      filters,
    } = this.props;
    const filterItems = Object.keys(filters).map(filterName => this.renderFilter(filterName));
    const selectedOption = Object.keys(filters).find(f => filters[f]);
    return (<select
      key="selectFilters"
      onChange={this.handleChange}
      value={selectedOption}
    ><option value="">Any</option>{filterItems}</select>);
  }
}