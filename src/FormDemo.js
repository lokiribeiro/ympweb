import React from 'react';
import emailjs from 'emailjs-com';

export default function FormDemo() {

    function sendEmail(e) {
        e.preventDefault();
        function myFunction() {
            document.getElementById("demo-form").reset();
        }

        emailjs.sendForm('service_7x1pgdp', 'template_demo_90aax3a', e.target, 'user_pQhBRljhOSMXvTGbqGKyu')
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
        <div className="demo-form-wrapper">
            <h2 className="demo-text">Get A Demo</h2>

            <form className="contact-form" onSubmit={sendEmail} id="demo-form">
                <div className="form-group">
                    <input placeholder="Name" className="form-control" type="text" name="name" />
                </div>
                <div className="form-group">
                    <input placeholder="Yacht" className="form-control" type="text" name="yacht" />
                </div>
                <div className="form-group">
                    <input placeholder="Email" className="form-control" type="email" name="email" />
                </div>
                <div className="form-group">
                    <input placeholder="Phone" className="form-control" type="number" name="phone" />
                </div>
                <div className="form-group">
                    <input placeholder="Location" className="form-control" type="text" name="location" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}