import './LayoutPreview.css'

function LayoutPreview(props) {
    return (
        <div className="LayoutPreview">
            {props.layoutNumber}
        </div>
    )
}

export default LayoutPreview;