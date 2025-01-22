import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import ContactMe from "./Components/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience></Experience>
      <Skills></Skills>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
