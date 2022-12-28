import './App.css';
import About from './Components/About/About';
import Projects from './Components/About/Projects';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import Skills from './Components/Skills';


function App() {
  return (<>

     <Header/>
     <Skills/>
     <Projects/>
     <About></About>
     <Footer/>

  </>
  );
}

export default App;
