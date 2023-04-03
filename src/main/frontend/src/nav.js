import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook,faHome,faFireBurner } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    let path = window.location.pathname;

    return (
        <>
        <nav className="bd-navbar navbar pt-2" role="navigation" aria-label="main navigation">
            <div className="navbar-brand"></div>
                <a className="navbar-item bd-navbar-item bd-navbar-item-base bd-navbar-item-documentation" href="https://bulma.io">
                </a>
            <div className="navbar-menu">
                <div className="navbar-start ml-0">
                    <a className="navbar-item" href="/">
                        <span className="icon has-text-link">
                            <FontAwesomeIcon icon={faHome} />
                        </span>
                        <span className="ml-2" >Home</span>
                    </a>
                    <a className="navbar-item" href="/about">
                        <span className="icon has-text-primary">
                            <FontAwesomeIcon icon={faBook} />
                        </span>
                        <span className="ml-2">About</span>
                    </a>
                    <a className="navbar-item" href="/cookNotes">
                        <span className="icon has-text-danger">
                            <FontAwesomeIcon icon={faFireBurner} />
                        </span>
                        <span className="ml-2" >CookNotes</span>
                    </a>
                </div>
                <div className="navbar-end ml">
                    end
                </div>

            </div>
        </nav>
        </>
    )
}


export default Nav;