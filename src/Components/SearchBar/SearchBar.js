import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(e) {
    e.preventDefault();
    if (this.props.searchTerm.trim()) {
      this.props.onSearch(this.props.searchTerm);
    }
  }

  render() {
    return (
      <form onSubmit={this.search} className="SearchBar">
        <input id="SearchBox" value={this.props.searchTerm} onChange={this.props.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <div className="SearchBarButtons">
        <input type="submit" value="SEARCH" className="SearchButton" />
        <input type="button" defaultValue="RESET" onClick={this.props.onReset} className="SearchButton" />
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleTermChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

export default SearchBar;