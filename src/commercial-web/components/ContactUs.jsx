import React, { useState } from "react";

export default function ContactUs() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:4001/contact-us", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    message: message,
                }),
            });
            let data = await res.json();
            console.log(data);
            if (data && data.status === "success") {
                alert ("Hello, we received your message. We will reach you as soon as possible.");
                setFirstName("");
                setLastName("");
                setEmail("");
                setMessage("");
            } else {
                alert ("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.log(error);
        }
    }    

    return (
        <section id = "contact" className = "contact py" style={{backgroundColor: 'var(--light-gray)'}}>
            <div className = "container grid">
                <div className = "contact-left">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.32757153959!2d-83.41636252363845!3d33.88121652674057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f673ca89003d3d%3A0x74ee5a051a3b6fac!2sEyeProGPO%20LLC!5e0!3m2!1sen!2sus!4v1682616467398!5m2!1sen!2sus" 
                    width={600} height={450} style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className = "contact-right text-white text-center bg-blue">
                    <div className = "contact-head">
                        <h3 className = "lead">Contact Us</h3>
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
                            <textarea onChange={ (e) => setMessage(e.target.value) } rows = "5" placeholder="Message" className = "form-control" value={message} required></textarea>
                            <span className="asterisk_input"></span>
                        </div>
                        <button type = "submit" className = "btn btn-white btn-submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

