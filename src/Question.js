import React from 'react';

class Question extends React.Component {
	render() {
  	return <div class="question">
      <strong>{this.props.text}</strong>
    </div>
  };
};

export default Question;
