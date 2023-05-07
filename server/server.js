const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/contact-us", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'Your_Email',
          pass: 'Your_App_Password',
        },
      });
    
    const mailOptions = {
        from: req.body.email,
        to: "kpham@eyeprogpo.com",
        subject: "Contact Us Form",
        text: `
            First name: ${req.body.firstName}
            Last name: ${req.body.lastName}
            Email: ${req.body.email}
            Message: ${req.body.message}
        `,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ status: "error" });
        } else {
            console.log ("Email sent");
            res.json({ status: "success" });
        }
    });
});

app.post("/service", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vupham0402@gmail.com',
          pass: 'iorzvmuqqmucjrcw',
        },
      });
    
    const mailOptions = {
        from: req.body.email,
        to: "kpham@eyeprogpo.com",
        subject: req.body.subject,
        text: `
            First name: ${req.body.firstName}
            Last name: ${req.body.lastName}
            Email: ${req.body.email}
            Faciity name: ${req.body.facilityName}
            Phone: ${req.body.phone}
            Address: ${req.body.address}
            Message: ${req.body.message}
        `,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ status: "error" });
        } else {
            console.log ("Email sent");
            res.json({ status: "success" });
        }
    });
});

app.post("/estimate", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vupham0402@gmail.com',
          pass: 'iorzvmuqqmucjrcw',
        },
      });
    
    const mailOptions = {
        from: req.body.email,
        to: "kpham@eyeprogpo.com",
        subject: req.body.subject,
        text: `
            First name: ${req.body.firstName}
            Last name: ${req.body.lastName}
            Email: ${req.body.email}
            Faciity name: ${req.body.facilityName}
            Phone: ${req.body.phone}
            Address: ${req.body.address}
            Message: ${req.body.message}
        `,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ status: "error" });
        } else {
            console.log ("Email sent");
            res.json({ status: "success" });
        }
    });
});

app.post("/ooss", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vupham0402@gmail.com',
          pass: 'iorzvmuqqmucjrcw',
        },
      });
    
    const mailOptions = {
        from: req.body.email,
        to: "kpham@eyeprogpo.com",
        subject: "OOSS Members",
        text: `
            Faciity name: ${req.body.facility}
            First name: ${req.body.firstName}
            Last name: ${req.body.lastName}
            Position: ${req.body.position}
            Email: ${req.body.email}
            Phone: ${req.body.phone}
            Service: 
                Cataract: ${req.body.services.cataract ? 'Yes' : 'No'}
                Glaucoma: ${req.body.services.glaucoma ? 'Yes' : 'No'}
                Retina: ${req.body.services.retina ? 'Yes' : 'No'}
                Ocula Plastics: ${req.body.services.ocula ? 'Yes' : 'No'}
                Cornea Surgery: ${req.body.services.cornea ? 'Yes' : 'No'}
            Member: ${req.body.isMember ? 'Yes' : 'No'}
        `,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ status: "error" });
        } else {
            console.log ("Email sent");
            res.json({ status: "success" });
        }
    });
});

app.listen(PORT, (res, err) => {
    if (err) {
        console.log("Server failed.");
    } else {
        console.log(`Listening at port ${PORT}`);
    }
})

