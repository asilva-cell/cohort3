import React from 'react';
import logo from './logo.svg';
import contact from './icons/contact.svg';
import history from './icons/history2.svg';
import pay from './icons/payment.svg';
import browser from './icons/browser.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className="All-Icons">
  
        <img src={browser} className="Icons" alt="browser" />
        <img src={history} className="Icons" alt="history" />
        <img src={pay} className="Icons" alt="payment" />
        <img src={contact} className="Icons" alt="contact" />
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

export default App;
