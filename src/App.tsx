import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar.tsx";
import { SelectedPage } from "./shared/types.ts";
import Home from "./components/home/Home";
import Benefits from "./components/benefits/Benefits";
import OurClasses from './components/ourClasses/OurClasses'
import ContactUs from './components/contactUs/ContactUs'
import Footer from "./components/footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(false);

  const handelScroll = () => {
    window.scrollY === 0 &&
      (setIsTopOfPage(true), setSelectedPage(SelectedPage.Home));
    window.scrollY !== 0 && setIsTopOfPage(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <>
      <div className="app bg-gray-20 ">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses  setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
