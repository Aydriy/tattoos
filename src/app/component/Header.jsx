import React from "react";
import { Link } from "react-scroll";
import image from "../../sass/Components/Header/image/image.svg";

class Header extends React.Component {
  state = {
    show: true,
    scrolled: false,
    scrolledBtn: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 1000;

      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }

      const isGoTop = window.scrollY < 1000;
      if (isGoTop !== true) {
        this.setState({ scrolledBtn: true });
      } else {
        this.setState({ scrolledBtn: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    const NavElements = (props) => {
      return (
        <li className={"header-nav-li description" + " " + `${props.classRed}`}>
          <Link
            onClick={() => this.setState({ show: !this.props.show })}
            activeClass="active"
            to={props.to}
            spy={true}
            smooth={true}
            offset={-30}
            duration={1000}
          >
            {props.name}
          </Link>
        </li>
      );
    };

    const LogoExpertise = () => {
      return (
        <svg
          width="120"
          height="96"
          viewBox="0 0 120 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="120" height="95.3271" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0"
                transform="translate(0 -0.00219024) scale(0.00531915 0.00669587)"
              />
            </pattern>
            <image
              id="image0"
              width="188"
              height="150"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      );
    };

    const SocialNetworks = (props) => {
      return (
        <ul className="social-network-ul">
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
          </a>
        </ul>
      );
    };

    const GoToTop = () => {
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="70px"
          height="70px"
          viewBox="0 0 512 512"
          enableBackground="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <path
            id="arrow-28-icon"
            fill="#29e"
            transform="rotate(-90 256,256)"
            d="M90,256c0,91.755,74.258,166,166,166c91.755,0,166-74.259,166-166c0-91.755-74.258-166-166-166

	C164.245,90,90,164.259,90,256z M462,256c0,113.771-92.229,206-206,206S50,369.771,50,256S142.229,50,256,50S462,142.229,462,256z

	 M199.955,168.598l32.263-32.107L352.154,257L232.218,377.51l-32.263-32.107L287.937,257L199.955,168.598z"
          />
        </svg>
      );
    };

    let Burger = () => {
      return (
        <div className="item-container">
          <section className="section-container">
            <div
              id="humburgerId"
              className={
                this.state.show ? "hamburger" : "hamburger activeHamburger"
              }
              onClick={() => this.setState({ show: !this.state.show })}
            >
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </div>
          </section>
        </div>
      );
    };

    return (
      <header className="header" id="home">
        <div className="container">
          <div className="nav-social">
            <nav className="header-nav">
              <ul className="header-nav-ul">
                <NavElements name="Home" to="home" />
                <NavElements name="New! Tattoo supplies" />
                <NavElements name="Artists" to="artists" />
                <NavElements name="About us" to="about-us" />
                <NavElements name="Services" />
                <NavElements name="360 tour" />
                <NavElements name="Featured work" to="futureWork" />
                <NavElements name="Aftercare" />
                <NavElements name="FAQ" />
                <NavElements
                  name="Contact"
                  classRed="header-nav-li-contact"
                  to="contactform"
                />
              </ul>
            </nav>
            <div
              className={
                this.state.scrolled
                  ? "nav-burger-wrapper scrolled"
                  : "nav-burger-wrapper "
              }
            >
              <div className="burgerButton">
                <Burger className="test" />
              </div>
              <div
                id="burger-nav"
                className={
                  this.state.show
                    ? "burger-nav"
                    : "burger-nav burger-nav-active"
                }
              >
                <div className="burger-nav__title">
                  <p className="burger-nav__title-p">NAVIGATION</p>
                </div>

                <div className="burger-nav__navElems">
                  <ul className="header-nav-ul">
                    <NavElements name="Home" to="home" />
                    <NavElements name="New! Tattoo supplies" />
                    <NavElements name="Artists" to="artists" />
                    <NavElements name="About us" to="about-us" />
                    <NavElements name="Services" />
                    <NavElements name="360 tour" />
                    <NavElements name="Featured work" to="futureWork" />
                    <NavElements name="Aftercare" />
                    <NavElements name="FAQ" />
                    <NavElements
                      name="Contact"
                      classRed="header-nav-li-contact"
                      to="contactform"
                    />
                  </ul>
                </div>
              </div>
            </div>
            <div className="logo-expertise">
              <LogoExpertise />
            </div>
            <div className="social-network red-ell-nav">
              <SocialNetworks facebook="#" instagram="#" />
            </div>
          </div>
          <div
            className="container-logo-description-btn"
            className={
              this.state.show
                ? "container-logo-description-btn"
                : "container-logo-description-btn container-logo-description-btn-active"
            }
          >
            <div className="tattoos-logo-container">
              <img src={image} alt="" className="tattoos-logo" />
            </div>
            <div className="tattos-description">
              <p>ONE STEP BEYOND TATTOOING</p>
            </div>
            <div className="btn header-btn ">
              <Link
                to="contactform"
                spy={true}
                smooth={true}
                offset={-80}
                duration={1000}
              >
                <button>
                  <p className="btn-description">contact us </p>
                  <span className="btn-description">+</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={this.state.scrolledBtn ? "goTop scrolledBtn" : "goTop"}>
          <Link to="home" spy={true} smooth={true} offset={-80} duration={1000}>
            <GoToTop />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
