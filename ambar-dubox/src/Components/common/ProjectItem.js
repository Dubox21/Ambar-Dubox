// ProjectItem.js
import React from 'react';
import './ProjectItem.css';
import { IoLogoGithub, IoGlobeOutline } from "react-icons/io5";

function ProjectItem(props) {
    const {title, imageUrl, urlRepo, urlGit} = props;

    return (
        <div className='project-item'>
           <img
              src={imageUrl}
              className="d-block carousel-image"
              alt={title}
            />
            <div className="d-md-block">
              <h5>{title}</h5>
              <div className="text-center">
                <a href={urlGit} className="btn logo"><IoLogoGithub /></a>
                <a href={urlRepo} className="btn logo"><IoGlobeOutline /></a>
              </div>
            </div>
        </div>
    );
}

export default ProjectItem;
