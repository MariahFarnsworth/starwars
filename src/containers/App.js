import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';

class App extends Component {
  constructor(){
      super()
      this.state={
        chars: []
     }
}

componentDidMount(){
  fetch('https://swapi.co/api/people/')
       .then(response=> response.json())
       .then(people => this.setState({chars: people.results}))
}
  render() {
    const {chars} = this.state;
    if(!chars.length){
      return <h1>Loading</h1>
    }else{
      return (
        <div className="tc">
        <h1 className="f1">Star Wars</h1>
        <CardList chars={chars} />

        </div>
      );
    }
    
  }
}

export default App;
