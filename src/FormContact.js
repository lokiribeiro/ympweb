import React from 'react';
import emailjs from 'emailjs-com';

export default function FormContact() {

    function sendEmail(e) {
        e.preventDefault();
        function myFunction() {
            document.getElementById("contact-form").reset();
        }

        emailjs.sendForm('service_7x1pgdp', 'template_contact_4ku8mij', e.target, 'user_pQhBRljhOSMXvTGbqGKyu')
        .then(
            function (response) {
                //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                alert("Email sent successfully!");
                myFunction();
            },
            function (error) {
                //console.log("FAILED", error);
                alert("FAILED!" + error);
            }
        );
    }

    return (
        <div className="contact-form-wrapper">
            <h2 className="contact-text">Contact Form</h2>

            <form className="contact-form" onSubmit={sendEmail} id="contact-form">
                <div className="form-group">
                    <input placeholder="Name" className="form-control" type="text" name="name" />
                </div>
                <div className="form-group">
                    <input placeholder="Email" className="form-control" type="email" name="email" />
                </div>
                <div className="form-group">
                    <input placeholder="Phone" className="form-control" type="number" name="phone" />
                </div>
                <div className="form-group">
                    <textarea placeholder="Message" className="form-control" name="message" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}