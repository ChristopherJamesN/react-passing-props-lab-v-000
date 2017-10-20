import React, { Component }  from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
    .then(response => response.json())
    .then(items => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }



  render() {
      <FruitBasket handleFilterChange={this.handleFilterChange} selectedFilter={this.state.currentFilter} fruitBasket={this.state.fruit} filters={this.state.filters}></FruitBasket>;
  }
}

export default App;
