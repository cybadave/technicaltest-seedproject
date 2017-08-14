import React from 'react';
export class Filter extends React.Component {
  constructor() {
    super();
    this.renderFilter = this.renderFilter.bind(this);
    this.mediaQuery = 'screen and (min-width: 960px)';
    this.updateMatches = this.updateMatches.bind(this);
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
      const defaultOption = <option key="defaultOpt" value="">Any</option>;
      options.unshift(defaultOption);
      return (<select key="speeds">{options}</select>);
    }
  }
  render() {
    const filterItems = this.props.filters.map(filter => this.renderFilter(filter));
    return (this.props.display || this.state.matches) ? (<div className="filter" >{filterItems}</div>) : null;
  }
}