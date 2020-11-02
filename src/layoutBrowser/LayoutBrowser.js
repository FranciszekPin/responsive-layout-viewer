import './LayoutBrowser.css'
import LayoutSwitcherLeft from "./layout-switcher/LayoutSwitcherLeft";
import LayoutSwitcherRight from "./layout-switcher/LayoutSwitcherRight";
import LayoutPreview from "./layout-preview/LayoutPreview";
import {Component} from "react";
import MostlyFluid from "./layout-preview/layout-patterns/MostlyFluid";

class LayoutBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {layoutNumber: 0};
        this.minimalLayoutNumber = 0;
        this.maximalLayoutNumber = 1;

        this.layouts = [<MostlyFluid />, null];
    }

    incrementLayoutNumber = () => {
        this.setState(
            state =>
                ({layoutNumber: Math.min(state.layoutNumber+1, this.maximalLayoutNumber)})
        );
    }

    decrementLayoutNumber = () => {
        this.setState(
            state =>
                ({layoutNumber: Math.max(state.layoutNumber-1, this.minimalLayoutNumber)})
        );
    }



    render() {
        const actualLayoutToShow = this.layouts[this.state.layoutNumber];

        return (
            <div className="LayoutBrowser">
                <LayoutSwitcherLeft onClick={this.decrementLayoutNumber} />
                <LayoutPreview layoutToShow={actualLayoutToShow} />
                <LayoutSwitcherRight onClick={this.incrementLayoutNumber} />
            </div>
        );
    }
}

export default LayoutBrowser;