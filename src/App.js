import React from 'react';
import { 
  Jumbotron, 
  Window,
  Scoreboard,
  Question,
  Button,
  Footer
} from './components/index.js'
import statusCodeRepository from './assets/status-code-repository.json';

// Set the total amount of questions in the quiz
const TOTAL_QUESTIONS = 10;

class App extends React.Component {
	constructor() {
    super();
    
    // Limit the number of questions in the quiz
    var statusCodes = statusCodeRepository.slice(0, TOTAL_QUESTIONS - 1);
    
    this.state = {
    	statusCodeRepository: this.shuffleArray(statusCodes),
      currentElement: 0,
      currentScore: 0
    }
    
    this.buttonClick = this.buttonClick.bind(this);
  };

  // Get the options for the user to be able to choose 
  // an incorrect or correct answer
  getOptions(currentElement) {
  	// Safely get the previous element. If the current element is the
    // first element in the repository, get the last element instead
    var previousElement = (currentElement === 0) ? 
    	(this.state.statusCodeRepository.length - 1) : 
    	(currentElement - 1);
    
    // Safely get the next element. If the current element is the last
    // element in the repository, get the first element instead
    var nextElement = (currentElement === 
    	(this.state.statusCodeRepository.length - 1)) ? 0 : 
    	currentElement + 1;
    
  	// Return a randomized array of options  
  	return this.shuffleArray(
    	[previousElement, currentElement, nextElement]);
  };
  
  // Shuffle the order of an array
  shuffleArray(array) {
  	var currentIndex = array.length, temporaryValue, randomIndex;
			
  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {
    	// Pick a remaining element...
    	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;
			
    	// And swap it with the current element.
    	temporaryValue = array[currentIndex];
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
  	}
		
  	return array;
  };
  
  // Functionality for the button click
  buttonClick(option) {
    var isCorrect = (option === this.state.statusCodeRepository[
      this.state.currentElement].code);
    
  	if (isCorrect)
    {
      // Update the state so React will update the DOM
      this.setState({
        currentScore: this.state.currentScore + 1
      });
    }

    var nextElement = 0;

    // Check if we're at the end of the quiz
    if (this.state.currentElement !== 
      (this.state.statusCodeRepository.length - 1)) {
        // If we're not at the end of the quiz, load the next question
        nextElement = (this.state.currentElement + 1);

        if(isCorrect)
          alert(option + ' is correct!');
        else
          alert(option + ' is incorrect.');
    }
    else {
      if (this.state.currentScore === TOTAL_QUESTIONS)
        alert('Congratulations! You are a HTTP Status Code Guru!');
      else
        alert('You are not a HTTP Status Code Guru this time! Please try again...');

      // Reset the score (so the user can try again)
      this.setState({
        currentScore: 0
      });
    }

    this.setState({
      currentElement: nextElement
    });
  };
  
  render() {
  	var options = this.getOptions(this.state.currentElement);
    
    return <div class="app">
        <Jumbotron />
        <Window />
        <div class="quiz">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <Scoreboard 
                  currentScore={this.state.currentScore}
                  totalQuestions={TOTAL_QUESTIONS}
                />
                <Question 
                  currentElement={this.state.currentElement}
                  name={this.state.statusCodeRepository[this.state.currentElement].name}
                  description={this.state.statusCodeRepository[this.state.currentElement].description}
                />
                <div class="btn-group">
                  <Button 
                    buttonClick={this.buttonClick} 
                    option={this.state.statusCodeRepository[options[0]].code} 
                  />
                  <Button 
                    buttonClick={this.buttonClick}
                    option={this.state.statusCodeRepository[options[1]].code} 
                  />
                  <Button 
                    buttonClick={this.buttonClick}
                    option={this.state.statusCodeRepository[options[2]].code} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  };
};

export default App;
