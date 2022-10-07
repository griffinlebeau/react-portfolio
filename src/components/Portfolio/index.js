import React from 'react';
import Zero from '../../assets/projects/0.jpg';
import One from '../../assets/projects/1.jpg';
import Two from '../../assets/projects/2.jpg';
import Three from '../../assets/projects/3.jpg';
import Four from '../../assets/projects/4.jpg';
import Five from '../../assets/projects/5.jpg';

const Portfolio = () => {
    const projects = [
        {
            title: "ReadMe Generator",
            description: "Command line prompt based ReadMe builder put together with Node.js",
            repo: "https://github.com/griffinlebeau/readme-builder",
            deployed: "",
            tech: "Node.js | JavaScript"
        },
        {
            title: "Code Quiz",
            description: "10 Question JavaScript quiz made with JavaScript!",
            repo: "https://github.com/griffinlebeau/code-quiz",
            deployed: "https://griffinlebeau.github.io/code-quiz/",
            tech: "HTML | CSS | JavaScript"
        },
        {
            title: "Weather Dashboard",
            description: "Minimal weather and forecast interface",
            repo: "https://github.com/griffinlebeau/weather-dashboard",
            deployed: "https://griffinlebeau.github.io/weather-dashboard/",
            tech: "APIs | HTML | CSS | JavaScript"
        },
        {
            title: "Workday Scheduler",
            description: "Schedule events or tasks based on a 9-5 schedule with browser persistence!",
            repo: "https://github.com/griffinlebeau/work-day-scheduler",
            deployed: "https://griffinlebeau.github.io/work-day-scheduler/",
            tech: "HTML | CSS | JavaScript"
        },
        {
            title: "Team Profile Builder",
            description: "Organize team members with an easy-to-use command line application that produces an HTML webpage",
            repo: "https://github.com/griffinlebeau/team-profile-generator",
            deployed: "",
            tech: "Node.js | JavaScript"
        },
        {
            title: "Password Generator",
            description: "Simple customizable password generator",
            repo: "https://github.com/griffinlebeau/password-generator",
            deployed: "https://griffinlebeau.github.io/password-generator/",
            tech: "HTML | CSS | JavaScript"
        }
    ];
    return (
        <div className='main'>
            <div style={{ display: 'flex', backgroundColor: '#D6F9DD', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around' }}>
                    <div style={{ width: '25%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                        <img style={{ width: '90%', margin: '10px', borderRadius: '10px' }} src={Zero}
                        alt={projects[0].title}
                        key={projects[0].title} />
                        <h3>{projects[0].title}</h3>
                        <a href={projects[0].repo}>Repository</a>
                        <h4>{projects[0].tech}</h4>
                    </div>
                    <div style={{ width: '25%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                        <img style={{ width: '90%', margin: '10px', borderRadius: '10px' }} src={One}
                        alt={projects[1].title}
                        key={projects[1].title} />
                        <h3>{projects[1].title}</h3>
                        <div>
                        <a href={projects[1].repo}>Repository</a> | <a href={projects[1].deployed}>Deployed</a>
                        </div>
                        <h4>{projects[1].tech}</h4>
                    </div>
                    <div style={{ width: '25%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                        <img style={{ width: '90%', margin: '10px', borderRadius: '10px' }} src={Two}
                        alt={projects[2].title}
                        key={projects[2].title} />
                        <h3>{projects[2].title}</h3>
                        <div>
                        <a href={projects[2].repo}>Repository</a> | <a href={projects[2].deployed}>Deployed</a>
                        </div>
                        <h4>{projects[2].tech}</h4>
                    </div>
                    <div style={{ width: '25%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                        <img style={{ width: '90%', margin: '10px', borderRadius: '10px' }} src={Three}
                        alt={projects[3].title}
                        key={projects[3].title} />
                        <h3>{projects[3].title}</h3>
                        <div>
                        <a href={projects[3].repo}>Repository</a> | <a href={projects[3].deployed}>Deployed</a>
                        </div>
                        <h4>{projects[3].tech}</h4>
                    </div>
                    <div style={{ width: '25%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                        <img style={{ width: '90%', margin: '10px', borderRadius: '10px' }} src={Four}
                        alt={projects[4].title}
                        key={projects[4].title} />
                        <h3>{projects[4].title}</h3>
                        <a href={projects[4].repo}>Repository</a>
                        <h4>{projects[4].tech}</h4>
                    </div>
                    <div style={{ width: '25%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', margin: '10px', backgroundColor: '#EFBC9B', borderRadius: '15px' }}>
                        <img style={{ width: '90%', margin: '10px', borderRadius: '10px' }} src={Five}
                        alt={projects[5].title}
                        key={projects[5].title} />
                        <h3>{projects[5].title}</h3>
                        <div>
                        <a href={projects[5].repo}>Repository</a> | <a href={projects[5].deployed}>Deployed</a>
                        </div>
                        <h4>{projects[5].tech}</h4>
                    </div>
            </div>
           
        </div>
    )
}
export default Portfolio;