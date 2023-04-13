import React, {useState, useEffect} from 'react';

const About = (props) => {
    const [message, setMessage] = useState([]);
    console.log(props)
    return (
        <section className="section" id="about">
            <div className="has-text-centered mb-6 mt-1">
            <h3 className="title is-2">About Me</h3>
            <h4 className="subtitle is-5">{props.about.content.title}</h4>
            <div className="container" dangerouslySetInnerHTML={{__html : props.about.content.body}}>

            </div>
            </div>

            <div className="columns has-same-height is-gapless">
            <div className="column">
                <div className="card">
                <div className="card-content">
                    <h3 className="title is-4">Profile</h3>

                    <div className="content">
                    <table className="table-profile">
                        <tbody>
                            <tr>
                            <th colSpan="1"></th>
                            <th colSpan="2"></th>
                            </tr>
                            <tr>
                            <td>Address:</td>
                            <td>Guru's Lab</td>
                            </tr>
                            <tr>
                            <td>Phone:</td>
                            <td>0123-456789</td>
                            </tr>
                            <tr>
                            <td>Email:</td>
                            <td>minion@despicable.me</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="buttons has-addons is-centered">
                        <a href="#" className="button is-link">Github</a>
                        <a href="#" className="button is-link">LinkedIn</a>
                        <a href="#" className="button is-link">Twitter</a>
                        <a href="#" className="button is-link">CodeTrace</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://source.unsplash.com/random/1280x960" alt="Placeholder image"/>
                    </figure>
                </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <div className="card-content skills-content">
                    <h3 className="title is-4">Skills</h3>
                    <div className="content">

                    <article className="media">
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>JavaScript:</strong>
                            <br/>
                            <progress className="progress is-primary" value="90" max="100"></progress>
                            </p>
                        </div>
                        </div>
                    </article>

                    <article className="media">
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>Vue.js:</strong>
                            <br/>
                            <progress className="progress is-primary" value="90" max="100"></progress>
                            </p>
                        </div>
                        </div>
                    </article>

                    <article className="media">
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>Node.js:</strong>
                            <br/>
                            <progress className="progress is-primary" value="75" max="100"></progress>
                            </p>
                        </div>
                        </div>
                    </article>

                    <article className="media">
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>HTML5/CSS3</strong>
                            <br/>
                            <progress className="progress is-primary" value="95" max="100"></progress>
                            </p>
                        </div>
                        </div>
                    </article>

                    <article className="media">
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>Databases</strong>
                            <br/>
                            <progress className="progress is-primary" value="66" max="100"></progress>
                            </p>
                        </div>
                        </div>
                    </article>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}


export default About;