import React from 'react'
import './LayoutBrowser.scss'
import LayoutSwitcherLeft from "./layout-switcher/LayoutSwitcherLeft";
import LayoutSwitcherRight from "./layout-switcher/LayoutSwitcherRight";
import LayoutPreview from "./layout-preview/LayoutPreview";
import {Component} from "react";
import MostlyFluid from "./layout-preview/layout-patterns/MostlyFluid";
import ColumnDrop from "./layout-preview/layout-patterns/ColumnDrop";
import ResizeLayout from "./resize-layout-slider/ResizeLayout";
import LayoutStructure from "./layout-preview/layout-patterns/layoutStructure";
import Controls from "./Controls";

class LayoutBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {layoutNumber: 0, viewerWidth: 800};
        this.numberOfLayouts = 2;
        this.layouts = [<MostlyFluid />, <ColumnDrop />];
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

    getUpdatedLayoutToShow = () => {
        const layoutStructure = <LayoutStructure viewerWidth={this.state.viewerWidth} />
        let actualLayoutToShow = this.layouts[this.state.layoutNumber];
        return React.cloneElement(actualLayoutToShow, {layoutStructure: layoutStructure})
    }


    render() {
        const actualLayoutToShow = this.getUpdatedLayoutToShow();

        return (
                <div className="LayoutBrowser">
                    <LayoutPreview layoutToShow={actualLayoutToShow} width={this.state.viewerWidth} />

                    <Controls
                        incrementLayoutNumber={this.incrementLayoutNumber}
                        decrementLayoutNumber={this.decrementLayoutNumber}
                        updateViewerWidth={this.updateViewerWidth}
                    />
                </div>
        );
    }
}

export default LayoutBrowser;