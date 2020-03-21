import React, { Component } from 'react'
import firebase from '../static/firebase'
import { Redirect } from 'react-router'
import axios from 'axios'
export class GoogleSignup extends Component {
  constructor(props) {
    super(props);
}
componentDidMount(){
  axios.get('./DummyData.json')
  .then(function(result) {
      localStorage.setItem("names", JSON.stringify(result.data));
      // var storedNames = JSON.parse(localStorage.getItem("names"));
      // storedNames.map((k,n)=>{
      //     console.log(k)
      // })
      console.log('ll')
      
  })
}
  handleClick =() =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log("user")
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // var token = result.credential.accessToken;
      var user = result.user;
      console.log(user,"user")
      localStorage.setItem('userId', user.uid);
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('name', user.displayName);
      localStorage.setItem('photo', user.photoURL);
      window.location.reload();
     
      // ...
    }).catch(function(error) {
      // Handle Errors here.
     
      // var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      console.log(errorMessage,"errrrrr")
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }
  render() {
   
    return (
      <div class="flex-center">
      <button id="log" onClick={this.handleClick} className="btn btn-info">
        Login using Google
        </button>
    </div>
    )
  }
}

export default GoogleSignup
