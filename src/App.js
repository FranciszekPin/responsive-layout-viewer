import './App.css';
import './layout-switcher/LayoutSwitcherLeft.js'
import './layout-switcher/LayoutSwitcherRight.js'
import LayoutSwitcherLeft from "./layout-switcher/LayoutSwitcherLeft";
import LayoutSwitcherRight from "./layout-switcher/LayoutSwitcherRight";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Responsive Layout Pattern Viewer
                </p>
            </header>
            <LayoutSwitcherLeft />
            <LayoutSwitcherRight />
        </div>
    );
}

export default App;
