import Card from './Card';
import './Projects.css'; 
import img1 from './Assests/Project-1.jpg';
import img2 from './Assests/Project-2.jpg';
import img3 from './Assests/Project-3.jfif';
import img4 from './Assests/Project-4.png';
// import { useEffect, useRef } from 'react';
const Projects = () => {
 

 let PrjoectData = [
  {
   title : "Currency Conveter",
   sub : "React JS App For Converting Internatinal Currencies and Crypto Currencies with Live Data",
   des : "Use Of API, recat-Router , states ",
   link : "https://currency-converter-by-rohit.netlify.app/"
  },
  {
    title : "Weather App",
    sub : "Weather web App Made using HTML, CSS, and JAVASCRIPT.",
    des : "Search feature , Search by either Pincode or Location name.",
    link:"https://weather-app-by-rohit.netlify.app/"
  },
  {
    title : "Number Guessing Game",
    sub  : "Made using HTML,CSS, and JS",
    des : "It is a number guessing game where you can play and have some fun.",
    link: "https://numberguessing-g4m3.netlify.app/"

  },
  {
    title : "Drum-Pad",
    sub : "Drum-pad Made with HTML, CSS, and JAVASCRIPT.",
    des : "Drum-pad with simple ui and sounds.",
    link:"https://drum-pad-by-rohit.netlify.app/"
  }
]



  return (
    <div className='Projects' id='Projects' >
      <div className="title"> Projects </div>
      <div className="sub-title"><p>I am working on some projects and will update this section very soon.</p>Work I have Done till date..</div>
      
      <Card img={img1} data={PrjoectData[0]}></Card>
      <Card img={img2} data={PrjoectData[1]}></Card>
      <Card img={img3} data={PrjoectData[2]}></Card>
      <Card img={img4} data={PrjoectData[3]}></Card>

    </div>
  )
}

export default Projects


