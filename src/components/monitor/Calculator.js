import React, {Component} from "react";

class Calculator extends Component {

    showOrders(orders){
        if(!orders || orders === undefined || orders.length === 0){
            return <li className="text-end text-muted title">No orders here.</li>;
        }else{
            return orders.map(order => {
                return(
                    <li className="text-end text-success title">
                        {order.product.productName} x {order.quantity} = {order.quantity * order.product.unitPrice}
                        <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)}>X</button>
                    </li>
                )
            })

        }
    }


    render(){

        const {totalPrice, orders} = this.props;

        return(
            <div className="container-fluid">
                <h1 className="text-end">{totalPrice}฿</h1>
                <hr/>
                <ul className="list-unstyled">
                    {this.showOrders(orders)}
                </ul>
                <hr/>
                <div className="d-grid gap-2">
                    <button className="btn btn-success title" type="submit" onClick={() => this.props.onConfirmOrder()}>Confirm</button>
                    <button className="btn btn-danger title" type="submit" onClick={() => this.props.onCancelOrder()}>Cancel</button>
                </div>

            </div>
        )
    }
}

export default Calculator;