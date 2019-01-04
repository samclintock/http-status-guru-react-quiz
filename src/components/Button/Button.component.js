import React from 'react';

class Button extends React.Component {
    render() {
        return <button class="button" 
            onClick={() => this.props.buttonClick(this.props.option)}>
            {this.props.option}
        </button>
    };
};

export default Button;
