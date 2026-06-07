import "./App.css";
import { useState } from "react";
import About from "./Main_Sections/About_Section/About";
import Contact from "./Main_Sections/Contact_Section/Contact";
import Hero from "./Main_Sections/Home_Section/hero";
import Projects from "./Main_Sections/Project_Section/Project";
import Services from "./Main_Sections/Service_Section/Services";
import TechStack from "./Main_Sections/TechStack/TechStack";
import Footer from "./Reuseable_Contents/Footer/Footer";
import Navbar from "./Reuseable_Contents/Navbar/Navbar";
import Loader from "./Reuseable_Contents/Components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative">
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <>
          <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Services />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
