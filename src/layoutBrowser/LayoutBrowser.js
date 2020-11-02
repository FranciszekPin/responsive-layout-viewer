import './LayoutBrowser.css'
import LayoutSwitcherLeft from "./layout-switcher/LayoutSwitcherLeft";
import LayoutSwitcherRight from "./layout-switcher/LayoutSwitcherRight";
import LayoutPreview from "./layout-preview/LayoutPreview";
import {Component} from "react";
import MostlyFluid from "./layout-preview/layout-patterns/MostlyFluid";
import ColumnDrop from "./layout-preview/layout-patterns/ColumnDrop";

class LayoutBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {layoutNumber: 0};
        this.numberOfLayouts = 2;

        this.layouts = [<MostlyFluid />, <ColumnDrop />];
    }

    incrementLayoutNumber = () => {
        this.setState(
            state =>
                ({layoutNumber: (state.layoutNumber+1) % this.numberOfLayouts})
        );
    }

    decrementLayoutNumber = () => {
        this.setState(
            state =>
                ({layoutNumber: (state.layoutNumber-1 + this.numberOfLayouts) % this.numberOfLayouts})
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