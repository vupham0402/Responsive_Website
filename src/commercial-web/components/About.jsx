import { OOSS } from "../../assets/assets";

export default function About() {
    return (
        <section id = "about" className = "about py">
            <div className = "about-inner">
                <div className = "container grid">
                    <div className = "about-left text-center">
                        <div className = "section-head">
                            <h2>About Us</h2>
                        </div>
                        <p className = "text text-lg"><span className="eye">Eye</span><span className="pro">Pro</span><span className="gpo">GPO</span> is an ophthalmology-focused group purchasing organization made up of members who are either or both ophthalmology 
                        practices and/or ophthalmic ASC’s, joining together to realize cost savings and workflow efficiencies by utilizing aggregated membership purchasing volume 
                        to negotiate discounts with manufacturers, distributors, and vendors to lower the cost of healthcare.  </p>
                    </div>
                    <div className = "about-right flex">
                        <div className = "img">
                            <h2>Proud Partner</h2>
                            <a href="https://ooss.org/" target="_blank"><img src = {OOSS} atl="ooss" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}