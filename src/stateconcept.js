import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      name: { firstname:'Tanaya' , lastname:'Kshirsagar'},
      company: 'ZTM',
    };
  }

  render(){
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hii {this.state.name.firstname} {this.state.name.lastname} , I work at {this.state.company}
        </p>
        <button 
          onClick={() => { 
            this.setState(() => {
              return {  
              name: {firstname: 'Snofy' , lastname:'Kshirsagar'},
        };
       }//,
      // () => {console.log(this.state);}
       );
           }
        }
            
     >
          Change name</button>
      </header>
    </div>
  );
}
}

export default App;
