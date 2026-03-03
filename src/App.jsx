import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import MyToolkitSection from "./Components/MyToolkitSection/MyToolkitSection";
import MyProjectsSection from "./Components/MyProjectsSection/MyProjectsScetion";
import AboutMeSection from "./Components/AboutMeSection/AboutMeSection"
import ContactMeSection from "./Components/ContactMeSection/ContactMeSection"
function App() {
  return (
    <>
      <NavBar />
      <Hero />
         <AboutMeSection/>
      <MyToolkitSection />
      <MyProjectsSection/>
      <ContactMeSection/>
   
    </>
  );
}

export default App;
