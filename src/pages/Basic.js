import React, { Component } from 'react'
import GoogleSignup from './GoogleSignup'
import Home from './Home'
import axios from 'axios'
export class Basic extends Component {

    constructor(props) {
        super(props);
        this.state = {
              loggedIn : localStorage.getItem('userId')
             }
    }
    componentDidMount(){
        // axios.get('./DummyData.json')
        // .then(function(result) {
        //     localStorage.setItem("names", JSON.stringify(result.data));
        //     // var storedNames = JSON.parse(localStorage.getItem("names"));
        //     // storedNames.map((k,n)=>{
        //     //     console.log(k)
        //     // })
        // })
    }
    render() {
        return (
            <div>
                { this.state.loggedIn ? <Home/>:
                <GoogleSignup/>
                }
            </div>
        )
    }
}

export default Basic
