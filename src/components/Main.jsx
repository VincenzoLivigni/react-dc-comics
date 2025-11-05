

import jumbo from '../assets/img/jumbotron.jpg';
import Comics from './Comics';
import Shop from './Shop';




export default function Main() {
    return (
        <main>
            <Comics />
            <img className="jumbo" src={jumbo} alt="#" />
            <Shop />
        </main>
    )
}