import React, { Component } from 'react';

class App extends React.Component {

  getMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }

    render() {
        return (
            <div className="App">
               <button type="button" onClick={this.getMyStorage}> My storage </button>
            </div>
        );
    }
}
export default App;