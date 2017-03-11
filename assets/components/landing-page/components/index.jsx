import React from 'react';

const { func } = React.PropTypes;
const propTypes = {
  testApi: func.isRequired,
};

function LandingPage(props) {
  return (
    <button
      onClick={props.testApi}
    >
      Test
    </button>
  );
}

LandingPage.propTypes = propTypes;
export default LandingPage;
