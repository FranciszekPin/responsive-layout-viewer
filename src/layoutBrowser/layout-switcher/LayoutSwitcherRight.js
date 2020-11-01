import './LayoutSwitcher.css'

function LayoutSwitcherRight(props) {
    const rightArrow = '>';
    return (
        <div className="LayoutSwitcher" onClick={props.onClick}>
            <p>
                {rightArrow}
            </p>
        </div>
    );
}

export default LayoutSwitcherRight;