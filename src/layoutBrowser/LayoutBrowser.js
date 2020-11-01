import './LayoutBrowser.css'
import LayoutSwitcherLeft from "./layout-switcher/LayoutSwitcherLeft";
import LayoutSwitcherRight from "./layout-switcher/LayoutSwitcherRight";
import LayoutPreview from "./layout-preview/LayoutPreview";
import {Component} from "react";

class LayoutBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {layoutNumber: 1};
    }

    render() {
        return (
            <div className="LayoutBrowser">
                <LayoutSwitcherLeft/>
                <LayoutPreview layoutNumber={this.state.layoutNumber}/>
                <LayoutSwitcherRight/>
            </div>
        );
    }
}

export default LayoutBrowser;