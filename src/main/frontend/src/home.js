import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css";

const Home = () => {
    const [text, setText] = useState("");
    const [chat, setChat] = useState([]);
    const [wait, setWait] = useState(0);
    const clickEvent = (e) => {
        chat.push(text);
        setText("");
        getChatGPT();
        setWait(1);
    }
    const changeText = e => {
        setText(e.target.value);
        
    }
    const reset = () => {
        setChat([]);
    }
    const getChatGPT = ()=>{
        let key = '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';
        let url = 'https://api.openai.com/v1/completions';
        let config = {
            headers : {
                Authorization : `Bearer ${key}`,
                'Content-Type' : 'application/json'
            }
        }
        let data = {
            model : "text-davinci-003",
            temperature : 0.5,
            prompt : text,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"]
        }
        axios.post(url,data,config).then(res=>{
            debugger;
            chat.push(res.data.choices[0]?.text);
            setWait(0);
        })


    }
    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            clickEvent();
        }
      }
    useEffect(() => { //mounted
    },[]);
    return (
        <div className="section">
            <h1 className="title algolia-lvl0">Use Chat Gpt For EveryOne</h1>
            <br/>
            <div className="subtitle is-4 algolia-lvl1">
                <input className="input is-inline mr-3" type="text" onKeyPress={handleKeyPress} onChange={changeText} value={text} placeholder="질문을 입력하세요"/>
                <button className="button is-primary mr-1" onClick={clickEvent} disabled={wait}>입력</button>
                <button className="button" onClick={reset}>초기화</button>
            </div>
            <div className ="table-container" style={{maxHeight: "900px", overflowY: "scroll"}}>
                <table className="table is-striped">
                    <tbody>
                        {chat.map((item,index)=>(
                            <tr key={index}>
                                <th className="">{index % 2 == 0 ? '나' : 'GPT'}</th>
                                <td className="">{item}</td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
                { wait === 1 && <p>잠시만 기다려 주세요.</p> }
            </div>
        </div>
    )
}


export default Home;