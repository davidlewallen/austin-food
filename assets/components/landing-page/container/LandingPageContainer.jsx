import React from 'react';
import axios from 'axios';

import LandingPage from '../components/index';

class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.pingServer = this.pingServer.bind(this);
  }

  pingServer() {
    axios.get('/test')
    .then(res => console.log('reasddsdfsfsdfs', res.data));
    return this;
  }

  render() {
    return (
      <LandingPage
        testApi={this.pingServer}
      />
    );
  }
}

export default LandingPageContainer;
