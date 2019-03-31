import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state={
        isLoggedIn:false,
        userId:'',
        name:'',
        email:'',
        picture:''
    }
    responseFacebook = response =>{
        //console.log(response);
        this.setState({
            isLoggedIn:true,
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })
    }
    componentClicked=()=> console.log("Click");

  render() {
      /* eslint-disable no-unused-vars */
      let fbContent;
      if(this.state.isLoggedIn){
        fbContent=(
            <div className="card">
             <img src={this.state.picture} alt={this.name}/>
             <p>Welcome to {this.state.name}</p>
            </div>
        );
      }
      else{
        fbContent=(
            <FacebookLogin
            appId="1829331310702257"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
          )
      }
      /* eslint-enable no-unused-vars */
    return (
      <div className="card-outer">{fbContent}</div>
    )
  }
}
