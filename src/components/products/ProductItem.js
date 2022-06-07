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
        console.log("ProductItem created" + props.prodName);
    }

    render(){
        const {prodName, prodPrice} = this.props;
        return(
          <div>
              <p>{prodName}</p>
              <p>{prodPrice}</p>
          </div>  
        )
    }
}

export default ProductItem;