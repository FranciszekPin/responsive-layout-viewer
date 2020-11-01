import './LayoutBrowser.css'
import LayoutSwitcherLeft from "./layout-switcher/LayoutSwitcherLeft";
import LayoutSwitcherRight from "./layout-switcher/LayoutSwitcherRight";
import LayoutPreview from "./layout-preview/LayoutPreview";

function LayoutBrowser() {
    return (
        <div className="LayoutBrowser">
            <LayoutSwitcherLeft />
            <LayoutPreview />
            <LayoutSwitcherRight />
        </div>
    );
}

export default LayoutBrowser;