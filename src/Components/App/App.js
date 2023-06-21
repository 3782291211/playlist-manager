import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import Spotify from '../../util/Spotify';
import Confirmation from '../Confirmation/Confirmation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [],
      playlistName: "random songs",
      playlistTracks: [],
      searchTerm: '',
      pagination: { total: '', previous: '', next: ''}
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  componentDidMount() {
    this.setState({ token: Spotify.getAccessToken() });
  }

  addTrack(track) {
    const savedTracks = this.state.playlistTracks;
    if (savedTracks.some(savedTrack => savedTrack.id === track.id)) return;
    this.setState({ 
      playlistTracks: [...savedTracks, track] 
    });
  }

  removeTrack(track) {
    this.setState({ 
      playlistTracks: this.state.playlistTracks.filter(song => song.id !== track.id)
    }); 
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  async savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(({ uri }) => uri);
    const responseStatus = await Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({ responseStatus });
    window.setTimeout(() => this.setState({ responseStatus: null }), 5000);
    this.setState({ playlistName: 'New playlist', playlistTracks: [] });
  }

  async search(searchTerm, offset = 0) {
    const response = await Spotify.search(searchTerm, this.state.token, offset);
    const searchResults = response?.tracks?.items.map(({album, name, id, artists, uri, preview_url: audioLink}) => {
      return {
        album: album.name,
        name,
        id,
        artist: artists[0].name,
        uri,
        audioLink
      }
    });
    this.setState({ 
      searchResults, 
      pagination: { 
          total: response?.tracks.total, 
          previous: response?.tracks.previous, 
          next: response?.tracks.next 
        }
      });
  }

  handleTermChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const { searchResults, playlistName, playlistTracks } = this.state;
    return (
      <div className="relative">
        <h1 className="relative">Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar searchTerm={this.state.searchTerm} handleTermChange={this.handleTermChange} onSearch={this.search} />
          <Confirmation responseStatus={this.state.responseStatus}/>
          <div className="App-playlist">
            <SearchResults searchResults={searchResults} onAdd={this.addTrack} searchTerm={this.state.searchTerm} onSearch={this.search} pagination={this.state.pagination} />
            <PlayList playlistName={playlistName} playlistTracks={playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;