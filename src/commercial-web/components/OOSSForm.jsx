import { Detailed, OOSSCard } from "../../assets/assets";
import React, { useState } from "react";

export default function OOSSForm() {
    const [facility, setFacility] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isCataractChecked, setCataractChecked] = useState(false);
    const [isGlaucomaChecked, setGlaucomaChecked] = useState(false);
    const [isRetinaChecked, setRetinaChecked] = useState(false);
    const [isOculaChecked, setOculaChecked] = useState(false);
    const [isCorneaChecked, setCorneaChecked] = useState(false);
    const [isMember, setIsMember] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://form-server.herokuapp.com/OOSS", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    facility: facility,
                    firstName: firstName,
                    lastName: lastName,
                    position: position,
                    email: email,
                    phone: phone,
                    services: {
                        cataract: isCataractChecked,
                        glaucoma: isGlaucomaChecked,
                        retina: isRetinaChecked,
                        ocula: isOculaChecked,
                        cornea: isCorneaChecked
                      },
                    isMember: isMember
                }),
            });
            let data = await res.json();
            console.log(data);
            if (data && data.status === "success") {
                alert ("Hello, we received your message. We will reach you as soon as possible.");
                setFacility("");
                setFirstName("");
                setLastName("");
                setPhone("");
                setEmail("");
                setPosition("");
            } else {
                alert ("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.log(error);
        }
    }    

    return (
        <section id = "contact" className = "contact py">
            <div className = "section-head" style={{textAlign: 'center'}}>
                <div className="oossTitle">Free to ALL OOSS Members!</div>
                {/* <a href = "/registration" className = "btn btn-light-blue">Not an OOSS Member, yet?</a> */}
            </div>
            <div className = "container grid" style={{marginTop: '50px'}}>
                <div className = "contact-left">
                    <div className = "container grid">
                        <div className = "banner-two-left">
                            <img src = {OOSSCard} atl="OOSS"/>
                        </div>
                        <div className = "OOSS banner-two-right">
                            <h2 className="leftText">You're in the Right Place to Start Saving!</h2>
                        </div>
                    </div>
                    <div>
                        <h2 style={{color: '#1E2F70'}}>Let Us Know Who You Are</h2>
                        <p style={{fontSize: '20px'}}>Simply fill out the information in the Let's Get Started section. The fields with an <span style={{color: 'red'}}>*</span> indicates a required field.</p>
                        <h2 style={{color: '#1E2F70'}}>We Will Contact You to Discuss Your Savings Opportunities!</h2>
                        <p style={{fontSize: '20px'}}>After gathering some information from you we will provide a Market Basket to identify specific savings for your facility and/or 
                        physician's office.</p>
                        <img src={Detailed} alt="OOSS" />
                    </div>
                </div>
                <div className = "contact-right text-white text-center bg-blue">
                    <div className = "contact-head">
                        <h3 className = "lead">Let's Get Started</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className = "form-element">
                            <input onChange={ (e) => setFacility(e.target.value) } type = "text" className = "form-control" placeholder="Facility Name" value={facility} required/>
                            <span class="asterisk_input"></span>
                        </div>
                        <div className = "form-element">
                            <input onChange={ (e) => setFirstName(e.target.value) } type = "text" className = "form-control" placeholder="First Name" value={firstName} required/>
                            <span class="asterisk_input"></span>
                        </div>
                        <div className = "form-element">
                            <input onChange={ (e) => setLastName(e.target.value) } type = "text" className = "form-control" placeholder="Last Name" value={lastName} required/>
                            <span class="asterisk_input"></span>
                        </div>
                        <div className = "form-element">
                            <input onChange={ (e) => setPosition(e.target.value) } type = "text" className = "form-control" placeholder="Position" value={position} required/>
                            <span class="asterisk_input"></span>
                        </div>
                        <div className = "form-element">
                            <input onChange={ (e) => setEmail(e.target.value) } type = "email" className = "form-control" placeholder="Email" value={email} required/>
                            <span class="asterisk_input"></span>
                        </div>
                        <div className = "form-element">
                            <input onChange={ (e) => setPhone(e.target.value) } type = "tel" className = "form-control" placeholder="Phone: xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} required/>
                            <span class="asterisk_input"></span>
                        </div>
                        <div className = "form-element" style={{textAlign: 'left'}}>
                            <p>What services are offered at your facility?<span class="asterisk_input2"></span></p>
                            <input className = "form-control" type="checkbox" id="cataract" name="cataract" value="Cataract" onChange={(e) => setCataractChecked(e.target.checked)} 
                            checked={isCataractChecked} style={{width: '5%'}}/>
                            <label for="cataract"> Cataract</label><br />
                            <input className = "form-control"type="checkbox" id="glaucoma" name="glaucoma" value="Glaucoma" onChange={(e) => setGlaucomaChecked(e.target.checked)} 
                            checked={isGlaucomaChecked} style={{width: '5%'}}/>
                            <label for="glaucoma"> Glaucoma</label><br />
                            <input className = "form-control" type="checkbox" id="retina" name="retina" value="Retina" onChange={(e) => setRetinaChecked(e.target.checked)} 
                            checked={isRetinaChecked} style={{width: '5%'}}/>
                            <label for="retina"> Retina</label><br />
                            <input className = "form-control" type="checkbox" id="ocula" name="ocula" value="Ocula Plastics" onChange={(e) => setOculaChecked(e.target.checked)} 
                            checked={isOculaChecked} style={{width: '5%'}}/>
                            <label for="ocula"> Ocula Plastics</label><br />
                            <input className = "form-control" type="checkbox" id="cornea" name="cornea" value="Cornea Surgery" onChange={(e) => setCorneaChecked(e.target.checked)} 
                            checked={isCorneaChecked} style={{width: '5%'}}/>
                            <label for="cornea"> Cornea Surgery</label><br />
                        </div>
                        <div className = "form-element" style={{textAlign: 'left'}}>
                            <p>Are you a current OOSS member?<span class="asterisk_input2"></span></p>
                            <input className = "form-control" type="radio" id="yes" name="yes" value="Yes" style={{width: '5%'}}  checked={isMember} onChange={() => setIsMember(true)}/>
                            <label for="yes"> Yes</label><br />
                            <input className = "form-control"type="radio" id="no" name="yes" value="No" style={{width: '5%'}} checked={!isMember} onChange={() => setIsMember(false)}/>
                            <label for="yes"> No</label><br />
                        </div>
                        <button type = "submit" className = "btn btn-white btn-submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
