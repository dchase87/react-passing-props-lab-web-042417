import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
      displayFruit: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit: items }))

    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }))
  }

  handleChange = (e) => {
    this.setState({
      currentFilter: e.target.value
    })
  }

  // filterFruits () {
  //   this.setState({
  //     displayFruit: !this.state.currentFilter ? this.state.fruit : this.state.fruit.filter(i => i.fruit_type === this.state.currentFilter)
  //   })
  // }

  render () {
    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} updateFilterCallback={this.handleChange} />
    )
  }
}

export default App
