import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>

  <div className="fruit-basket">
    <Filter handleChange={props.handleFilterChange} filter={props.filters} />
    <FilteredFruitList
    fruit={props.fruitBasket} filter={props.selectedFilter}/>
  </div>;

  FruitBasket.defaultProps = {
    handleFilterChange: "Vijai Anand",
    selectedFilter: "Ramalingam",
    fruitBasket: "eruh",
    filters: "something",
    updateFilterCallback: "something",
    fruit: "something",
    currentFilter: "something"
    }

export default FruitBasket;
