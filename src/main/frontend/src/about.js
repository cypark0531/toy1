import React, {useState, useEffect} from 'react';

const About = () => {
    const [message, setMessage] = useState([]);
    useEffect(() => {
    fetch(`/api/about?name=어바웃`)
    .then(response => response.json())
    .then(message => {
    setMessage(message);
    });
    },[])

    return (
        <div>
            <h1>어바웃</h1>
            <p>이곳은 어바웃이에요,</p>
            {message.map((item,index) => (
                <div>{item}</div>
            ))}
            <a href="/home"></a>
        </div>
    )
}


export default About;