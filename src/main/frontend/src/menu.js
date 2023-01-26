import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook,faHome,faFireBurner } from "@fortawesome/free-solid-svg-icons";

const Menu  = () => {
    let path = window.location.pathname;
    return (
        <aside className="column is-2 section ">
            <p className="menu-label">General</p>
            <ul className="menu-list">
                <li>
                    <a className={path == '/' ? 'is-active' : ''} href="/">
                    <span className="icon-text">
                        <span className="icon mr-3">
                        <FontAwesomeIcon icon={faHome} />
                        </span>
                        <span>HOME</span>
                    </span>
                    </a>
                </li>
                <li>
                    <a className={path =='/about' ? 'is-active' : ''} href="/about">
                    <span className="icon-text">
                        <span className="icon mr-3">
                        <FontAwesomeIcon icon={faBook} />
                        </span>
                        <span>About</span>
                    </span>
                    </a>
                </li>
                <li>
                    <a className={path =='/cookNotes' ? 'is-active' : ''} href="/cookNotes">
                    <span className="icon-text">
                        <span className="icon mr-3">
                        <FontAwesomeIcon icon={faFireBurner} />
                        </span>
                        <span>CookNotes</span>
                    </span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}
export default Menu;