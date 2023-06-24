import React from "react";
import PropTypes from 'prop-types';
import './PlayList.css';
import TrackList from "../TrackList/TrackList";

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render () {
    const playlistIsEmpty = this.props.playlistTracks.length === 0;
    return (
      <div style={playlistIsEmpty ? {height: '7.6rem'} : {}} className="Playlist">
        <input onChange={this.handleNameChange} placeholder="Enter playlist name"/>
        {playlistIsEmpty && <p className="empty-playlist">Added songs will appear here.</p>}
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        {!playlistIsEmpty && <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>}
      </div>
    );
  }
}

PlayList.propTypes = {
  playlistName: PropTypes.string.isRequired,
  playlistTracks: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired
}

export default PlayList;