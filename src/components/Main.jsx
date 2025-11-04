
import digital from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscription from '../assets/img/buy-comics-subscriptions.png';
import locator from '../assets/img/buy-comics-shop-locator.png';
import visa from '../assets/img/buy-dc-power-visa.svg';

export default function Main() {

    return (
        <main>
            <section className="content d-flex align-items-center">
                <div className="container">
                    <h2>Content goes here</h2>
                </div>
            </section>

            <section className="imgs d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img className="imgSection" src={digital} alt="#" />
                            <span>DIGITAL COMICS</span>
                        </div>
                        <div className="col">
                            <img className="imgSection col-md-2" src={merchandise} alt="#" />
                            <span>DC MERCHANDISE</span>
                        </div>
                        <div className="col">
                            <img className="imgSection col-md-2" src={subscription} alt="#" />
                            <span>SUBSCRIPTION</span>
                        </div>
                        <div className="col">
                            <img className="imgLocator col-md-2" src={locator} alt="#" />
                            <span>COMIC SHOP LOCATOR</span>
                        </div>
                        <div className="col">
                            <img className="imgSection col-md-2" src={visa} alt="#" />
                            <span>DC POWER VISA</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}