import React, { Component } from 'react';
class Signup extends Component {
  state={
    username: "",
    password:""
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
handleSubmit(event){
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

  render() {
    return(
      <div>
        <form>
            <p>Username:<input value={this.state.username}onChange={(event) => this.handleUsername(event)}type="text" /></p>
            <p>Password:<input value={this.state.password}onChange={(event) => this.handlePassword(event)}type="password"/></p>

          <input type="button" value="Signup"  onClick={ event => this.handleSubmit(event) }/>
        </form>
      </div>
    );
  }
};

export default Signup;
