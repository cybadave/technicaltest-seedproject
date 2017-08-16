import React from 'react';
import {SelectFilter} from "./select-filter-component";
export class Filter extends React.Component {
  constructor() {
    super();
    this.renderFilter = this.renderFilter.bind(this);
    this.mediaQuery = 'screen and (min-width: 960px)';
    this.updateMatches = this.updateMatches.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
  }
  componentWillMount() {
    if (typeof window !== 'object') return;
    this.mediaQueryList = window.matchMedia(this.mediaQuery);
    this.mediaQueryList.addListener(this.updateMatches);
    this.updateMatches();
  }
  updateMatches() {
    if (!this.mediaQueryList) {
      this.setState({ matches: false });
      return;
    }
    this.setState({ matches: this.mediaQueryList.matches });
  }
  handleSpeedChange(event) {
    this.props.filterCallBack(event.target.value, false);
  }
  renderFilter(filter, filterName) {
    const { filterCallBack } = this.props;
    return (<li key={filterName} >
      <input
        id={`filter${filterName}`}
        type="checkbox"
        key={filterName}
        checked={filter}
        onClick={() => filterCallBack(filterName, filter)}
      />
      <label htmlFor={`filter${filterName}`}>{filterName}</label>
    </li>);
  }
  render() {
    const {
      filters,
      display,
      speedFilters,
      speedFilterCallBack,
    } = this.props;
    const {
      matches
    } = this.state;

    const filterItems = Object.keys(filters).map(filterName => this.renderFilter(filters[filterName],filterName));
    return (display || matches) ? (<ul className="filter" >{filterItems}<SelectFilter filters={speedFilters} filterCallBack={speedFilterCallBack} /></ul>) : null;
  }
}