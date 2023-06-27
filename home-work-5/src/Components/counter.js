import {Components} from "react";
class Counter extends Components {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState(prevState=>({count: prevState.count+1}))
    }
    decrement = () => {
        this.setState(prevState=>({count: prevState.count-1}))
    }
    render() {
        const {count} = this.state;
        if (count < 0 || count > 5) {
            return(<span>Стоп</span>)
        }
        return(<div>
            <h1>{count}</h1>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>)
    }
}
export default Counter