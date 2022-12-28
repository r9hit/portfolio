import React from 'react'
import './About.css';
import { useRef } from 'react';

const About = () => {

  let ab = useRef();
  


  return (<div id='About' ref={ab}>

        <div className="bio">
        About
        </div>
        <div className="detail">
        An electrical engineering fresher looking for an opportunity in the field of IT that enhances my skills and knowledge.
        <br /> I am a Front End Web Developer, currently diving deeper into Backend. <br /> 
        </div>
    </div>
  )
}

export default About
