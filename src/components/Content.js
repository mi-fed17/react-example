import React, { Component } from 'react';
import InputField from './InputField';
import List from './List';
import Counter from './Counter';


/*  The Content component can handle the logic for the app */
export default class Content extends Component {

  state = {
      name: '',
      names: [],
      visible: true
  }

  handleChange = (e) => {

    //ES6 magic: get the name of the input field and set the
    //key to that name. Then grab the value from the input
    //and set it to that key. 
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit = (e) => {

    //e.keyCode === 13 is the enter key, otherwise
    //it will run this code for every keyDown
    if(e.keyCode === 13){

      //pure copy the array in state to a new Array
      //this is so we don't reference a new array
      let newNames = [...this.state.names];

      //push the current value, the input value into array
      newNames.push(this.state.name);

      //Set the new copied array to this.state.names
      //and reset the input field
      this.setState({ names: newNames, name: '' });
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible  });
  }

  render(){
    return(
      <section className="content">
        <h3> Exempelsida med React </h3>
        <p> Fokusera inte på CSSen, den kan du bara kopiera om du vill, eller modifiera
          som du själv vill ha den.
          Fokusera istället på att få upp en struktur i react som du känner dig bekväm med och
          som stämmer överens med hur du ser DOMen.
        </p>
        <div className="inputList">
          <InputField handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      value={this.state.name }
                      placeholder="Skriv något -> Enter"
                    />
          <List items={ this.state.names } />
        </div>

        <Counter />
      </section>

    );
  }

}