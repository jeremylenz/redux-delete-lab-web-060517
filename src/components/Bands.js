import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    console.log(this.props.store.getState())
    return(
      <ul>
        {this.props.store.getState().bands.map((band, idx) => {
          return (<Band band={band} key={idx} store={this.props.store} />)
        })}
      </ul>
    );
  }
};

export default Bands;
