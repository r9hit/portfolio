import './Skills.css';
import FlipButton from './SmallComp/FlipButton';
import htmlIcon from './SmallComp/html.webp';
import cIcon from './SmallComp/c-icon.png';
import cppIcon from './SmallComp/Cpp- icon.png';
import cssIcon from './SmallComp/css.png';
import reactIcon from './SmallComp/react.jpg';
import jsIcon from './SmallComp/js.png';


const Skills = () => {
  return (
    <div id='Skills'>
          <div className="title SkillsT"> Skills </div>
          <div className="sub-title" id='skillP1'>Reflects in my projects</div>
          <div className="sub-title" id='skillP2'>I learn skills from various sources</div>
<div className="skills">        
        <FlipButton icon={cIcon} name={"C"}> </FlipButton>
        <FlipButton icon={cppIcon} name={"C++"}> </FlipButton>
        <FlipButton icon={reactIcon} name={"ReactJS"}> </FlipButton>
        <FlipButton icon={jsIcon} name={"JavaScript"}> </FlipButton>
        <FlipButton icon={cssIcon} name={"CSS"}> </FlipButton>
        <FlipButton icon={htmlIcon} name={"HTML"}> </FlipButton>
      </div>
    </div>
  )
}

export default Skills
