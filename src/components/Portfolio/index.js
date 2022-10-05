import React, { useState } from 'react';
import Modal from '../Modal';


const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projects] = useState([
        {
            title: "ReadMe Generator",
            description: "Command line prompt based ReadMe builder put together with Node.js",
            repo: "https://github.com/griffinlebeau/readme-builder",
            deployed: "",
        },
        {
            title: "Code Quiz",
            description: "10 Question JavaScript quiz made with JavaScript!",
            repo: "https://github.com/griffinlebeau/code-quiz",
            deployed: "https://griffinlebeau.github.io/code-quiz/",
        },
        {
            title: "Weather Dashboard",
            description: "Minimal weather and forecast interface",
            repo: "https://github.com/griffinlebeau/weather-dashboard",
            deployed: "https://griffinlebeau.github.io/weather-dashboard/",
        },
        {
            title: "Workday Scheduler",
            description: "Schedule events or tasks based on a 9-5 schedule with browser persistence!",
            repo: "https://github.com/griffinlebeau/work-day-scheduler",
            deployed: "https://griffinlebeau.github.io/work-day-scheduler/",
        },
        {
            title: "Team Profile Builder",
            description: "Organize team members with an easy-to-use command line application that produces an HTML webpage",
            repo: "https://github.com/griffinlebeau/team-profile-generator",
            deployed: "",
        },
        {
            title: "Password Generator",
            description: "Simple customizable password generator",
            repo: "https://github.com/griffinlebeau/password-generator",
            deployed: "https://griffinlebeau.github.io/password-generator/",
        }
    ]);
    const [currentProject, setCurrentProject] = useState();
    const toggleModal = (project, i) => {
        setCurrentProject({ ...project, index: i });
        setIsModalOpen(!isModalOpen);
      };

    return (
        <div className='main'>
            {isModalOpen && (
            <Modal onClose={toggleModal} currentProject={currentProject} />
                )}
            <div>
                {projects.map((project, i) => (
                    <div>
                        <img src={require(`../../assets/projects/${i}.jpg`).default}
                        alt={project.title}
                        key={project.title}
                        onClick={() => toggleModal(project, i)} />
                        <h3>{project.title}</h3>
                    </div>
                    ))}
            </div>
           
        </div>
    )
}
export default Portfolio;