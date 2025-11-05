import logo from '../assets/img/dc-logo.png';
export default function Header() {

    const menu = [
        {
            id: 1,
            link: '#',
            text: 'CHARACTERS',
            is_active: true
        },
        {
            id: 2,
            link: '#',
            text: 'COMICS',
            is_active: false
        },
        {
            id: 3,
            link: '#',
            text: 'MOVIES',
            is_active: false
        },
        {
            id: 4,
            link: '#',
            text: 'TV',
            is_active: false
        },
        {
            id: 5,
            link: '#',
            text: 'GAMES',
            is_active: false
        },
        {
            id: 6,
            link: '#',
            text: 'COLLECTIBLES',
            is_active: false
        },
        {
            id: 7,
            link: '#',
            text: 'VIDEOS',
            is_active: false
        },
        {
            id: 8,
            link: '#',
            text: 'FANS',
            is_active: false
        },
        {
            id: 9,
            link: '#',
            text: 'NEWS',
            is_active: false
        },
        {
            id: 10,
            link: '#',
            text: 'SHOP',
            is_active: false
        },
    ]


    return (

        <header>
            <nav className="navbar bg-white">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img id="logo" src={logo} alt="#" />
                    </a>
                    <ul className="nav justify-content-end">
                        {
                            menu.map(item => (
                                <li key={item.id}><a className={`nav-link ${item.is_active ? "current" : ""}`} href={item.link}>{item.text}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}