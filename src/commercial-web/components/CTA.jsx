import { useState } from "react";
import { CLoseX, CTA } from "../../assets/assets";
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

export default function Action() {
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
            let res = await fetch("http://localhost:4001/estimate", {
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
        <section id = "banner-two" className = "banner-two text-center">
            <div className = "container grid">
                <div className = "banner-two-left">
                    <img src = {CTA} atl="CTA"/>
                </div>
                <div className = "banner-two-right">
                    <h1 style={{color: '#fff', fontWeight: 800}}>Ready to find out more?</h1>
                    <p className = "lead text-white">Let us show you how your ASC or physician's office can decrease your costs and increase your bottom line.</p>
                    <div className = "btn-group">
                        <a href = "#" className = "btn btn-white" onClick={() => handleOpen("Big Savings Ahead!")}>Get Free Evalution</a>
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
                                        <input onChange={ (e) => setPhone(e.target.value) } type = "tel" className = "form-control" placeholder="Phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={phone} required/>
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