import React from 'react';
import PropTypes from 'prop-types';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let newOffset;

    if (e.target.id === 'next') {
      if (!this.props.pagination.next) return;
      newOffset = this.state.offset + 20;
      //this.setState({ offset: this.state.offset + 20 });
    } else {
      if (!this.props.pagination.previous || this.state.offset < 20) return;
      newOffset = this.state.offset - 20;
      //this.setState({ offset: this.state.offset - 20 });
    }
    
    this.props.onSearch(this.props.searchTerm, newOffset);
    this.setState({ offset: newOffset });
  }

  render() {
    const resultsAreEmpty = this.props.searchResults.length === 0;

    return (
      <div style={resultsAreEmpty ? {height: '7.6rem'} : {}} className="SearchResults">
        <div className="Pagination">
        <h2>Results</h2>
        <div>
        {!resultsAreEmpty && <><button onClick={this.handleClick} id="previous" >Previous</button>
        <button onClick={this.handleClick} id="next" >Next</button></>}
        </div>
        </div>
        {resultsAreEmpty && <p className="empty">{this.props.noSearchResults ? 'No results to show.' : 'To view a list of songs, start a new search.'}</p>}
        <TrackList isRemoval={false} onAdd={this.props.onAdd} tracks={this.props.searchResults}/>
      </div>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  pagination: PropTypes.object.isRequired,
  noSearchResults: PropTypes.bool.isRequired
}

export default SearchResults;