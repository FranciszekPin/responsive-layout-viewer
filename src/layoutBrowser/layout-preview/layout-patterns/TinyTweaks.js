import './TinyTweaks.scss';
import './LayoutStyles.scss';
import {Component} from "react";

class TinyTweaks extends Component {
    render() {
        return (
            <div className="TinyTweaks">
                {this.props.layoutStructure}
            </div>
        );
    }
}

export default TinyTweaks;