import React from 'react';
import ReactDOM from 'react-dom';


function Index({ name }) {
  return <div>Hello {name}</div>;
}

/* validate props value */
Index.propTypes = {
  name: React.propTypes.string.isRequired,
};

ReactDOM.render(<Index name="jeff" />, document.getElementById('root'));
