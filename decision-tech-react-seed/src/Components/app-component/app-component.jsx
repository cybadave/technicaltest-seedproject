import React from 'react';
import './app-component.scss';
import { SiteNav } from '../sitenav/sitenav-component';

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
    };

    service.fetchDeals().then(deals => {
      this.setState({ 'deals': deals, 'filterVisible': this.state.filterVisible});
    });
    this.toggleFilterVisible = this.toggleFilterVisible.bind(this);
  }
  toggleFilterVisible() {
    console.log('filter toggle');
    this.setState({ 'deals': this.state.deals, 'filterVisible': !this.state.filterVisible});
  }
  render() {
    return (<div>
      <SiteNav toggleFunction={this.toggleFilterVisible} />
      {JSON.stringify(this.state.deals)}
    </div>);
  }
}