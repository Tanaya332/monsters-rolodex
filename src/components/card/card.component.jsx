import {Component} from 'react';
import './card.styles.css';

// USING FUNCTION
// TWO METHODS FOR THIS 
// const Card =({monster : {id, name, email}}) => {
    
const Card =({monster}) => {
    const {id, name, email}=monster; 

return(
    <div className="card-container" key={id}>
    <img src={`https://robohash.org/${id}?set=set2&sze=180*180"`} alt={`monster ${name}`}>
    </img>
     <h1>{name}</h1>
    <p>{email}</p>
    </div>
)
}

// // USING CLASS
// class Card extends Component{
//  render(){
//     const {id, name, email}=this.props.monster;
//     return(
//         <div className="card-container" key={id}>
//             <img src={`https://robohash.org/${id}?set=set2&sze=180*180"`} alt={`monster ${name}`}>
//             </img>
//             <h1>{name}</h1>
//             <p>{email}</p>
//            </div>
        

       
//     )
//  }
// }

export default Card;