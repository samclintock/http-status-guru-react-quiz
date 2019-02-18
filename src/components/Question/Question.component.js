import React from 'react';
import './Question.css'

class Question extends React.Component {
	render() {
  	return <div class="question">
      C:\QUESTION_{this.props.currentElement + 1}&gt; What is status code <strong>&quot;{this.props.name}&quot;</strong>? <em>({this.props.description})</em>
    </div>
  };
};

export default Question;
