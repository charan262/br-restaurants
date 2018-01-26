/* eslint-disable no-undef */
import React from 'react';

 
  
class Map extends React.Component {
    constructor(props) {
      super(props);
      this.state={
       location:{
        "lat": this.props.location.lat,
        "lng":this.props.location.lng,
      }
    }
      
    }
     
  
    
    componentDidMount() {
      this.map = new google.maps.Map(this.refs.map, {
        center: this.state.location,
        zoom: 16
      });
      let infowindow = new google.maps.InfoWindow({
        content: `${this.props.location.formattedAddress[0]} 
                  ${this.props.location.formattedAddress[1]} 
                  ${this.props.location.formattedAddress[2]}`
      });
      let marker = new google.maps.Marker({
        position: this.state.location,
        map: this.map
      });
      marker.addListener('mouseover', function() {
        infowindow.open(this.map, marker);
      });
      
    }
    
    render() {
      const mapStyle = {
        width: '100%',
        height: 300,
        border: '1px solid black'
      };
      
      return (
        <div>
          <div ref="map" style={mapStyle}>I should be a map!</div>
        </div>
      );
    }
  }
 
  export default Map;