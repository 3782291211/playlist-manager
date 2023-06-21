import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.id === 'next') {
      if (!this.props.pagination.next) return;
      this.setState({ offset: this.state.offset + 20 });
    } else {
      if (!this.props.pagination.previous || this.state.offset < 20) return;
      this.setState({ offset: this.state.offset - 20 });
    }

    this.props.onSearch(this.props.searchTerm, this.state.offset);
  }

  render() {
    return (
      <div className="SearchResults">
        <div className="Pagination">
        <h2>Results</h2>
        <div>
        <button onClick={this.handleClick} id="previous" >Previous</button>
        <button onClick={this.handleClick} id="next" >Next</button>
        </div>
        </div>
        <TrackList isRemoval={false} onAdd={this.props.onAdd} tracks={this.props.searchResults} />
      </div>
    );
  }
}

export default SearchResults;