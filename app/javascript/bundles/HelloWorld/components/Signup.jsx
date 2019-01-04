import React, { Component } from 'react';
class Signup extends Component {
  state={
    username: "",
    password:"",
    address1:"",
    address2:"",
    city:"",
    state:"",
    zip:""
  }
  handleUsername(event) {
  this.setState({
    username: event.target.value  //does event work here?
  });
};
handlePassword(event){
  this.setState({
    password: event.target.value
  })
}
handleAddress1(event){
  this.setState({
    address1: event.target.value
  })
}
validate(){


fetch('http://production.shippingapis.com/ShippingAPITest.dll?API=Verify&XML=<AddressValidateRequest USERID="949FLATI6234"><Address ID="0"><Address1></Address1><Address2>6406 Ivy Lane</Address2><City>Greenbelt</City><State>MD</State><Zip5></Zip5><Zip4></Zip4></Address></AddressValidateRequest>')
  .then(response => response.text())
          .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
          .then(data => {
            console.log(data)
            
          })
}
handleSubmit(event){
  if (validate != "false"){

  }else{
    let postBody= {
    username: this.state.username,
    password: this.state.password,
    email: "hi@gmail.com"
  }


          fetch('/users', {

              method: 'POST',
              body: JSON.stringify(postBody),

              headers:{
                  'Content-Type': 'application/json'
              }
          }).then(res => res.json())
                            .then(res => console.log(res))
              }
  }

  render() {
    return(
      <div>
        <form>
            <p>Username:<input value={this.state.username}onChange={(event) => this.handleUsername(event)}type="text" /></p>
            <p>Password:<input value={this.state.password}onChange={(event) => this.handlePassword(event)}type="password"/></p>
            <p>Address1:<input value={this.state.address1}onChange={event => this.handleAddress1(event)}type="text"></input></p>
          <input type="button" value="Signup"  onClick={ event => this.handleSubmit(event) }/>
        </form>
      </div>
    );
  }
};

export default Signup;
