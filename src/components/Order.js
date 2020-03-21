import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/Order.css'

export class Order extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            visible: false, popOverVisible: true ,
                customer_name : this.props.oname,
                customer_email :this.props.oemail,
                   product :this.props.product,
                   quantity : this.props.quantity,


        }
    }
    
    
    handleDelete=(id)=>{
        let x =  JSON.parse(localStorage.getItem("names"))
        let y=[]
        x.map((p,q)=>{
            if(p.id!=id){
                y.push(p)
            }
        })
        localStorage.setItem("names", JSON.stringify(y));
      window.location.reload();
        
    }

   editMenu=()=>{
        this.setState({
            visible : true
        })
   }
   handleEdit=(id)=>{
    let x =  JSON.parse(localStorage.getItem("names"))
    let y =[]
    x.map((k,l)=>{
        if(k.id==id){
            k.customer_name=this.state.customer_name;
            k.customer_email=this.state.customer_email;
            k.product= this.state.product;
            k.quantity = this.state.quantity;
        }
        y.push(k)
    })
    localStorage.setItem("names", JSON.stringify(y));

    window.location.reload();

   }
    render() {
        return (

            <div class="column">
            <div class="card">
                {this.state.visible?
                <div><input type='text' className='editall' value={this.state.customer_name}
                onChange={(e) => this.setState({ customer_name: e.target.value })}
      id="name" name="name"
                />
                <input type='text' className='editall' value={this.state.customer_email}
                onChange={(e) => this.setState({ customer_email: e.target.value })}
                id="email" name="email"
                />
                <input type='text' className='editall' value={this.state.quantity}
                onChange={(e) => this.setState({ quantity: e.target.value })}
                id="quantity" name="quantity"
                />
                <input type='text' className='editall' value={this.state.product}
                onChange={(e) => this.setState({ product: e.target.value })}
                id="product" name="product"
                />
                
                
                </div>:
                <div><h3>{this.props.oname}</h3><p>Email : {this.props.oemail}</p><p>Quantity:{this.props.quantity}</p><p>Product : {this.props.product}</p></div>}

        <div class="form-row break">
                <div class="col">
                {this.state.visible?<button  className="btn btn-success"
                onClick={e=> { e.preventDefault(); this.handleEdit(this.props.oid)} }
                >Save</button>:
                <button  className="btn btn-success"
                onClick={e=> { e.preventDefault(); this.editMenu()} }
                >Edit</button>}
                
                </div>
                <div className="col">
                {this.state.visible?<button className="btn btn-danger"
                onClick={e=> { e.preventDefault(); this.handleCancel(this.props.oid)} }
                ><Link to='/home' id="ch">Cancel</Link></button>:
                <button className="btn btn-danger"
                onClick={e=> { e.preventDefault(); this.handleDelete(this.props.oid)} }
                >Delete</button>}
                
                </div>
        </div>
        </div>
    
        </div>

        )
    }
}

export default Order
