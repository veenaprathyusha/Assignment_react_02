import React from 'react';
export default class Login extends React.Component{
constructor() {
  super()
  this.state = {
  username: '',
  password: '',
  isLogined: false
 }
 this.handleInputChange = this.handleInputChange.bind(this)
 this.submitClick = this.submitClick.bind(this)
    
}
handleInputChange(event)
{
this.setState({
    [event.target.name]: event.target.value
  })
}
submitClick()
{
if((this.state.username=="veena") &&   (this.state.password=="veena123"))
{
   this.setState({isLogined:true});
}
}
render() {
return (
<div>
 <input type="text" name="username" hint="username" onChange={(event)=>this.handleInputChange(event)} />
<input type="password" name="password" hint="password" onChange={(event)=>this.handleInputChange(event)} />
<button  name="submit" onClick={this.submitClick}> Submit</button></div>);
}
}
