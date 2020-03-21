import React, { Component } from 'react'
import '../css/AddOrder.css'
import {connect} from 'react-redux';

export class AddOrder extends Component {
    constructor(props) {
        super(props);
       this.state={
        customer_name : '',
        customer_email :'',
           product :'',
           quantity : '',
           id: this.makeid(24)

       }
       this.handleSubmit = this.handleSubmit.bind(this);
    }
     makeid=(length)=>{
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
  
    handleSubmit=()=>{
      if(this.state.customer_email!='' && this.state.customer_email!='' &&
      this.state.product!='' && this.state.quantity >0
      )
      {
        let x =  JSON.parse(localStorage.getItem("names"))
        x.unshift(this.state)
        localStorage.setItem("names", JSON.stringify(x));
        const data = this.state
        this.props.dispatch({
        type:'ADD_POST',
        data});
        document.getElementById('name').value= ''
        document.getElementById('email').value= ''
        document.getElementById('product').value= ''
        document.getElementById('quantity').value= ''
      }else{
        alert('Enter all details correctly')
      }
    }
    render() {
        return (
           
            <div class="cardd">
         
            <div class="containerd">
        <h4><b>Add new order</b></h4> 
        <form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Customer name"
      onChange={(e) => this.setState({ customer_name: e.target.value })}
      id="name" name="name"
      />
    </div>
    <div class="col">
      <input type="email" class="form-control" placeholder="Customer email"
       onChange={(e) => this.setState({ customer_email: e.target.value })}
       id="email" name="email"
      />
    </div>
  </div>
 
  <div class="form-row break">
    <div class="col">
      <input type="number" class="form-control" placeholder="Quantity"
       onChange={(e) => this.setState({ quantity: e.target.value })}
       id="quantity" name="quantity"
      />
    </div>
    <div class="col">
     <select className="form-control"
      onChange={(e) => this.setState({ product: e.target.value })}
      id="product" name="product"
     >
         <option value="">Select Product</option>
         <option value="Product 1">Product 1</option>
         <option value="Product 2">Product 2</option>
         <option value="Product 3">Product 3</option>

     </select>
    </div>
  </div>
</form>
<br/>
        <button className="btn btn-info" onClick={this.handleSubmit}>Add</button>
           <p></p>
           
            </div>
          </div>

        )
    }
}

export default connect()(AddOrder)
