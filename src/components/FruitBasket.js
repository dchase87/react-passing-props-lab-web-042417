import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {
  FruitBasket.defaultProps = {
    fruit: props.fruit,
    filters: props.filters,
    currentFilter: props.currentFilter,
    updateFilterCallback: props.handleChange
  }
    return (
      <div className="fruit-basket">
        <Filter handleChange={props.updateFilterCallback} filters={props.filters}/>
        <FilteredFruitList
          fruit={props.fruit} currentFilter={props.currentFilter}/>
      </div>
    )
}

export default FruitBasket
