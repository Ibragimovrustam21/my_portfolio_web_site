import React from 'react';
import { animateUp } from '../../settings/Animation';

const MyProject = ({ title, text, technologies, url, urlGithub, animeTime, adaptive }) => (
  <a target='_blank' rel="noreferrer" href={url} {...animateUp} data-aos-duration={animeTime}>
    <div className='project-item'>
      <div className='project-item-icon'>
        <div className='icon-folder'>
          <span className='far fa-folder' />
        </div>
        <div className='icon-source'>
          <a target='_blank' rel="noreferrer" href={urlGithub}><span className='fab fa-github hoverLink' /></a>
          <a target='_blank' rel="noreferrer" href={url}><span className='fas fa-external-link-alt hoverLink' /></a>
        </div>
      </div>
      <div className='project-item-name'>
        <h4 className='hoverLink'>{title}</h4>
        <p>{text}<span>{adaptive}</span></p>
      </div>
      <div className='project-item-technologies'>
        {technologies.map(item => {
          return (
            <p key={item}>{item}</p>
          )
        })}
      </div>
    </div>
  </a>
)

export default MyProject

