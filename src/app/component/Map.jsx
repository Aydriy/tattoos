import React from "react";
import GoogleMapsSanFrancisko from "./GoogleMapsSanFrancisko.jsx";

const SocialNetworks = (props) => {
  return (
    <ul className="social-network-ul-map">
      <a href={props.facebook}>
        <li>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1406 0.75H2.85938C2.30045 0.751682 1.7649 0.974459 1.36968 1.36968C0.974459 1.7649 0.751682 2.30045 0.75 2.85938V21.1406C0.751682 21.6995 0.974459 22.2351 1.36968 22.6303C1.7649 23.0255 2.30045 23.2483 2.85938 23.25H12.7031V14.1094H10.242V10.5938H12.7031V8.83612C12.7601 6.86512 13.2701 5.11163 16.6121 4.96913H19.383V8.454H17.0404C16.8913 8.44508 16.742 8.46639 16.6014 8.51667C16.4608 8.56695 16.3318 8.64514 16.2222 8.74656C16.1125 8.84797 16.0246 8.97051 15.9635 9.1068C15.9025 9.24309 15.8697 9.39032 15.867 9.53962V10.5938H19.3826L18.7826 14.1094H15.867V23.25H21.1406C21.6995 23.2483 22.2351 23.0255 22.6303 22.6303C23.0255 22.2351 23.2483 21.6995 23.25 21.1406V2.85938C23.2483 2.30045 23.0255 1.7649 22.6303 1.36968C22.2351 0.974459 21.6995 0.751682 21.1406 0.75V0.75Z"
              stroke="#FF0E0E"
              stroke-miterlimit="10"
            />
          </svg>
        </li>
      </a>
      <a href={props.instagram}>
        <div>
          <li className="instagram">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5458 0.75H7.45125C5.67639 0.750492 3.97418 1.45487 2.71793 2.70866C1.46169 3.96244 0.753972 5.66327 0.75 7.43813V16.5131C0.754071 18.2879 1.46183 19.9887 2.71806 21.2424C3.9743 22.4961 5.67646 23.2004 7.45125 23.2009H16.5458C18.3211 23.2012 20.0241 22.4972 21.281 21.2433C22.5379 19.9894 23.246 18.2881 23.25 16.5128V7.43775C23.2459 5.66244 22.5378 3.96125 21.2809 2.70746C20.024 1.45368 18.3211 0.749697 16.5458 0.75Z"
                stroke="#FF0E0E"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99996 2.16881C5.85203 2.17103 4.73051 2.51346 3.77712 3.15284C2.82372 3.79222 2.08124 4.69984 1.64349 5.76104C1.20573 6.82223 1.09235 7.98937 1.31766 9.11498C1.54297 10.2406 2.09687 11.2742 2.90937 12.0851C3.72187 12.896 4.75651 13.4479 5.88255 13.671C7.00859 13.8942 8.17551 13.7785 9.23585 13.3387C10.2962 12.8989 11.2024 12.1547 11.8399 11.2001C12.4774 10.2454 12.8177 9.12324 12.8177 7.97531C12.8142 6.43444 12.1998 4.95785 11.1092 3.86935C10.0186 2.78085 8.54083 2.1693 6.99996 2.16881V2.16881ZM6.99996 11.5251C6.2986 11.5235 5.61343 11.3141 5.03102 10.9233C4.44861 10.5325 3.9951 9.97787 3.72777 9.32945C3.46045 8.68102 3.39131 7.96791 3.5291 7.28021C3.66688 6.59251 4.0054 5.96107 4.50189 5.46568C4.99839 4.97029 5.63057 4.63317 6.31857 4.49691C7.00658 4.36065 7.71953 4.43137 8.36736 4.70013C9.01519 4.96889 9.56883 5.42363 9.95833 6.00691C10.3478 6.59018 10.5557 7.27581 10.5557 7.97718C10.5546 8.91916 10.1794 9.82214 9.51257 10.4875C8.84575 11.1528 7.94195 11.5261 6.99996 11.5251ZM14.2236 2.21231C14.2242 2.48826 14.1429 2.75819 13.99 2.98793C13.8371 3.21767 13.6195 3.39689 13.3647 3.50291C13.11 3.60892 12.8295 3.63697 12.5587 3.5835C12.288 3.53002 12.0392 3.39744 11.8439 3.20252C11.6485 3.00759 11.5154 2.7591 11.4614 2.48849C11.4073 2.21788 11.4347 1.93731 11.5402 1.6823C11.6457 1.42729 11.8244 1.2093 12.0538 1.05593C12.2832 0.90255 12.553 0.820681 12.829 0.82068C13.0119 0.820434 13.1931 0.856239 13.3623 0.926051C13.5314 0.995862 13.6851 1.09831 13.8146 1.22755C13.9441 1.35678 14.0469 1.51027 14.1171 1.67924C14.1872 1.8482 14.2234 2.02934 14.2236 2.21231Z"
                stroke="#FF0E0E"
                stroke-miterlimit="10"
              />
            </svg>
          </li>
        </div>
      </a>
    </ul>
  );
};

function Maps(props) {
  return (
    <div className="map-block " id="map">
      <div className="container map-container">
        <div className="map">
          <div className="contact-adres">
            <article>
              <div className="opening-hours">
                <div className="map-description">
                  <p>OPENING HOURS:</p>
                </div>
                <div className="map-post-description description-dark">
                  <p>
                    Mon-Fri: 12am-8pm <br /> Sunday: 12pm-8pm
                  </p>
                </div>
              </div>
              <div className="adres">
                <div className="map-description">
                  <p>adress:</p>
                </div>
                <div className="map-post-description description-dark">
                  <p>
                    228 Columbus Ave, San Francisco <br /> California, 94133
                  </p>
                </div>
              </div>
              <div className="email-map">
                <div className="map-description">
                  <p>e-mail:</p>
                </div>
                <div className="map-post-description description-dark">
                  <p>info@dream-masters.com</p>
                </div>
              </div>
              <div className="phone">
                <div className="map-description">
                  <p>phone:</p>
                </div>
                <div className="map-post-description description-dark">
                  <p>(415) 277-7204</p>
                </div>
              </div>
              <div className="social-network-map red-ell-nav">
                <SocialNetworks facebook="#" instagram="#" />
              </div>
            </article>
          </div>
          <div className="containerMaps">
            <div className="cityMaps">
              <SanFrancisko />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SanFrancisko() {
  return (
    <div>
      <div className="SanFrancisko">
        <GoogleMapsSanFrancisko />
      </div>
    </div>
  );
}

export default Maps;
