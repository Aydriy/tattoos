import React, { Component } from "react";
import image1 from "../../sass/Components/FutureWork/image/image1.png";
import image2 from "../../sass/Components/FutureWork/image/image2.png";
import image3 from "../../sass/Components/FutureWork/image/image3.png";
import image4 from "../../sass/Components/FutureWork/image/image4.png";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [image1, image2, image3, image4];

export default class FutureWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  componentDidMount = () => {};

  render() {
    const { photoIndex, isOpen } = this.state;

    const WorkCardSmall = (props) => {
      return (
        <div className="container-work-foto">
          {this.props.images === 0 ? (
            <p>
              <strong>No Images found!</strong>
            </p>
          ) : (
            <React.Fragment>
              {images.map((index, key) => (
                <div className="masonry-item" key={key}>
                  <img
                    src={index}
                    alt="gallery"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: key })
                    }
                  />
                </div>
              ))}
            </React.Fragment>
          )}

          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>
      );
    };

    const ReadMorePlus = (props) => {
      return (
        <div>
          <div className="card-description-read-more-plus">
            <div className="read-more-plus">
              <div className="read-more">
                <a href={props.href} className="description">
                  read more
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
      );
    };

    return (
      <div className="card-block work" id="futureWork">
        <div className="container">
          <div className="featyre-container">
            <div className="featyre-head-foto">
              <div className="description-read-more-container">
                <article className="work-head">
                  <span className="main-heading">featured work</span>
                  <span className="post-main-heading">
                    Work by our new artist Kayla!
                  </span>
                </article>
                <ReadMorePlus href="#" />
              </div>

              <div className="card-container-work ">
                <WorkCardSmall />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
