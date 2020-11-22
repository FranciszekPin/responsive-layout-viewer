import './Header.scss'

function Header(props) {
    return (
        <header>
            <div className="Header">
                <p>Responsive Layout Pattern Viewer</p>
                <p className="title">{props.actualTitleToShow}</p>
            </div>
        </header>
    )
}

export default Header;