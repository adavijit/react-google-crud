import React, { Component } from 'react'
import '../css/Sidebar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
              photo : localStorage.getItem('photo'),
              name : localStorage.getItem('name'),
              userEmail : localStorage.getItem('userEmail')

             }
    }
    componentDidMount(){
        
    }
    render() {
        return (
            <div>
  <div class="sidenav">
  <center><img src={this.state.photo}/></center>
  <center><a className="test">{this.state.name}</a></center>
  <hr/>
  <center><a href='/home' className="click" >Home</a></center>
  <center><Link to='/logout' className="click" >Logout</Link></center>
</div>
            </div>
        )
    }
}

export default Sidebar
