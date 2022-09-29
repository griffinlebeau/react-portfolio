import React from 'react';
const Modal = ({ onClose, currentProject }) => {
    const { title, description, repo, deployed, index } = currentProject
    return (
        <div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <img
                    src={require(`../../assets/projects/${index}.jpg`).default}
                    alt="current category"
                />
            </div>
            <div>
                <p>{description}</p>
            </div>
            <a href={repo}>Github Repository</a>
            {deployed && (
                <a href={deployed}>Deployed App</a>
            )}
            <button type="button" onClick={onClose}>Close this modal</button>
        </div>
    )
}
export default Modal;