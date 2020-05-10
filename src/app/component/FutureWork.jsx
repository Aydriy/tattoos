import React, { Component } from "react";
import image1 from "../../sass/Components/FutureWork/image/image1.png";
import image2 from "../../sass/Components/FutureWork/image/image2.png";
import image3 from "../../sass/Components/FutureWork/image/image3.png";
import image4 from "../../sass/Components/FutureWork/image/image4.png";

export default class FutureWork extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  render() {
    const WorkCardSmall = (props) => {
      return (
        <div>
          <div className="card">
            <div className="card-foto">
              <img src={props.src} alt="" />
            </div>
          </div>
        </div>
      );
    };

    const WorkCardBig = (props) => {
      return (
        <div>
          <div className="card">
            <div className="card-foto">
              <img src={props.src} alt="" />
            </div>
          </div>
        </div>
      );
    };

    const WorkCardBigPlus = (props) => {
      return (
        <div>
          <div className="card-description work-card-description">
            <div className="card-description-info work-card-description-info">
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
          <div className="card">
            <div className="card-foto">
              <img src={props.src} alt="" />
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
              <article className="work-head">
                <span className="main-heading">featured work</span>
                <span className="post-main-heading">
                  Work by our new artist Kayla!
                </span>
              </article>
              <div className="card-container-work ">
                <WorkCardSmall src={image1} />
                <WorkCardSmall src={image2} />
                <WorkCardBig src={image3} />
                <WorkCardBigPlus src={image4} href="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
