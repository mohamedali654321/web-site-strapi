import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Logo from './Components/Logo';
import './App.css'
import Slice from './Components/Slice';
import Steps from './Components/Steps';
import StepWrapper from './Components/StepWrapper';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App"  >
    <Header/>
    <Hero/>
    
     <Logo/>
     <Slice/>
     <Steps/>
     
     {/* <StepWrapper/> */}
     <Footer/>

    </div>
  );
}

export default App;
