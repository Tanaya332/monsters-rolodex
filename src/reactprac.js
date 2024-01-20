import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters : [
        {
        name: 'Linda',
        id: '36t7egyw'
        },
        {
          name: 'Frank',
          id: '98t7egyw'
        },
        {
          name: 'jacky',
          id: '12t7egyw'
        },
      ]
    };
  }
  

  render(){
    return <div className="App">
      {
      this.state.monsters.map((monster) => {
        return (
        <div key={monster.id}>
        <h1>{monster.name}</h1></div>
        );
      })
      }
    </div>
      
}
}

export default App;
