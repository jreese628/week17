import React from 'react';
import './App.css';
import Person from './basicinfo';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [{ name: 'Jeffrey Reese', age: 25, dob: 'June 28th, 1995' }, { name: 'Chad Cook', age: 21, dob: 'September 28th, 1999' },
      { name: 'Ray Reese', age: 23, dob: 'March 29th, 1997' }]
    };
  }

  render() {
    return (
      
      <div className="App">

        <h1>Basic Information</h1>
        <div className='Cards'>
          <Person name={this.state.person[0].name} age={this.state.person[0].age} dob={this.state.person[0].dob} />
          <Person name={this.state.person[1].name} age={this.state.person[1].age} dob={this.state.person[1].dob} />
          <Person name={this.state.person[2].name} age={this.state.person[2].age} dob={this.state.person[2].dob} />
        </div>
      </div>

    )
  }
}

export default App;