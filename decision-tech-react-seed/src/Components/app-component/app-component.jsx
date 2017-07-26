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
      'deals': []
    };

    service.fetchDeals().then(deals => {
      this.setState({ 'deals': deals })
    })
  }
  render() {
    return (<div>
      <SiteNav />
      {JSON.stringify(this.state.deals)}
    </div>);
  }
}