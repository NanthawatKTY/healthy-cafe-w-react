import React, {Component} from "react";

// const ProductItem = (props) =>{
//     const {prodName, prodPrice} = props;
//     console.log(props);
//     return(
//       <div>
//           <p>{prodName}</p>
//           <p>{prodPrice}</p>
//       </div>  
//     )
// }

class ProductItem extends Component{

    //จะเรียกเมื่อ obj of product was created
    constructor(props){
        super(props);// call constructor of parent class
        // console.log("ProductItem created" + props.prodName);
    }

    // buyItem(event){
    //     console.log(event.target.value);
    // }

    render(){
        const {productName, unitPrice, thumbnail} = this.props.product;
        return(
          <div className="col-md-3 col-sm-6">
              <img className="img-fluid img-thumbnail" src={thumbnail} alt=""/>
              <h5 className="mt-2">{productName}</h5>
              <p className="text-end title">{unitPrice}฿</p>
              <div className="d-grid gap-2 mb-2">
                <button className="btn btn-outline-success" 
                type="submit" 
                onClick={() => this.props.onAddOrder(this.props.product)}>
                    Buy
                </button>
                <hr/>
              </div>
          </div>  
        )
    }
}

export default ProductItem;