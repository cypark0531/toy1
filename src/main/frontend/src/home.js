import React, {useState, useEffect} from 'react';
// import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css";

const Home = () => {
    const [message, setMessage] = useState("");
    useEffect(() => {
    fetch('/api/home')
    .then(response => response.text())
    .then(message => {
    setMessage(message);
    });
    },[])

    return (
        <div className="section">
            <h1>홈</h1>
            <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠</p>
            {message}
            <a href="/about">About</a>
        </div>
    )
}


export default Home;