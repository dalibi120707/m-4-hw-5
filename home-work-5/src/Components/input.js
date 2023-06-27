import {Components} from "react";
import TitleComponent from "./TitleComponent";
class Input extends Components {
    constructor(props) {
        super(props);
        this.state = {
            inputValue1 :'',
            inputValue2 : '',
            title: false
        }
    }
    handleInputChange = (event) => {
        const {name, value } = event.target;
        if (name === "inputValue1") {
            this.setState({inputValue1: value});
        } else if (name === "inputValue2"){
            this.setState({inputValue2: value});
        }
    }
    handleButtonClick = () => {
        this.setState({title: true})
    }
    render() {
        const {inputValue1, inputValue2, title} = this.state;
        return (
            <div>
                <input
                type={"text"}
                name={"inputValue1"}
                value={inputValue1}
                onChange={this.handleInputChange}/>
                <input
                type={"text"}
                name={"inputValue2"}
                value={inputValue2}
                onChange={this.handleInputChange}/>
                <button onClick={this.handleButtonClick}>show</button>
                {title && <TitleComponent inputValue1={inputValue1} inputValue2={inputValue2}/>}
            </div>
        )
    }
}
export default Input