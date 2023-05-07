import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMapLocationDot, faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { Dot } from '../../assets/assets';

export default function Starts() {
    return (
        <section id = "services" className = "services py">
            <div className = "container">
                <div className = "section-head text-center">
                    <a href="/ooss-ascrs" target="_blank"><h2 className="oossOffer">Exclusive Offer for OOSS Members</h2></a>
                    <div className = "line-art flex">
                        <div></div>
                        <img src = {Dot} atl="dot" />
                        <div></div>
                    </div>
                </div>
                <div className = "services-inner text-center grid">
                    <article className = "service-item">
                        <div className = "icon">
                            <i className = "fas fa-calendar-alt fa-2x"><FontAwesomeIcon icon={faUsers} flip style={{color: "#fff",}} /></i>
                        </div>
                        <h2 style={{color: '#fff'}}>490+ Members</h2>
                    </article>

                    <article className = "service-item">
                        <div className = "icon">
                            <i className = "fas fa-calendar-alt fa-2x"><FontAwesomeIcon icon={faHospitalUser} flip style={{color: "#fff",}} /></i>
                        </div>
                        <h2 style={{color: '#fff'}}>1,100+ Physicians</h2>
                    </article>

                    <article className = "service-item">
                        <div className = "icon">
                            <i className = "fas fa-calendar-alt fa-2x"><FontAwesomeIcon icon={faMapLocationDot} flip style={{color: "#fff",}} /></i>
                        </div>
                        <h2 style={{color: '#fff'}}>32+ <br />States</h2>
                    </article>
                </div>
            </div>
        </section>
    );
}