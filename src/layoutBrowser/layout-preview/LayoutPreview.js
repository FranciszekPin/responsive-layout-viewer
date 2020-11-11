import './LayoutPreview.css'

function LayoutPreview(props) {
    return (
        <div className="LayoutPreview" style={{width: props.width+"px"}}>
            {props.layoutToShow}
        </div>
    );
}

export default LayoutPreview;