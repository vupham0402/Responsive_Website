import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export default function Testimonials() {
    return (
        <section id = "banner-one" className = "banner-one text-center">
            <div className = "container text-white">
                <blockquote className = "lead"><FontAwesomeIcon icon={faQuoteLeft} /> I have been a member of EyeProGPO for four years and my ASC has saved tens of thousands of 
                dollars each year. <FontAwesomeIcon icon={faQuoteRight} /></blockquote>
                <small className = "text text-sm" style={{color: '#fff'}}>Brian Wnorowski, MD</small><br />
                <small className = "text text-sm" style={{color: '#fff'}}>Owner - Ocean Regional Eye Surgery Center</small>
            </div>
        </section>
    );
}