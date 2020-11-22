import Slider from 'react-input-slider';
import {Component} from "react";

class ResizeLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {x: 50};
    }



    sliderMoved = ({x}) => {
        this.setState(state => ({...state, x}));
        this.props.updateViewerWidth(400+(8*x));
    }

    render() {
        return (
            <div>
                <Slider
                    axis="x"
                    x={this.state.x}
                    onChange={this.sliderMoved}
                    styles={{
                        track: {
                            backgroundColor: 'gray'
                        },
                        active: {
                            backgroundColor: 'white'
                        }
                    }}
                />

            </div>
        );
    }
}

export default ResizeLayout;