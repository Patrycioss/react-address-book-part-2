import React from 'react';
import ContactDetail from "./ContactDetail.jsx";

function ContactForm(props) {
    return (
        <ul className="contact-details">
            <ContactDetail key="name"/>
        </ul>
    );
}

export default ContactForm;