import React from "react";
import PropTypes from 'prop-types';
import './TrackList.css';
import Track from "../Track/Track";

class TrackList extends React.Component {
  render() { 
    return (
      <div className="TrackList">
        {this.props.tracks?.map(track => {
          return <Track key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
        })}
      </div>
    );
  }
}

TrackList.propTypes = {
  isRemoval: PropTypes.bool.isRequired,
  tracks: PropTypes.array.isRequired,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func
}

export default TrackList;