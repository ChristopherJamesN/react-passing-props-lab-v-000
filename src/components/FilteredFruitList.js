import React, { Component } from 'react';

const FilteredFruitList = props =>

      //const list = (!this.props.filter || this.props.filter === 'all' ? this.props.fruit : this.props.fruit.filter(i => i.fruit_type === this.props.filter));

      <ul className="fruit-list">
        {(!props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter)).map((item, index) => {return <li key={index}>{item.char}</li>;})}
      </ul>;

      FilteredFruitList.defaultProps = {
        filter: "sdfads",
        fruit: "Vijai Anand",
      }

export default FilteredFruitList;
