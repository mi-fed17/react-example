import React, { Component } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';


export default class Counter extends Component{

  state = {
    counter: 0
  }

  changeCounter = (bool) => {
    if(bool){
      this.setState({ counter: this.state.counter + 1});
    }else{
      this.setState({ counter: this.state.counter - 1 })
    }
  }
  
  render(){
    return(
      <div className="counter"> 
        <h1>{ this.state.counter} </h1>
        <PrimaryButton    handleClick={this.changeCounter}
                          value="increase"/>
        <SecondaryButton  handleClick={this.changeCounter}
                          value="decrease" />
      </div>
    )
  }
}