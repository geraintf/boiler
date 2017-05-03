import React, { Component } from 'react';
import App from '../components/App/App';
import { connect } from 'react-redux'

class Index extends Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

export default connect()(Index);