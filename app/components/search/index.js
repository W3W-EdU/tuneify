import React from 'react'
import _ from 'lodash'

class Search extends React.Component {
  constructor() {
   super();
   this.handleSearch = _.throttle(this.handleSearch, 1000);
  }

  render() {
    return (
      <div className="search">
        <input
          className="search__input"  
          type="text"
          autoFocus
          ref={(input) => this.input = input} 
          placeholder="Artist, Album or Track"
          onChange={() => this.handleSearch()} 
        />
      </div>
    )
  }

  handleSearch(e) {
    const text = this.input.value;
    this.props.onSearch(text)
  }
}

export default Search
