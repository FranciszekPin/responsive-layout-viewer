import './LayoutStyles.css';
import './MostlyFluid.css';
import {Component} from "react";

class MostlyFluid extends Component {


    render() {
        let actualClassName = "";
        if (this.props.viewerWidth >= 0 && this.props.viewerWidth <= 500)
            actualClassName = "small";
        else if (this.props.viewerWidth <= 800)
            actualClassName = "medium";
        else
            actualClassName = "large";
        return (
            <div className={actualClassName}>
                {this.props.layoutStructure}
            </div>
        );
    }
}

export default MostlyFluid;