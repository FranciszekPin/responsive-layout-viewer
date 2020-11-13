import './ColumnDrop.css';
import './LayoutStyles.css';
import {Component} from "react";

class ColumnDrop extends Component {
    render() {
        return (
            <div className="ColumnDrop">
                {this.props.layoutStructure}
            </div>
        );
    }
}

export default ColumnDrop;