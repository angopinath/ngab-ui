import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TractInfo from './player/TrackInfo'
class App extends Component {
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('/api/employees');
    const body = await response.json();
    this.setState({ groups: body, isLoading: false });
  }

  render() {
    const {groups, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TractInfo/>
          <div className="App-intro">
            <h2>List</h2>
            {groups.map(group =>
              <div key={group.id}>
                {group.id}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;