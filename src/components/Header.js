import React, {Component} from "react";
import './Header.css'

// const Header = () => {
//     return <h1>Header</h1>
// }

class Header extends Component {

    constructor(props) {  
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate(){   
        
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="text-success">
                            <img className="img-logo" src="/images/logo/logo.png" alt=""/>Healthy Cafe
                        </h1>
                    </div>
                    <div className="col-md-4 text-end">
                        <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Header;