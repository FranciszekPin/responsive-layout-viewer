import './LayoutPreview.css'

function LayoutPreview(props) {
    return (
        <div className="LayoutPreview">
            {props.layoutToShow}
        </div>
    );
}

export default LayoutPreview;