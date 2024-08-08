// ProjectItem.js
import React from 'react';
import './ProjectItem.css';
import Tooltip from './Tooltip';
import { IoLogoGithub, IoGlobeOutline } from "react-icons/io5";

function ProjectItem(props) {
  const { title, imageUrl, urlRepo, urlGit, techs } = props;

  return (
    <div className='project-item'>
      <img
        src={imageUrl}
        className="d-block carousel-image"
        alt={title}
      />
      <div className="d-md-block">
        <div className='project-info'>  
          <h5>{title}</h5>
          {techs && techs.length > 0 && (
            <Tooltip content={techs}>
              <i className="fas fa-info-circle info-icon"></i>
            </Tooltip>
          )}
        </div>
        <div className="text-center">
          <a href={urlGit} className="btn logo"><IoLogoGithub /></a>
          <a href={urlRepo} className="btn logo"><IoGlobeOutline /></a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
