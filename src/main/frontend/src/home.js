import React, {useState, useEffect} from 'react';
import data from './json/data.json';
import axios from 'axios';
const Home = (props) => {

    return (
        <section className="hero is-link is-fullheight is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <p>안녕하세요, 저는</p>
                    <h1 className="title is-1">
                        {props.home.name}
                    </h1>
                    <p>입니다.</p>
                    <p></p>
                    <p>저는</p>
                    <h2 className="subtitle is-3">
                        {props.home.job}
                    </h2>
                    <p>입니다.</p>
                </div>
            </div>
        </section>

    );

}
export default Home;