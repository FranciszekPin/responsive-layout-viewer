import './LayoutPreview.scss'

function LayoutPreview(props) {
    return (
        <div className="LayoutPreview" style={{width: props.width+"px"}}>
            {props.layoutToShow}
        </div>
    );
}

export default LayoutPreview;