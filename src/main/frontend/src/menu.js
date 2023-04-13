import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook,faHome,faFireBurner } from "@fortawesome/free-solid-svg-icons";

const Menu  = () => {
    let path = window.location.pathname;
    const menu = [
        {text : "Home" ,href : "/", "icon" : faHome},
        {text : "About" ,href : "/about", "icon" : faBook},
        {text : "CookNotes" ,href : "/cookNotes", "icon" : faFireBurner},
    ]
    return (
        <aside className="column is-2 section ">
            <p className="menu-label">General</p>
            <ul className="menu-list">
            {menu.map((item,index)=>(
                            <li key={index}>
                            <a className={path == item.href ? 'is-active' : '' } href={item.href}>
                            <span className="">
                                <span className="icon mr-3">
                                <FontAwesomeIcon icon={item.icon} />
                                </span>
                                <span>{item.text}</span>
                            </span>
                            </a>
                        </li>
                            
                        ))}
            </ul>
        </aside>
    )
}
export default Menu;