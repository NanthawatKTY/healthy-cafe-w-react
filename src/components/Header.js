import React, {Component} from "react";

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
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

export default Header;