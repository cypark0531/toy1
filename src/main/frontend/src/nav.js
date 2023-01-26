import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook,faHome,faFile } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    let path = window.location.pathname;

    return (
        <>
        <nav className="bd-navbar navbar">
            <div className="navbar-brand"></div>
                <a class="navbar-item bd-navbar-item bd-navbar-item-base bd-navbar-item-documentation" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
                </a>
            <div className="navbar-menu">
                <div class="navbar-start ml-0">
                    <a class="navbar-item" href="https://versions.bulma.io/0.7.0/documentation">
                        <span class="icon has-text-primary">
                            <FontAwesomeIcon icon={faFile} />
                        </span>
                        <span>Documentation</span>
                    </a>
                </div>
                <div class="navbar-end ml">
                    end
                </div>

            </div>
        </nav>
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
            </ul>
        </aside>
        </>
    )
}


export default About;