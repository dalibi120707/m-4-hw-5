import {Components} from "react";
class Title extends Components {
    render() {
        const {inputValue1, inputValue2} = this.props
        return (
            <div>
                <h2>show: {inputValue1}</h2>
                <h2>show: {inputValue2}</h2>
            </div>
        );
    }
}
export default Title