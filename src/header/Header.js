import './Header.scss'

function Header(props) {
    return (
        <header>
            <div className="Header">
                <div className="HeaderText">
                    <p>Responsive Layout Pattern Viewer</p>
                    <p className="title">{props.actualTitleToShow}</p>
                </div>
            </div>
        </header>
    )
}

export default Header;