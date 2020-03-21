import React, { Component } from 'react'
import Sidebar from './Sidebar'

export class EditOrder extends Component {
    componentDidMount(){
        console.log(this.props.location)
    }
    render() {
        return (

            <div class="cardd">
         
         <div class="containerd">
        <h4><b>Edit order : {}</b></h4> 
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

export default EditOrder
