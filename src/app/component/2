import React, { Component } from "react";
import picture1 from "../../sass/Components/InstagramWork/image/picture1.svg";
import picture2 from "../../sass/Components/InstagramWork/image/picture2.svg";
import picture3 from "../../sass/Components/InstagramWork/image/picture3.svg";
import picture4 from "../../sass/Components/InstagramWork/image/picture4.svg";
import picture5 from "../../sass/Components/InstagramWork/image/picture5.svg";
import picture6 from "../../sass/Components/InstagramWork/image/picture6.svg";
import picture7 from "../../sass/Components/InstagramWork/image/picture7.svg";
import picture8 from "../../sass/Components/InstagramWork/image/picture8.svg";
import picture9 from "../../sass/Components/InstagramWork/image/picture9.svg";
import picture10 from "../../sass/Components/InstagramWork/image/picture10.svg";
import picture11 from "../../sass/Components/InstagramWork/image/picture11.svg";
import picture12 from "../../sass/Components/InstagramWork/image/picture12.svg";
import picture13 from "../../sass/Components/InstagramWork/image/picture13.svg";
import picture14 from "../../sass/Components/InstagramWork/image/picture14.svg";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ShowMorePlus = (props) => {
  return (
    <div>
      <div className="card-description ">
        <div className="card-description-info ">
          <div className="read-more-plus">
            <div className="read-more">
              <a href={props.href} className="description">
                show more
              </a>
            </div>
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
    </div>
  );
};

const images = [picture1, picture12, picture4, picture8, picture5, picture6];

const imagesSecond = [
  picture14,
  picture9,
  picture3,
  picture10,
  picture11,
  picture13,
];

export default class FutureWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      isOpenSecond: false,
      openSingleFirst: false,
      openSingleSecond: false,
    };
  }

  componentDidMount = () => {};

  render() {
    const {
      photoIndex,
      isOpen,
      openSingleFirst,
      openSingleSecond,
      isOpenSecond,
    } = this.state;

    const InstagramFotosInnerFirst = (props) => {
      return (
        <div className="inner-grid">
          {this.props.images === 0 ? (
            <p>
              <strong>No Images found!</strong>
            </p>
          ) : (
            <React.Fragment>
              {images.map((index, key) => (
                <img
                  key={key}
                  src={index}
                  alt="gallery"
                  onClick={() =>
                    this.setState({ isOpen: true, photoIndex: key })
                  }
                />
              ))}
            </React.Fragment>
          )}

          {isOpen && (
            <Lightbox
              activeProps={{ width: "100%", height: "100%" }}
              mainSrc={images[photoIndex]}
              // nextSrc={images[(photoIndex + 1) % images.length]}
              // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              // onMovePrevRequest={() =>
              //   this.setState({
              //     photoIndex: (photoIndex + images.length - 1) % images.length,
              //   })
              // }
              // onMoveNextRequest={() =>
              //   this.setState({
              //     photoIndex: (photoIndex + 1) % images.length,
              //   })
              // }
            />
          )}
        </div>
      );
    };

    const InstagramFotosInnerSecond = (props) => {
      return (
        <div className="inner-grid inner-grid-second">
          {this.props.imagesSecond === 0 ? (
            <p>
              <strong>No Images found!</strong>
            </p>
          ) : (
            <React.Fragment>
              {imagesSecond.map((index, key) => (
                <img
                  key={key}
                  src={index}
                  alt="gallery"
                  onClick={() =>
                    this.setState({ isOpenSecond: true, photoIndex: key })
                  }
                />
              ))}
            </React.Fragment>
          )}

          {isOpenSecond && (
            <Lightbox
              mainSrc={imagesSecond[photoIndex]}
              // nextSrc={imagesSecond[(photoIndex + 1) % imagesSecond.length]}
              // prevSrc={
              //   imagesSecond[
              //     (photoIndex + imagesSecond.length - 1) % imagesSecond.length
              //   ]
              // }
              onCloseRequest={() => this.setState({ isOpenSecond: false })}
              // onMovePrevRequest={() =>
              //   this.setState({
              //     photoIndex:
              //       (photoIndex + imagesSecond.length - 1) %
              //       imagesSecond.length,
              //   })
              // }
              // onMoveNextRequest={() =>
              //   this.setState({
              //     photoIndex: (photoIndex + 1) % imagesSecond.length,
              //   })
              // }
            />
          )}
        </div>
      );
    };

    const InstagramFotosSingleFirst = (props) => {
      return (
        <div className="large-first">
          {this.props.images === 0 ? (
            <p>
              <strong>No Images found!</strong>
            </p>
          ) : (
            <React.Fragment>
              <img
                src={picture7}
                alt="gallery"
                onClick={() => this.setState({ openSingleFirst: true })}
              />
            </React.Fragment>
          )}

          {openSingleFirst && (
            <Lightbox
              mainSrc={picture7}
              onCloseRequest={() => this.setState({ openSingleFirst: false })}
            />
          )}
        </div>
      );
    };

    const InstagramFotosSingleSecond = (props) => {
      return (
        <div className="large-second">
          {this.props.images === 0 ? (
            <p>
              <strong>No Images found!</strong>
            </p>
          ) : (
            <React.Fragment>
              <img
                src={picture2}
                alt="gallery"
                onClick={() => this.setState({ openSingleSecond: true })}
              />
            </React.Fragment>
          )}

          {openSingleSecond && (
            <Lightbox
              mainSrc={picture2}
              onCloseRequest={() => this.setState({ openSingleSecond: false })}
            />
          )}
        </div>
      );
    };

    return (
      <div className="instagramWork" id="instagramWork">
        <div className="container">
          <article className="instagramWork-head">
            <span className="main-heading">instagram collective work</span>
          </article>
          <div className="grid-container-img">
            <div className="grid">
              <InstagramFotosSingleFirst />
              {/* <img src={picture7} className="item1" />
              <div className="inner-grid">
                <img src={picture1} alt="" />
                <img src={picture12} alt="" />
                <img src={picture4} alt="" />
                <img src={picture8} alt="" />
                <img src={picture5} alt="" />
                <img src={picture6} alt="" />
              </div> */}
              <InstagramFotosInnerFirst />
            </div>
            <div className="grid-second">
              <InstagramFotosInnerSecond />
              {/* <div className="inner-grid">
                <img src={picture14} alt="" />
                <img src={picture9} alt="" />
                <img src={picture3} alt="" />
                <img src={picture10} alt="" />
                <img src={picture11} alt="" />
                <img src={picture13} alt="" />
              </div>
              <img src={picture2} className="item1" /> */}
              <InstagramFotosSingleSecond />
            </div>
            <ShowMorePlus href="#" />
          </div>
        </div>
      </div>
    );
  }
}
