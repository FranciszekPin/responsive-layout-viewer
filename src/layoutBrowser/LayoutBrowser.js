import './LayoutBrowser.css'
import LayoutSwitcherLeft from "./layout-switcher/LayoutSwitcherLeft";
import LayoutSwitcherRight from "./layout-switcher/LayoutSwitcherRight";
import LayoutPreview from "./layout-preview/LayoutPreview";
import {Component} from "react";

class LayoutBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {layoutNumber: 0};
        this.minimalLayoutNumber = 0;
        this.maximalLayoutNumber = 1;
    }

    incrementLayoutNumber = () => {
        this.setState({layoutNumber: Math.min(this.state.layoutNumber+1, this.maximalLayoutNumber)});
    }

    decrementLayoutNumber = () => {
        this.setState({layoutNumber: Math.max(this.state.layoutNumber-1, this.minimalLayoutNumber)});
    }

    render() {
        return (
            <div className="LayoutBrowser">
                <LayoutSwitcherLeft onClick={this.decrementLayoutNumber} />
                <LayoutPreview layoutNumber={this.state.layoutNumber} />
                <LayoutSwitcherRight onClick={this.incrementLayoutNumber} />
            </div>
        );
    }
}

export default LayoutBrowser;