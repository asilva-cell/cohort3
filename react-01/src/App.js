import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponents';
import EvenComponent from './components/EvenComponent';
import OddComponent from './components/OddComponent';

class App extends React.Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
  }
  onPushMe = () => {
    this.counter += 1;
    console.log('You pushed me');
    console.log(this.counter);
    this.setState({
      myState: "now " + this.counter
    });
    console.log(this.state.myState);
  }
  typeOfCounter = () => {
    if (this.counter % 2 === 0) {
      return <EvenComponent/>;
    }
    return <OddComponent/>;
  };

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in control of this application and my name is Adriana! {this.counter} {this.state.myState}</h1>
          <button onClick={this.onPushMe}>
            Push Me  
          </button>
          <MyComponent whatToSay='What Ever' onPushBtn={this.onPushMe}/>
          
          {this.typeOfCounter()}
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
