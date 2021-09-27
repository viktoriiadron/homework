import { Link } from 'react-router-dom'

function NavBar() {
    return (<nav>
        <Link to='/about'> About </Link>
        <Link to='/playlist'> Playlist </Link>
    </nav> );
}

export default NavBar;