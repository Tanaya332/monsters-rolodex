// use for class 
// import { Component } from 'react';

// use for function
import { useState , useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

// FUNCTIONS IN REACT
const App = () => {

  const [searchstring , setsearchstring] = useState('');  //[value, setvalue]
  const [monsters , setmonsters] = useState([]);
  const [title , settitle] = useState('');
  const [filteredmonster , setfilteredmonster] = useState([monsters]);
  
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setmonsters(users));
  },[])
  
  useEffect( () => {
    const newfilteredmonster=monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchstring);
     });

     setfilteredmonster(newfilteredmonster);
  },[monsters , searchstring])

  const onsearchchange = (event) => {

        console.log(event.target.value);
        const searchfieldstring = event.target.value.toLocaleLowerCase();
        setsearchstring(searchfieldstring);
       
      }; 

  const ontitlechange = (event) => {

        console.log(event.target.value);
        const searchfieldstring = event.target.value.toLocaleLowerCase();
        settitle(searchfieldstring);
       
      };

      
        

  return(  
  <div className="App">
  <h1 className='app-title'>{title}</h1>
         <SearchBox 
        className='monsters-search-box'
        placeholder='Search monsters'
        onchangehandler={onsearchchange}></SearchBox>
        <br></br>

         <SearchBox 
        className='title-search-box'
        placeholder='Set title'
        onchangehandler={ontitlechange}></SearchBox>

  { <CardList monsters = {filteredmonster}></CardList>  }
</div>

  );
};

// // CLASS IN REACT
// class App extends Component {
//   constructor(){
//     super();

//     this.state={
//       monsters : [],
//       searchstring: '',
//     };

//   }
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters:users};
//     }));
  
//   }

//   onsearchchange= (event) => {
//     console.log(event.target.value);
//     const searchstring = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return {searchstring};
//     });
//   };

//   render(){
//     console.log('render')

//     const {monsters , searchstring}= this.state;
//     const {onsearchchange}=this;

//     const filteredmonster=monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchstring);
//     });

//     return(
//      <div className="App">
//       <h1 className='app-title'>Monsters Rolodex</h1>
//             <SearchBox 
//             className='monsters-search-box'
//             placeholder='Search monsters'
//             onchangehandler={onsearchchange}></SearchBox>

//       {/* {
//       filteredmonster.map((monster) => {
//         return (
//         <div key={monster.id}>
//         <h1>{monster.name}</h1></div>
//         );
//       })
//       } */}
//       <CardList monsters = {filteredmonster}></CardList>
//     </div>)
      
// }
// }

export default App;
