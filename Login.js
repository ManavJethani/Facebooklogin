import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";


export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
    photos : "",
  };

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  LogoutHandle = () => {
    this.setState(prevState => ({
      isLoggedIn: false
    }));
  }  
  

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "blue",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } 
    else {
      fbContent = (
        <FacebookLogin
          appId="604903993296302"
          autoLoad={false}
          scope = "user_photos"
          fields="name,email,picture,photos.limit(100){id,picture}"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />

        
      );
    }

    return <div>{fbContent}
            <input type = "button" value = "logout" onClick = {this.LogoutHandle.bind(this)} />
          </div>;
  }
}
