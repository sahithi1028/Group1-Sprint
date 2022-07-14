import React, { Component } from 'react';
 
  class App extends Component {
  
   constructor() {
        super();
 
        this.state = {
            Floor: ''
        };
      this.onRadioChange = this.onRadioChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onRadioChange = (e) => {
      this.setState({
        floor: e.target.value
      });
    }
 
    onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    }
  render() {
    return (
    <div className="App">
      <form onSubmit={this.onSubmit}>
      <strong>Select Floor:</strong>
 
      <ul>
        <li>
        <label>
        <input type="radio" value="FLoor1" checked={this.state.office=== "Floor1"} onChange={this.onRadioChange} />
        <span>Floor1</span>
        </label>
        </li>

        <li>
        <label>
        <input type="radio" value="Floor2" checked={this.state.office=== "Floor2"} onChange={this.onRadioChange} />
        <span>Floor2</span>
        </label>
        </li>
        </ul>
 
      <button type="submit">Submit</button>
      </form>
    </div>
    );
  }
}
export default App