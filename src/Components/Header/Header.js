import React from 'react'
import './Header.css';
import NavBar from './NavBar';
import { useRef } from 'react';
import rohitImg from './rohit3.png'

// import { useState , useEffect } from 'react';


const Header = () => {

   let  area = useRef();  

   function areaFunc()
   {
     area.current.classList.add("bg2");
     area.current.classList.remove("bg1");
   }
   function areaFuncLight()
   {
     area.current.classList.add("bg1");
     area.current.classList.remove("bg2");
   }
  return (
    <header className='area bg1' ref={area}>
     <NavBar area={areaFunc} area2={areaFuncLight}></NavBar>
      <div className="rohit">
        <div className="rohitchoudhary">
            <div className="title">
                  <p>ROHIT CHOUDHARY</p>
                  <div className='links-to-page'>
                  <a href="#About" className="projectLink">About</a>
                  <a href="#Projects" className="projectLink">Projects</a>
                  </div>
            </div>
            <p className='web'>Front End Web Developer<br /></p>
            <p className="infoTitle">I produce WebApp with ReactJS and other Web Tools</p>
        </div>
        <div className="img">
        <img src={rohitImg} className="imgSrc" />
        </div>
      </div> 
        
      {/* Animation*/}
      <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            {/* <Loader></Loader> */}
            <a href="#Skills" className='scr'><i class="fa-solid fa-circle-arrow-down"></i></a>
            {/* <a href="#Skills" className='scr2'><i class="fa-solid fa-circle-arrow-down"></i></a> */}
    </header>
  )
}

export default Header
