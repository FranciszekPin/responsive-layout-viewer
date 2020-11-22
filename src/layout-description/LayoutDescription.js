import './LayoutDescription.scss';
import React from "react";

class LayoutDescription extends React.Component {
    render() {
        const descriptionText = [
            "The mostly fluid pattern consists primarily of a fluid grid. On large or medium screens, it usually remains the same size, simply adjusting the margins on wider screens. On smaller screens, the fluid grid causes the main content to reflow, while columns are stacked vertically. One major advantage of this pattern is that it usually only requires one breakpoint between small screens and large screens.",
            "For full-width multi-column layouts, column drop simply stacks the columns vertically as the window width becomes too narrow for the content. Eventually this results in all of the columns being stacked vertically. Choosing breakpoints for this layout pattern is dependent on the content and changes for each design.",
            //"The layout shifter pattern is the most responsive pattern, with multiple breakpoints across several screen widths. Key to this layout is the way content moves about, instead of reflowing and dropping below other columns. Due to the significant differences between each major breakpoint, it is more complex to maintain and likely involves changes within elements, not just overall content layout.",
            "Tiny tweaks simply makes small changes to the layout, such as adjusting font size, resizing images, or moving content around in very minor ways. It works well on single column layouts such as one page linear websites and text-heavy articles."
        ];
        const actualDescription = descriptionText[this.props.layoutNumber];
        return (
        <div className="LayoutDescription">
            {actualDescription}
        </div>
    )
    }
}

export default LayoutDescription;