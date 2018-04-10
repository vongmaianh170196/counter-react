import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
  }

  add = ()=>{
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
     })
  }
  minus =() => {
    this.setState((prevState) => {
      return{
        counter: prevState.counter -1
      }
    })
  }
  render() {
    
    return (
      <div className="Hello">
          <p>Counter: {this.state.counter}</p>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>       
        
        
      </div>
    );
  }
}

export default App;
