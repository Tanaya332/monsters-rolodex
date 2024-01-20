import { Component } from "react";
import './search-box.styles.css';

// USING FUNCTION
const SearchBox =({className , placeholder , onchangehandler}) => (
    <input type='search' 
      className= { `search-box ${className}` }
      placeholder={placeholder}
      onChange={onchangehandler}
     >

       </input>
);

// // USING CLASS
// class SearchBox extends Component{
//     render(){
//         return(
//             <input type='search' 
//             className= { `search-box ${this.props.className}` }
//             placeholder={this.props.placeholder}
//             onChange={this.props.onchangehandler}
//       >

//       </input>
//         );
//     }
// }

export default SearchBox;