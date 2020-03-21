import React, { Component } from 'react'
import SideBar from '../components/Sidebar'
import axios from 'axios'
import Order from '../components/Order'
import '../css/Home.css'
import AddOrder from '../components/AddOrder'
import { connect } from 'react-redux';

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: JSON.parse(localStorage.getItem("names")),
            added: false
        }
      
    }
 
    componentDidMount() {
        
        
        
        //console.log(this.props.data)
        // fetch(url)
        //     .then(response => {
        //         this.setState({ data : response })
        //         console.log(response,"resss")
        //     }).catch(error => {
        //         console.log(error)
        //     })
    }
    render() {
        return (
            <div>
                <SideBar/>
                <AddOrder/>
                <div className="row">
{this.props.data.map((k,n)=>{
    return(<Order
    key={n}
       oid={k.id}
       oname={k.customer_name}
       oemail={k.customer_email}
       product={k.product}
       quantity={k.quantity}
        />)
})}

{this.state.data.map((k,n)=>{
    return(<Order
    key={n}
       oid={k.id}
       oname={k.customer_name}
       oemail={k.customer_email}
       product={k.product}
       quantity={k.quantity}
        />)
})}
</div>

    
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        data: state
    }
}
export default connect(mapStateToProps)(Home);
