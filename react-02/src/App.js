import React from 'react';
import logo from './logo.svg';
import contact from './icons/contact.svg';
import history from './icons/history2.svg';
import pay from './icons/payment.svg';
import browser from './icons/browser.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.icon = "";
  }
  onPush = (id) => {
    this.icon = id;
    console.log(this.icon);
  }

  render (){
    return (
      <div className="App">
        <div className="All-Icons"
        onClick={this.onPush}>
          <img id="idBrowser" src={browser} className="Icons" alt="browser" 
            onClick={(e) => this.onPush(e.target)}/>
          <img id="idHistory" src={history} className="Icons" alt="history" 
            onClick={(e) => this.onPush(e.target)}/>
          <img id="idPayment" src={pay} className="Icons" alt="payment" 
            onClick={(e) => this.onPush(e.target)}/>
          <img id="idContact" src={contact} className="Icons" alt="contact" 
            onClick={(e) => this.onPush(e.target)}/>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
