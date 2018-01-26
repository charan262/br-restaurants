import React from 'react';
import './List.css';
const List =(props)=>{
    
    return(
            <div onClick={props.clicked}>
                <img className="image" src={props.item.backgroundImageURL} alt="restaurants"/>
                <div style={{position:'absolute', marginTop:'-20%', marginLeft:'2%'}}>
                <p>{props.item.name}</p>
                <p>{props.item.category}</p>
            </div> 
            </div>
        )
    
}
export default List;