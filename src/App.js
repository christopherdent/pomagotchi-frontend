import './App.css';
import React from 'react';
import ReactDom from 'react-dom'


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/logo512.png' className="App-logo" alt="logo" />
        <h1> Welcome to Pomagotchi </h1>
        <p>
          Insert Pom Here
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
  }
}

export default App;
