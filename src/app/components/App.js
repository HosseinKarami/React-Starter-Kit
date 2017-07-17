import React, { Component } from 'react';
import logo from '../../img/logo.svg';

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Starter Kit</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}