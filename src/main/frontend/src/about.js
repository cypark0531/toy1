import React, {useState, useEffect} from 'react';

const About = () => {
    const [message, setMessage] = useState([]);
    useEffect(() => {
    fetch(`/about?name=어바웃`)
    .then(response => response.json())
    .then(message => {
    setMessage(message);
    });
    },[]) 

    return (
        <div className="section">
            <h1>어바웃</h1>
            <p>이곳은 어바웃이에요,</p>
            {message.map((item,index) => (
                <div key={index}>{item}</div>
            ))}
            <a href="/"></a>
        </div>
    )
}


export default About;