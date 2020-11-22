import React from 'react';
import './App.scss';
import LayoutPreview from "./layout-preview/LayoutPreview";
import {Component} from "react";
import MostlyFluid from "./layout-preview/layout-patterns/MostlyFluid";
import ColumnDrop from "./layout-preview/layout-patterns/ColumnDrop";
import LayoutStructure from "./layout-preview/layout-patterns/layoutStructure";
import Controls from "./controls/Controls";
import TinyTweaks from "./layout-preview/layout-patterns/TinyTweaks";
import LayoutDescription from "./layout-description/LayoutDescription";
import Header from "./header/Header";
import Footer from "./footer/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {layoutNumber: 0, viewerWidth: 800};
        this.numberOfLayouts = 3;
        this.layoutTitles = ["MostlyFluid", "ColumnDrop", "TinyTweaks"];
        this.layouts = [<MostlyFluid/>, <ColumnDrop/>, <TinyTweaks/>];
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
        const layoutStructure = <LayoutStructure viewerWidth={this.state.viewerWidth}/>
        let actualLayoutToShow = this.layouts[this.state.layoutNumber];
        return React.cloneElement(actualLayoutToShow, {layoutStructure: layoutStructure})
    }

    getUpdatedTitleName = () => {
        return this.layoutTitles[this.state.layoutNumber];
    }


    render() {
        const actualLayoutToShow = this.getUpdatedLayoutToShow();
        const actualTitleToShow = this.getUpdatedTitleName();

        return (
            <div className="LayoutBrowser">
                <Header actualTitleToShow={actualTitleToShow}/>

                <LayoutPreview layoutToShow={actualLayoutToShow} width={this.state.viewerWidth}/>

                <Controls
                    incrementLayoutNumber={this.incrementLayoutNumber}
                    decrementLayoutNumber={this.decrementLayoutNumber}
                    updateViewerWidth={this.updateViewerWidth}
                />

                <LayoutDescription layoutNumber={this.state.layoutNumber} />
                <Footer />
            </div>
        );
    }
}

export default App;
