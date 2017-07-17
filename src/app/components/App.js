import React, { Component } from 'react';
import logo from '../../img/logo.svg';

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Starter Kit</h2>
          <iframe src="https://ghbtns.com/github-btn.html?user=HosseinKarami&repo=React-Starter-Kit&type=star&count=true" frameborder="0" scrolling="0" width="90px" height="20px"></iframe>
          <iframe src="https://ghbtns.com/github-btn.html?user=HosseinKarami&repo=React-Starter-Kit&type=fork&count=true" frameborder="0" scrolling="0" width="90px" height="20px"></iframe>
       </div>
        <p className="App-intro">
          To get started, Fork from top and then edit <code>src/components/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}