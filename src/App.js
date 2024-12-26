
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Mywork from './components/mywork';
import Service from './components/Service';




function App() {
  return (
    <div className="App ">
<Header />
   <HeroSection />
   <About />
 <Mywork />
<Service />
<Contact />
<Footer />
    </div>
  );
}

export default App;
