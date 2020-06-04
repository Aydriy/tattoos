import React from "react";
import Header from "./component/Header";
import Artists from "./component/Artists";
import Achievement from "./component/Achievement";
import FutureWork from "./component/FutureWork";
import AboutUs from "./component/AboutUs";
import InstagramWork from "./component/InstagramWork";
import ContactForm from "./component/ContactForm";
import Map from "./component/Map";
import Footer from "./component/Footer";
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <SimpleReactLightbox>
      <div className="App">
        <Header />
        <Artists />
        <Achievement />
        <FutureWork />
        <AboutUs />
        <InstagramWork />
        <ContactForm />
        <Map />
        <Footer />
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
