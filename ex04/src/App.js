import React, { Component } from 'react';

class App extends React.Component {

  getLocalStorage = () => {
    localStorage.getItem('Arena');
  }

    render() {
        return (
            <div className="App">
               <button type="button" onClick={this.getLocalStorage}> Local storage </button>
            </div>
        );
    }
}

export default App;