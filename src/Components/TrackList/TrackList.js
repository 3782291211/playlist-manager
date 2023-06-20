import React from "react";
import './TrackList.css';
import Track from "../Track/Track";

class TrackList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.tracks, '<< inside TrackList');
    return (
      <div className="TrackList">
        
      {/* You will add a map method that renders a set of Track components */}
      </div>
    );
  }
}

export default TrackList;