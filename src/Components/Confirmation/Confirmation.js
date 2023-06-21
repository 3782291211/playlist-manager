import React from 'react';
import './Confirmation.css';

class Confirmation extends React.Component {
  render() {
    if (this.props.responseStatus?.ok) {
        return <p id="Confirmation">Your playlist has been successfully added to your Spotify account!</p>;
    }
    
  }
}

export default Confirmation;