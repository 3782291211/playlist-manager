import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    //this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(e) {
    e.preventDefault();
    if (!this.props.searchTerm.trim()) {
      
    } else {
      this.props.onSearch(this.props.searchTerm);
    }
  }

  // handleTermChange(e) {
  //   this.setState({ searchTerm: e.target.value });
  // }

  render() {
    return (
      <form onSubmit={this.search} className="SearchBar">
        <input id="SearchBox" onChange={this.props.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <input type="submit" value="SEARCH" className="SearchButton" />
      </form>
    );
  }
}

export default SearchBar;