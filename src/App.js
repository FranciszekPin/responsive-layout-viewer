import './App.scss';
import './layoutBrowser/LayoutBrowser'
import LayoutBrowser from "./layoutBrowser/LayoutBrowser";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Responsive Layout Pattern Viewer
                </p>
            </header>
            <LayoutBrowser />
        </div>
    );
}

export default App;
