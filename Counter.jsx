import React from "react"
import ReactDOM from "react-dom"

class App19 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
  
    
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    
    }
  
    increment() {
      this.setState({
            count:this.state.count+1
      });
    }
    
    decrement() {
      this.setState({
        count: this.state.count-1
      });
    }


    render() {
      return (
  
     <div>
         <h1>Count: {this.state.count}</h1>
     <input type="button" name="increment" value="increment" onClick={this.increment}></input>
      <input type="button" name="decrement" value="decrement" onClick={this.decrement}></input>
      <Counter2 count={this.state.count} increment={this.increment} decrement={this.decrement} />  
      <Counter3 count={this.state.count} increment={this.increment} decrement={this.decrement} />  
      
    </div>
      );
    }
}

  export default App19;
  
  class Counter2 extends React.Component{
      constructor(props){
          super(props);
          
      }
      

      
    render() {
        return (
    
       <div>
        <h1>Count : {this.props.count}</h1>   
       <input type="button" name="increment" value="increment" onClick={this.props.increment}></input>
        <input type="button" name="decrement" value="decrement" onClick={this.props.decrement}></input>
        
        
      </div>
        );
      }
  }
  

  class Counter3 extends React.Component{
    constructor(props){
        super(props);
        
    }
    

    
  render() {
      return (
  
     <div>
      <h1>Count : {this.props.count}</h1>   
     <input type="button" name="increment" value="increment" onClick={this.props.increment}></input>
      <input type="button" name="decrement" value="decrement" onClick={this.props.decrement}></input>
      
      
    </div>
      );
    }
}
