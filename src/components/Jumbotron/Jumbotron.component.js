import React from 'react';
import './Jumbotron.css'

class Jumbotron extends React.Component {
	render() {
  	return <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1>HttpStatusCodeGuru</h1> <span class="curly-bracket">&#123;</span>
            <div class="tab-content">
              <p class="lead">&#47;* HTTP status codes are standard response codes 
              given by web site servers on the internet.<br /><br />
              How many HTTP status codes do you know?<br />
              Take our quiz to find out. *&#47;</p>
            </div>
            <span class="curly-bracket">&#125;</span>
            <span class="blinking-cursor">|</span>
          </div>
          <div class="col-md-6">
            <img 
              src={process.env.PUBLIC_URL + '/media/jumbotron.svg'}
              class="img-fluid"
              alt="HTTP Status Code Guru"
              title="Http Status Code Guru"
              width="75%"
              height="75%"
            />
          </div>
      </div>
      </div>
    </div>
  };
};

export default Jumbotron;
