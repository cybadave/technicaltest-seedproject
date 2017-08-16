import React from 'react';
import './app-component.scss';
import { SiteNav } from '../sitenav/sitenav-component';
import { Filter } from '../filter-component/filter-component';
import { Grid } from '../grid-component/grid-component';
import { gridDefinition, speedFilters, gridFilters } from '../grid-component/gridUtils';

var service = function () {
  return {
    fetchDeals: () => {
      return fetch('/assets/deals.json')
        .then(res => res.json())
        .then(rest => rest.deals)
    }
  }
}();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'deals': [],
      'filterVisible': false,
      'filters': [],
      'speedFilter': '',
    };
    service.fetchDeals().then(deals => {
      this.setState({ 'deals': deals });
      this.forceUpdate();
    });
    this.toggleFilterVisible = this.toggleFilterVisible.bind(this);
    this.updateFilters = this.updateFilters.bind(this);
    this.updateSelectFilters = this.updateSelectFilters.bind(this);
  }
  toggleFilterVisible() {
    this.setState({ 'filterVisible': !this.state.filterVisible });
  }
  updateFilters(filter, flag) {
    gridFilters[filter] = !flag;
    const filters = Object.keys(gridFilters)
      .filter(filter => gridFilters[filter]);
    this.setState({ 'filters': filters });
  }
  updateSelectFilters(filter) {
    this.setState({ 'speedFilter': filter });
  }
  render() {
    const {
      deals,
      filters,
      filterVisible,
      speedFilter,
    } = this.state;
    const {
      updateFilters,
      updateSelectFilters,
    } = this;
    return (<div>
      <SiteNav toggleFunction={this.toggleFilterVisible} />
      <Filter speedFilters={speedFilters} speedFilterCallBack={updateSelectFilters} filters={gridFilters} filterCallBack={updateFilters} display={filterVisible} />
      <Grid speed={speedFilter} filters={filters} gridData={deals} definition={gridDefinition} />
    </div>);
  }
}