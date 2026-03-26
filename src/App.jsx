import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Components/Ui/NavBar/NavBar";
import Hero from "./Components/Sections/Hero/Hero";
import MyProjectsSection from "./Components/Sections/MyProjectsSection/MyProjectsScetion";
import AboutMeSection from "./Components/Sections/AboutMeSection/AboutMeSection";
import ContactMeSection from "./Components/Sections/ContactMeSection/ContactMeSection";
import GoldenNetworkLoader from "./Components/Animation/GoldenNetworkLoader/GoldenNetworkLoader";
import MyToolkitSection from "./Components/Sections/MyToolkitSection/MyToolkitSection";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <GoldenNetworkLoader />
      ) : (
        <>
          <NavBar />
          <Hero />
          <AboutMeSection />
         <MyToolkitSection/>
          <MyProjectsSection />
          <ContactMeSection />
        </>
      )}
    </>
  );
}

export default App;
