import React from "react";
import aboutUsImage from "../../sass/Components/AboutUs/image/aboutUsImage.png";

export default function AboutUs() {
  return (
    <div className="about-us" id="about-us">
      <div className="container">
        <main className="about-us-container">
          <div className="about-us-text-foto">
            <article className="about-us-description">
              <div className="main-heading">about us</div>
              <div className="description-dark about-us-description-dark">
                We are a small family owned business that was established in
                Sweden back in 2006. The company, founded by Svetlyo, later on,
                expanded and opened its primary location in the heart of the
                tattoo industry - San Francisco, California. <br />
                <br />
                Our shop is client-centered, and our mission is to make everyone
                feel great in their skin. From the first day, we opened our
                doors in 2010, we've strived for excellence in creating truly
                unique custom tattoos for you.
              </div>
            </article>
            <div className="about-us-img ">
              <img src={aboutUsImage} alt="" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
