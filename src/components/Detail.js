import React from 'react';
import './Detail.css';
import Map from '../containers/GoogleMap';
const Details =(props)=>{
    
    return(
            <div >
                <Map location={props.item.location}/>
                <div className="restName">
                <p style={{color:'#ffffff', fontSize:'16px', paddingLeft:'12px', paddingTop: '12px'}}>{props.item.name}</p>
                <p style={{color:'#ffffff', fontSize: '12px', paddingLeft:'12px'}}>{props.item.category}</p>
                </div>
                <div style={{marginTop: '16px'}}>
                <p style={{color:'#2A2A2A', fontSize:'16px', paddingLeft:'12px'}}>{props.item.location.address}</p>
                <p style={{color:'#2A2A2A', fontSize:'16px', paddingLeft:'12px'}}>{props.item.location.city} {props.item.location.state} {props.item.location.postalCode}</p>
                <p style={{color:'#2A2A2A', fontSize:'16px', paddingLeft:'12px'}}>{props.item.contact===null||props.item.contact.formattedPhone===null || props.item.contact.formattedPhone===undefined ? null: props.item.contact.formattedPhone}</p>
                <p style={{color:'#2A2A2A', fontSize:'16px', paddingLeft:'12px'}}>{props.item.contact===null ||props.item.contact===undefined||props.item.contact.twitter===null ||props.item.contact.twitter===undefined? null : '@'+props.item.contact.twitter}</p>
                </div>
            </div> 
        )
    
}
export default Details;