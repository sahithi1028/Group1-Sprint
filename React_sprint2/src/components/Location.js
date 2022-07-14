import React, { Component } from 'react';
 
  class App extends Component {
  
   constructor() {
        super();
 
        this.state = {
            Location: ''
        };
      this.onRadioChange = this.onRadioChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onRadioChange = (e) => {
      this.setState({
        location: e.target.value
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
      <strong>Select Location:</strong>
 
      <ul>
        <li>
        <label>
        <input type="radio" value="Hyderabad" checked={this.state.Location=== "Hyderabad"} onChange={this.onRadioChange} />
        <span>Hyderabad</span>
        </label>
        </li>

        <li>
        <label>
        <input type="radio" value="Banglore" checked={this.state.Location=== "Banglore"} onChange={this.onRadioChange} />
        <span>Banglore</span>
        </label>
        </li>

        <li>
        <label>
        <input type="radio" value="Chennai" checked={this.state.Location=== "Chennai"} onChange={this.onRadioChange} />
        <span>Chennai</span>
        </label>
        </li>

        <li>
        <label>
        <input type="radio" value="Mumbai" checked={this.state.Location=== "Mumbai"} onChange={this.onRadioChange} />
        <span>Mumbai</span>
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