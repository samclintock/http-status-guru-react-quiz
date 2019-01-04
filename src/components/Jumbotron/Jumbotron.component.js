import React from 'react';
import './Jumbotron.css'

class Jumbotron extends React.Component {
	render() {
  	return <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1 class="display-3">{this.props.title}</h1>
            <p class="lead">{this.props.tagline}</p>
          </div>
          <div class="col-md-6">
            <img 
              src={process.env.PUBLIC_URL + '/media/jumbotron.png'}
              class="img-fluid center-block"
              alt={this.props.title}
              title={this.props.title}
            />
          </div>
      </div>
      </div>
    </div>
  };
};

export default Jumbotron;
