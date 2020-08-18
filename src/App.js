import React from 'react';
import './App.css';

class Name extends React.Component {
  render() {
    const full_name = this.props.first_name + " " + this.props.last_name;
    return (
      <h1>{ full_name }</h1>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "Tyler",
      last_name: "Baumgartner"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Name first_name={this.state.first_name} last_name={this.state.last_name} />
        </header>
      </div>
    );
  }
}

export default App;
