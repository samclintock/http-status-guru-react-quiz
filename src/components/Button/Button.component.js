import React from 'react';
import './Button.css'

class Button extends React.Component {
    render() {
        return <button type="button" class="btn btn-primary" 
            onClick={() => this.props.buttonClick(this.props.option)}>
            {this.props.option}
        </button>
    };
};

export default Button;
