import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getRestaurantsInit} from '../redux/actions/actions';
import List from '../components/List';
import Details from '../components/Detail';

class RestaurantsInfo extends Component{
    constructor(){
        super();
        this.state={
            comp: false,
            item: null
        }
    }
    componentDidMount(){
    this.props.getRestaurantsInit();
    }
    onRestaurantClick(item){
        this.setState({comp:!this.state.comp, item: item})
    }
    render(){
        let display = null;
        if(this.props.info.data.restaurants){
        display=(this.props.info.data.restaurants.map(item=>{
            return (
            <div  key={item.name}>
            <List item={item} clicked={this.onRestaurantClick.bind(this,item)}/>
            <div>{this.state.comp && item.name===this.state.item.name? <Details item={item}/>: null}</div>
            </div>
            )
        }))
        }
        return(
            <div>
              {display}
            </div>
        )
    }
}
const mapStateToProps=state=>{
     return{
      info: state.restaurants
     }
}
const mapDispatchToProps=dispatch=>{
    return bindActionCreators({getRestaurantsInit},dispatch)
    
}
export default connect(mapStateToProps,mapDispatchToProps)(RestaurantsInfo);