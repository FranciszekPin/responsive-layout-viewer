import './LayoutBrowser.css'
import LayoutSwitcherLeft from "./layout-switcher/LayoutSwitcherLeft";
import LayoutSwitcherRight from "./layout-switcher/LayoutSwitcherRight";
import LayoutPreview from "./layout-preview/LayoutPreview";
import {Component} from "react";
import MostlyFluid from "./layout-preview/layout-patterns/MostlyFluid";
import ColumnDrop from "./layout-preview/layout-patterns/ColumnDrop";
import layoutStructure from "./layout-preview/layout-patterns/layoutStructure";

class LayoutBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {layoutNumber: 0};
        this.numberOfLayouts = 2;

        this.layouts = [<MostlyFluid viewerWidth={this.state.viewerWidth} layoutStructure={layoutStructure}/>, <ColumnDrop layoutStructure={layoutStructure}/>];
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
        let actualLayoutToShow = (<div> </div>);
        if (this.state.layoutNumber === 0)
            actualLayoutToShow = (<MostlyFluid viewerWidth={this.state.viewerWidth} layoutStructure={layoutStructure}/>);
        else
            actualLayoutToShow  = <ColumnDrop layoutStructure={layoutStructure}/>;
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