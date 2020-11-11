import './LayoutStyles.css';
import './MostlyFluid.css';
import {Component} from "react";

class MostlyFluid extends Component {


    render() {
        return (
            <div>
                {this.props.layoutStructure}
            </div>
        );
    }
}

export default MostlyFluid;