import jumbo from '../assets/img/jumbotron.jpg';
import Comics from './Comics';
import Shop from './Shop';

export default function Main({ comics }) {
    return (
        <main>
            <span className='etichetta'>CURRENT SERIES</span>
            <Comics comics={comics} />
            <img className="jumbo" src={jumbo} alt="#" />
            <Shop />
        </main>
    )
}