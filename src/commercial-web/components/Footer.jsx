import { Logo } from "../../assets/assets"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFax, faSquarePhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer id = "footer" className = "footer text-center">
            <div className = "container">
                <div className = "footer-inner text-white py grid">
                    <div className = "footer-item">
                        <div className = "icon">
                            <img src = {Logo}  alt="logo"/>
                        </div>
                        <address style={{marginLeft: 12}}>
                            1047 Summit Grove Drive <br />
                            Building 200  Ste 105 <br />
                            Watkinsville, GA 30677 <br />
                        </address>
                    </div>

                    <div className = "footer-links">
                        <ul className = "flex">
                            <li><a href = "https://www.facebook.com/EyeProGPO" className = "text-white flex" target="_blank"> <i className = "fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} bounce style={{color: "#fff"}}/></i></a></li>
                            <li><a href = "https://twitter.com/EyeProGPO" className = "text-white flex" target="_blank"> <i className = "fab fa-twitter"></i><FontAwesomeIcon icon={faTwitter} bounce style={{color: "#fff"}}/></a></li>
                            <li><a href = "https://www.linkedin.com/company/eyeprogpo/mycompany/" className = "text-white flex" target="_blank"> <i className = "fab fa-linkedin"></i><FontAwesomeIcon icon={faLinkedin} bounce style={{color: "#fff",}}/></a></li>
                        </ul>
                    </div>

                    <div className = "footer-item">
                        <h3 className = "footer-head">Quick Links</h3>
                        <ul>
                            <li><a href = "#why-choose-us" className = "text-white">Why Choose Us</a></li>
                            <li><a href = "#for-vendors" className = "text-white">For Vendors</a></li>
                            <li><a href = "#our-services" className = "text-white">Our Services</a></li>
                            <li><a href = "#career" className = "text-white">Career</a></li>
                        </ul>
                    </div>

                    <div className = "footer-item">
                        <h3 className = "footer-head">Contact</h3>
                        <ul className = "appointment-info">
                            <li>
                                <i className = "fas fa-envelope"><FontAwesomeIcon icon={faEnvelope} style={{color: "#fff"}}/></i>
                                <a href="mailto:info@%65yepr%6Fgpo.c%6Fm"><span style={{color: 'white'}}>Email Us</span></a>
                            </li>
                            <li>
                                <i className = "fas fa-phone"><FontAwesomeIcon icon={faSquarePhone} style={{color: "#fff"}}/></i>
                                <span>833-4-EYEPRO</span><br />
                                <span>&nbsp;&nbsp;(833-439-3776)</span>
                            </li>
                            <li>
                                <i className = "fas fa-fax"><FontAwesomeIcon icon={faFax} style={{color: "#fff"}}/></i>
                                <span>706-381-3151 (Fax)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}