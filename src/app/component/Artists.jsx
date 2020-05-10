import React from "react";
import person1 from "../../sass/Components/Artists/image/person1.png";
import person2 from "../../sass/Components/Artists/image/person2.png";
import person3 from "../../sass/Components/Artists/image/person3.png";
import person4 from "../../sass/Components/Artists/image/person4.png";

const ArtistsCard = (props) => {
  return (
    <div>
      <main className="card">
        <div className="card-foto">
          <img src={props.src} alt="" />
        </div>
        <div className="card-description">
          <div className="card-description-info">
            <div className="name post-main-heading">{props.name}</div>
            <div className="read-more-plus">
              <article className="read-more">
                <a href={props.href} className="description">
                  read more
                </a>
              </article>
              <div className="plus">
                <a href={props.href}>
                  <div className="plus-container">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.772705"
                        y="0.772736"
                        width="10.4545"
                        height="10.4545"
                        stroke="#FF0E0E"
                      />
                    </svg>
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.124 2.526V3.534H3.472V5.326H2.352V3.534H0.7V2.526H2.352V0.733999H3.472V2.526H5.124Z"
                        fill="#FF0E0E"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default function Artists() {
  return (
    <div className="card-block artists" id="artists">
      <div className="container artist-container">
        <div className="artists-head">
          <span className="main-heading">artists</span>
        </div>
        <div className="card-centrate">
          <div className="card-container artist-card-container">
            <ArtistsCard src={person1} name="Svetlyo" href="#" />
            <ArtistsCard src={person2} name="Renette" href="#" />
            <ArtistsCard src={person3} name="Dave" href="#" />
            <ArtistsCard src={person4} name="Kayla" href="#" />
          </div>
        </div>
      </div>
    </div>
  );
}
