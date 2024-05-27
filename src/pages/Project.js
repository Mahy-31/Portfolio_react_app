import React from 'react';
import {ProjectList} from '../helpers/ProjectsList';
import ProjItem from '../components/ProjItem';
import '../styles/Project.css';
import ProjBg from '../assets/projbg.jpg';

function Project() {
  return (
    <div className="projects" style={{ backgroundImage: `url(${ProjBg})` }}>
        <h1 className="header">My projects</h1>
        <div className="projectsList">
            {ProjectList.map((projItem,key) => {
                return (<ProjItem
                  key = {key} 
                  name={projItem.name} 
                  image={projItem.image}
                />);
            })}
        </div>
      
    </div>
  )
}

export default Project
