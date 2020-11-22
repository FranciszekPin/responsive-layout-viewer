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
                    <div className="c1" />
                    <div className="c2" />
                    <div className="c3" />
                    <div className="c4" />
                    <div className="c5" />
            </div>
        );
}

export default LayoutStructure;