import Slider from 'react-input-slider';
import {Component} from "react";

class ResizeLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {x: 10, y: 10};
    }
    render() {
        return (
            <div>
                <Slider
                    axis="x"
                    x={this.state.x}
                    onChange={({x}) => this.setState(state => ({...state, x}))}
                />

            </div>
        );
    }
}

export default ResizeLayout;