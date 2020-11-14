import './LayoutStyles.scss';

function LayoutStructure(props) {
        let actualClassName;
        if (props.viewerWidth >= 0 && props.viewerWidth <= 500)
                actualClassName = "container small";
        else if (props.viewerWidth <= 800)
                actualClassName = "container medium";
        else
                actualClassName = "container large";
        return (
            <div className={actualClassName} >
                    <div className="c1"></div>
                    <div className="c2"></div>
                    <div className="c3"></div>
                    <div className="c4"></div>
                    <div className="c5"></div>
            </div>
        );
}

export default LayoutStructure;