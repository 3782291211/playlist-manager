import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAction() {
    return (
      <button className="Track-action">{this.props.isRemoval ? '-' : '+'}</button>
    );
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>track name will go here</h3>
          <p>track artist will go here | track album will go here</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;