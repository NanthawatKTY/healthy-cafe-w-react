import React, {Component} from "react";
import Calculator from "./Calculator";
import ProductList from "../products/ProductList";
import axios from 'axios';

class Monitor extends Component{

    constructor(props){
        super(props);

        //Store summary of products to show in calculator
        this.state = {totalPrice: 0, orders: [], confirm: false, msgAlert: ''};

        //Bind addOrder function to this , this ตัวนี้ต้องมาเรียกที่ Monitor เท่านั้น
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrder(product){
        let findOrder = this.state.orders.find(order => order.product.productId === product.productId);
        if(findOrder){
            findOrder.quantity++;
        }else{
            this.state.orders.push({product: product, quantity: 1});
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({totalPrice: totalPrice, orders: this.state.orders, confirm: false});
    }

    delOrder(product){
        let findOrder = this.state.orders.find(order => order.product.productId === product.productId);
        let resultOrder = this.state.orders.filter(order => order.product.productId !== product.productId);
        const totalPrice = this.state.totalPrice - (parseInt(findOrder.product.unitPrice) * findOrder.quantity);
        this.setState({totalPrice: totalPrice, orders: resultOrder, confirm: false});
    }

    confirmOrder(){
        const {totalPrice, orders} = this.state;
        if (orders && orders.length > 0) {
            axios.post('http://localhost:9000/orders', {orderDate: new Date(), totalPrice, orders})
            .then(res => {
                this.setState({totalPrice: 0, orders: [], confirm: true, msgAlert: 'Saved Orders!'});
            })
        }else {
            this.setState({totalPrice: 0, orders: [], confirm: true, msgAlert: 'Please add orders!'});
        }

    }

    cancelOrder(){
        this.setState({totalPrice: 0, orders: [], confirm: false, msgAlert: ''});
    }

    render(){
        return(
            <div className="container-fluid">
                {/* If this.state.confirm true, true case will show data and if false it won't works*/}
                { this.state.confirm && 
                    <div className="alert alert-secondary title text-end" role="alert">
                        {this.state.msgAlert}
                    </div>
                }

                {/* true case */}
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder}/>
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onConfirmOrder={this.confirmOrder} onCancelOrder={this.cancelOrder}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;