import facebook from '../assets/img/footer-facebook.png';
import twitter from '../assets/img/footer-twitter.png';
import youtube from '../assets/img/footer-youtube.png';
import pinterest from '../assets/img/footer-pinterest.png';
import periscope from '../assets/img/footer-periscope.png';

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="footer-top py-4">
                    <div className="footer-nav d-flex">
                        <div className="col-4 gap-1">
                            <ul className="listaFooter">
                                <h6>DC COMICS</h6>
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Videos</li>
                                <li>News</li>
                            </ul>

                            <ul className="listaFooter">
                                <h6 className="shop">SHOP</h6>
                                <li>Shop DC</li>
                                <li>Shop DC Collectibles</li>
                            </ul>

                        </div>

                        <div className="col-4">
                            <ul className="listaFooter">
                                <h6>DC</h6>
                                <li>Terms Of Use</li>
                                <li>Privacy policy (New)</li>
                                <li>Ad Choice</li>
                                <li>Advertising</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>Talent Workshops</li>
                                <li>CPSC Certificates</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul className="listaFooter">
                                <h6>Sites</h6>
                                <li>DC</li>
                                <li>MAD Magazine</li>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom d-flex align-items-center ">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">

                        <div className="footer-left">
                            <button>SIGN-UP NOW!</button>
                        </div>

                        <div className="footer-right d-flex">
                            <h5>FOLLOW US</h5>
                            <img src={facebook} alt="#" />
                            <img src={twitter} alt="#" />
                            <img src={youtube} alt="#" />
                            <img src={pinterest} alt="#" />
                            <img src={periscope} alt="#" />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}