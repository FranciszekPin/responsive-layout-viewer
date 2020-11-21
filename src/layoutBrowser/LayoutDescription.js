import './LayoutDescription.scss';
import React from "react";

function LayoutDescription(props) {
    return (
        <div className="LayoutDescription">
            {props.descriptionText}
        </div>
    )
}

export default LayoutDescription;