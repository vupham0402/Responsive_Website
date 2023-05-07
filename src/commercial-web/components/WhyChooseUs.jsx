import { Contract, Help, Improvement, Partner } from "../../assets/assets";

export default function WhyChooseUs() {
    return (
        <section className = "posts py" style={{backgroundColor: 'var(--light-gray)'}}>
            <div className = "container">
                <div className = "section-head">
                    <h1 style={{textAlign: 'center', fontSize: '4rem'}}>Why Choose Us</h1>
                </div>
                <div className = "posts-inner2 grid">
                    <article className = "post-item bg-white">
                        <div className = "img">
                            <img src = {Partner} />
                        </div>
                        <div className = "content">
                            <h2>Partner Relationships with Suppliers</h2>
                            <p className = "text text-sm">We have partner-based relationships with ophthalmology healthcare suppliers and work to get our GPO members the lowest price
                            but also focus on the total value of the contract. Properly managing supplier contracts requires an extensive time investment, and when you work with 
                            <span className="eye"> Eye</span><span className="pro">Pro</span><span className="gpo">GPO</span>, your organization no longer has to deal with such 
                            a hassle. Our team reviews and audits price files and ensures that the terms of our group contracts are being followed.</p>
                        </div>
                    </article>

                    <article className = "post-item bg-white">
                        <div className = "img">
                            <img src = {Contract} />
                        </div>
                        <div className = "content">
                            <h2>Better Pricing and Contract Terms</h2>
                            <p className = "text text-sm">By sourcing agreements with the right healthcare suppliers, <span className="eye">Eye</span><span className="pro">Pro</span>
                            <span className="gpo">GPO</span> can provide you with better pricing and contract terms than your ASC or physician office could get on its own. 
                            Suppliers like to work with GPOs because it reduces the costs associated with acquiring new customers, that’s why they are able to offer their best prices 
                            to GPO members.</p>
                        </div>
                    </article>

                    <article className = "post-item bg-white">
                        <div className = "img">
                            <img src = {Improvement} />
                        </div>
                        <div className = "content">
                            <h2>Continuous Improvement</h2>
                            <p className = "text text-sm">As our group of members continues to increase, so does our collective buying power. This means that we are constantly monitoring 
                            changing buying patterns in the market and looking for new ways to enhance agreements and supplier performance. We continuously negotiate our group 
                            contracts with suppliers to gain even deeper discounts and improved terms and conditions for our GPO members.</p>
                        </div>
                    </article>

                    <article className = "post-item bg-white">
                        <div className = "img">
                            <img src = {Help} />
                        </div>
                        <div className = "content">
                            <h2>Other ways <span className="eye">Eye</span><span className="pro">Pro</span><span className="gpo">GPO</span> Can Help</h2>
                            <p className = "text text-sm">In addition to helping our members immediately experience significant cost savings on ophthalmic supplies they use every day, we
                             work with them to:</p>
                            <ul className="list">
                                <li>Standardize and streamline purchasing.</li>
                                <li>Identify and implement performance solutions designed to improve clinical, operational, and financial health.</li>
                                <li>Establish best practices and enable peer networking.</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}