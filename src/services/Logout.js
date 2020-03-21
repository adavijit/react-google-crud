import React, { Component } from 'react'
import firebase from '../static/firebase'
import { Link } from 'react-router-dom';
import '../css/Logout.css'
export class Logout extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        firebase.auth().signOut().then(function() {
          }).catch(function(error) {
          });
          localStorage.removeItem('userEmail')
          localStorage.removeItem('myObj')
         localStorage.removeItem('names')
          localStorage.removeItem('name')
          localStorage.removeItem('userId')
          localStorage.removeItem('photo')
          localStorage.removeItem('userData')


    }
    render() {
        return (
          <div class="flex-center">
          <button id="log" className="btn btn-info">
            <Link to='/'><p>Click here to login again</p></Link>
            </button>
        </div>
        )
    }
}

export default Logout
