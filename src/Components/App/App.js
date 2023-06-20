import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [
        { name: "go", artist: "john", album: "fire", id: 1},
        { name: "sunset", artist: "pam", album: "rain", id: 2},
        { name: "many", artist: "jessy", album: "dance", id: 3},
        { name: "lift", artist: "neo", album: "anyone", id: 4},
        { name: "probable", artist: "julian", album: "tomorrow", id: 5},
        { name: "flow", artist: "hollow", album: "trap", id: 6},
        { name: "marvel", artist: "bobby", album: "axe", id: 7},
        { name: "neon", artist: "froll", album: "mime", id: 8},
        { name: "wrong", artist: "packer", album: "bull", id: 9},
        { name: "revel", artist: "lights", album: "jelly", id: 10},
        { name: "dream", artist: "gray", album: "rum", id: 11}
      ],
      playlistName: "random songs",
      playlistTracks: [
        { name: "marvel", artist: "bobby", album: "fahrbot", id: 1},
        { name: "neon", artist: "froll", album: "broomstick", id: 2},
        { name: "wrong", artist: "packer", album: "fruitly", id: 3},
        { name: "revel", artist: "lights", album: "so-says", id: 4},
        { name: "dream", artist: "astrobear", album: "sea", id: 5}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
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

  render() {
    const { searchResults, playlistName, playlistTracks } = this.state;
    return (
      <div className="relative">
        <h1 className="relative">Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={searchResults} onAdd={this.addTrack} />
            <PlayList playlistName={playlistName} playlistTracks={playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;