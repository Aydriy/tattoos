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

function App() {
  return (
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
  );
}

export default App;
