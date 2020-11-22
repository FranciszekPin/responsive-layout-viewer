import './Controls.scss'
import LayoutSwitcherLeft from "../layout-switcher/LayoutSwitcherLeft";
import LayoutSwitcherRight from "../layout-switcher/LayoutSwitcherRight";
import ResizeLayout from "../resize-layout-slider/ResizeLayout";
import React from "react";

function Controls(props) {
    return (
        <div className="ControlPanelContainer">
            <div className="ControlPanel">
                <div className="NavigationButtons">
                    <LayoutSwitcherLeft onClick={props.decrementLayoutNumber}/>
                    <LayoutSwitcherRight onClick={props.incrementLayoutNumber}/>
                </div>
                <p className="information">↓ Scroll down to read more about layout ↓</p>
                <ResizeLayout updateViewerWidth={props.updateViewerWidth}/>
            </div>
        </div>
    )
}

export default Controls;