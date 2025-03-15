import { BrowserRouter } from "react-router-dom";
import React from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Profile } from "./components";
import wallpaper1 from "./assets/herobg.png"; 

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${wallpaper1})`}}>
          <Navbar />
          <Hero className="flex items-center justify-center h-full" />
        </div>
        
        <div className="relative z-0">
          <StarsCanvas density={1000000} size={0.0003} color="#915eff" />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Profile />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
