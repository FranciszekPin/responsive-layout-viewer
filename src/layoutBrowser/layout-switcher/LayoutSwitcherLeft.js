import './LayoutSwitcher.css'

function LayoutSwitcherLeft(props) {
    const leftArrow = '<';
    return (
        <div className="LayoutSwitcher" onClick={props.onClick}>
            <p>
                {leftArrow}
            </p>
        </div>
    );
}

export default LayoutSwitcherLeft;