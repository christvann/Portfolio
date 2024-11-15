import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Wave, Navbar, Tech, Works, StarsCanvas } from "./components";

import { SpeedInsights } from "@vercel/speed-insights/next";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-gradient-wave bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Wave />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <SpeedInsights />
      </div>
    </BrowserRouter>
  );
};

export default App;
