import React from 'react';
import './Scoreboard.css';

class Scoreboard extends React.Component {
    render() {
        return <div class="scoreboard">
            Score is {this.props.currentScore} of {this.props.totalQuestions}
        </div>
    };
};

export default Scoreboard;
