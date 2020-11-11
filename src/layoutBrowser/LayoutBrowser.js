import './LayoutBrowser.css'
import LayoutSwitcherLeft from "./layout-switcher/LayoutSwitcherLeft";
import LayoutSwitcherRight from "./layout-switcher/LayoutSwitcherRight";
import LayoutPreview from "./layout-preview/LayoutPreview";
import {Component} from "react";
import MostlyFluid from "./layout-preview/layout-patterns/MostlyFluid";
import ColumnDrop from "./layout-preview/layout-patterns/ColumnDrop";
import ResizeLayout from "./resize-layout-slider/ResizeLayout";
import layoutStructure from "./layout-preview/layout-patterns/layoutStructure";
class LayoutBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {layoutNumber: 0, viewerWidth: 800};
        this.numberOfLayouts = 2;

        this.layouts = [<MostlyFluid viewerWidth={this.state.viewerWidth} layoutStructure={layoutStructure}/>, <ColumnDrop layoutStructure={layoutStructure}/>];
    }

    incrementLayoutNumber = () => {
        this.setState(
            state =>
                ({layoutNumber: (state.layoutNumber + 1) % this.numberOfLayouts})
        );
    }

    decrementLayoutNumber = () => {
        this.setState(
            state =>
                ({layoutNumber: (state.layoutNumber - 1 + this.numberOfLayouts) % this.numberOfLayouts})
        );
    }

    updateViewerWidth = (x) => {
        this.setState({viewerWidth: x});
    }

    render() {
        let actualLayoutToShow = (<div> </div>);
        if (this.state.layoutNumber === 0)
            actualLayoutToShow = (<MostlyFluid viewerWidth={this.state.viewerWidth} layoutStructure={layoutStructure}/>);
        else
            actualLayoutToShow  = <ColumnDrop layoutStructure={layoutStructure}/>;
        return (
                <div className="LayoutBrowser">
                    <LayoutPreview layoutToShow={actualLayoutToShow} width={this.state.viewerWidth} />

                    <div className="UserControl">
                        <div className="NavigationButtons">
                            <LayoutSwitcherLeft onClick={this.decrementLayoutNumber}/>
                            <LayoutSwitcherRight onClick={this.incrementLayoutNumber}/>
                        </div>

                        <ResizeLayout updateViewerWidth={this.updateViewerWidth}/>
                    </div>
                </div>


        );
    }
}

export default LayoutBrowser;