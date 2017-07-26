import React from 'react';
import PropTypes from 'prop-types';

class Dynamic extends React.Component {

  componentDidMount() {
    const anId = this.props.match.params.anId;
    console.log('anId: ' + anId);
  }

  render() {
    return (
      <section>
        <h2>Dynamic page</h2>
        <p>{anId}</p>
      </section>
    )
  }
}

export default Dynamic;