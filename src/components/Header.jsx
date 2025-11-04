import logo from '../assets/img/dc-logo.png';
export default function Header() {

    return (

        <header>

            <nav className="navbar bg-white">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img id="logo" src={logo} alt="#" />
                    </a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">CHARACTERS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">COMICS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MOVIES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">GAMES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">COLLECTIBLES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">VIDEOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FANS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">NEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SHOP</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}
