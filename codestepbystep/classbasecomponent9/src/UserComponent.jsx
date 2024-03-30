import React, { Component } from 'react'

export default class  extends Component {
    constructor(){
        // super method is important for constructor because it inheritate parent class 
        super();
        //initial state
        this.state = {
            name:"ajay"
        }
    }
    // update state
    updateName(){
        this.setState({
            name:"anil"
        })
    }
    // redner is important for clas Component
  render() {
    return (
    <>

            <h1>{this.state.name}</h1>
            {/* function used in onclick because it's not called automatic */}
            <button onClick={()=>this.updateName()}>Update</button>
        </>
        
    
    )
  }
}
