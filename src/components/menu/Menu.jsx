import React from 'react';
import MenuItem from "./MenuItem.jsx";

function Menu(props) {
    const {setActiveItem} = props;
    
    return (
        <div className="menu">
            <h1>Menu</h1>
            <MenuItem name="Contacts" onClick={()=>setActiveItem("contacts")}/>
            <MenuItem name="Add Contact" onClick={()=>setActiveItem("add")}/>
        </div>
    );
}

export default Menu;