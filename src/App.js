import React, { Component } from 'react';
import './App.css';
import Head from './hoc/head';

export default class App extends Component {

  render() {

     return (
      <div className="App">
        <Head route={this.props.location.pathname}/>
        {
            this.props.children
        }
      </div>
    );
  }
}
