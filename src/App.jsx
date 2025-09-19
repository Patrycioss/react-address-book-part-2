import './App.css';
import Menu from "./components/menu/Menu.jsx";
import React from "react";
import ContactList from "./components/contact_list/ContactList.jsx";
import ContactForm from "./components/contact_form/ContactForm.jsx";

function App() {

    const [activeItem, setActiveItem] = React.useState("contacts");

    let contacts = [
        {},
        {},
        {},
        {},
    ]

    return (
        <section className="dashboard">
            <Menu setActiveItem={setActiveItem}/>
            <section className="activeItem">
                {activeItem === 'contacts' ? <ContactList contacts={contacts}/> : null}
                {activeItem === 'add' ? <ContactForm/> : null}
            </section>
        </section>
    );
}

export default App;
