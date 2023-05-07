import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Services() {
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState(''); // new state variable
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [facilityName, setFacilityName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");


    const handleOpen = (title) => {
        setModalTitle(title); // update modalTitle state
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://form-server.herokuapp.com/service", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    facilityName: facilityName,
                    phone: phone,
                    address: address,
                    message: message,
                    subject: modalTitle,
                }),
            });
            let data = await res.json();
            console.log(data);
            if (data && data.status === "success") {
                alert ("Hello, we received your message. We will reach you as soon as possible.");
                setFirstName("");
                setLastName("");
                setEmail("");
                setFacilityName("");
                setPhone("");
                setAddress("");
                setMessage("");
            } else {
                alert ("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.log(error);
        }
    }    

    return (
        <section id = "package-service" className = "package-service py text-center">
            <div className = "container">
                <div className = "package-service-head text-white">
                    <h2>Our Services</h2>
                    <p className = "text text-lg"><span className="eye">Eye</span><span className="pro">Pro</span><span className="gpo">GPO</span> offers a wide-range of services dedicated to maximizing overall savings, performance, and outcomes.</p>
                </div>
                <div className = "package-service-inner grid">
                    <div className = "package-service-item bg-white">
                        <div className = "icon flex">
                            <i className = "fas fa-calendar-alt fa-2x"><FontAwesomeIcon icon={faEye} beat /></i>
                        </div>
                        <h3>Group Purchasing</h3>
                        <p className = "text text-sm">Improve your buying power and dramatically reduce your supply costs with our ophthalmology focused contract portfolio.</p>
                        <a href = "/why-choose-us" className = "btn btn-blue">Learn More</a>
                    </div>

                    <div className = "package-service-item bg-white">
                        <div className = "icon flex">
                            <i className = "fas fa-calendar-alt fa-2x"><FontAwesomeIcon icon={faEye} beat /></i>
                        </div>
                        <h3>Supply Chain Optimization</h3>
                        <p className = "text text-sm">Optimize your operations to drive operational efficiency, lower supply costs and achieve supply goals with solutions that deliver 
                        savings and value.</p>
                        <a href = "#" className = "btn btn-blue" onClick={() => handleOpen("Supply Chain Optimization")}>Contact Us</a>
                    </div>
                    
                    <div className = "package-service-item bg-white">
                        <div className = "icon flex">
                            <i className = "fas fa-comments fa-2x"><FontAwesomeIcon icon={faEye} beat /></i>
                        </div>
                        <h3>Value Analysis</h3>
                        <p className = "text text-sm">Value analysis involves supply chain and clinicians working as partners to leverage data, reduce practice variation, and lower costs 
                        to support high-quality patient care.</p>
                        <a href = "#" className = "btn btn-blue" onClick={() => handleOpen("Value Analysis")}>Contact Us</a>
                    </div>
                
                    <div className = "package-service-item bg-white">
                        <div className = "icon flex">
                            <i className = "fas fa-comments fa-2x"><FontAwesomeIcon icon={faEye} beat /></i>
                        </div>
                        <h3>Item Master Management</h3>
                        <p className = "text text-sm">A healthy supply chain begins with a healthy item master, and many of an ASC's system’s supply chain processes begin with the item 
                        master.</p>
                        <a href = "#" className = "btn btn-blue" onClick={() => handleOpen("Item Master Management")}>Contact Us</a>
                    </div>

                    <div className = "package-service-item bg-white">
                        <div className = "icon flex">
                            <i className = "fas fa-comments fa-2x"><FontAwesomeIcon icon={faEye} beat /></i>
                        </div>
                        <h3>Operations Consulting</h3>
                        <p className = "text text-sm">Improve quality, cost effectiveness and patient care with top clinical analytics and proven strategies.</p>
                        <br />
                        <a href = "/contact-us" className = "btn btn-blue">Contact Us</a>
                    </div>

                    <div className = "package-service-item bg-white">
                        <div className = "icon flex">
                            <i className = "fas fa-comments fa-2x"><FontAwesomeIcon icon={faEye} beat /></i>
                        </div>
                        <h3>Advocacy</h3>
                        <p className = "text text-sm"><span style={{fontWeight: 'bold'}}>OOSS</span> is your voice on the frontline in Washington. Our experts educate and influence 
                        policymakers by advocating on behalf of your organization.</p>
                        <a href = "https://ooss.org/ooss/advocacy/" className = "btn btn-blue" target="_blank">Learn More</a>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <section id = "contact" className = "contact py bg-blue">
                        <div className = "container">
                            <div className = "contact-right text-white text-center bg-blue">
                                <div className = "contact-head">
                                    <h1 id="modalTitle">{modalTitle}</h1>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className = "form-element">
                                        <input onChange={ (e) => setFirstName(e.target.value) } type = "text" className = "form-control" placeholder="First Name" value={firstName} required/>
                                        <span className="asterisk_input"></span>
                                    </div>
                                    <div className = "form-element">
                                        <input onChange={ (e) => setLastName(e.target.value) } type = "text" className = "form-control" placeholder="Last Name" value={lastName} required/>
                                        <span className="asterisk_input"></span>
                                    </div>
                                    <div className = "form-element">
                                        <input onChange={ (e) => setEmail(e.target.value) } type = "email" className = "form-control" placeholder="Email" value={email} required/>
                                        <span className="asterisk_input"></span>
                                    </div>
                                    <div className = "form-element">
                                        <input onChange={ (e) => setFacilityName(e.target.value) } type = "text" className = "form-control" placeholder="Facility Name" value={facilityName} required/>
                                        <span className="asterisk_input"></span>
                                    </div>
                                    <div className = "form-element">
                                        <input onChange={ (e) => setPhone(e.target.value) } type = "tel" className = "form-control" placeholder="Phone: xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} required/>
                                        <span className="asterisk_input"></span>
                                    </div>
                                    <div className = "form-element">
                                        <input onChange={ (e) => setAddress(e.target.value) } type = "text" className = "form-control" placeholder="Address" value={address} required/>
                                        <span className="asterisk_input"></span>
                                    </div>
                                    <div className = "form-element">
                                        <textarea onChange={ (e) => setMessage(e.target.value) } rows = "5" placeholder="Message" className = "form-control" value={message} required></textarea>
                                        <span className="asterisk_input"></span>
                                    </div>
                                    <button type = "submit" className = "btn btn-white btn-submit" onClick={handleClose}>Close</button>
                                    <button type = "submit" className = "btn btn-white btn-submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </Box>
            </Modal>
        </section>
    );
}
