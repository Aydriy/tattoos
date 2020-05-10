import React from "react";

const UploadImages = (props) => {
  return (
    <div>
      <div className="card-description ">
        <div className="card-description-info ">
          <div className="read-more-plus">
            <div className="read-more read-more-upload">
              <a href={props.href} className="description">
                upload image
              </a>
            </div>
            <div className="plus">
              <a href={props.href}>
                <div className="plus-container">
                  <svg
                    width="7"
                    height="16"
                    viewBox="0 0 7 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.89215 6.0209V9.67246C4.89215 10.0356 4.76913 10.3839 4.55015 10.6407C4.33118 10.8975 4.03418 11.0418 3.7245 11.0418C3.41482 11.0418 3.11783 10.8975 2.89885 10.6407C2.67988 10.3839 2.55686 10.0356 2.55686 9.67246L2.55686 3.28223C2.55686 2.67694 2.76189 2.09645 3.12685 1.66845C3.49181 1.24045 3.9868 1 4.50293 1C4.75849 1 5.01155 1.05903 5.24766 1.17372C5.48377 1.28842 5.6983 1.45652 5.87901 1.66845C6.05972 1.88037 6.20307 2.13196 6.30087 2.40886C6.39867 2.68575 6.44901 2.98252 6.44901 3.28223L6.44901 11.4982C6.44901 12.3456 6.16196 13.1583 5.65102 13.7575C5.14007 14.3567 4.44709 14.6934 3.7245 14.6934C3.00192 14.6934 2.30893 14.3567 1.79799 13.7575C1.28705 13.1583 1 12.3456 1 11.4982L1 6.0209"
                      stroke="#FF0E0E"
                      stroke-width="0.8"
                      stroke-miterlimit="10"
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

export default function ContactForm() {
  return (
    <div className="block-contact" id="contactform">
      <div className="container">
        <div className="contact-form">
          <div className="contact-form-container">
            <div className="contact-head">
              <span className="post-main-heading">contact form</span>
            </div>
            <form action="">
              <div className="form-container">
                <label for="email" className="email description">
                  e-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-email form-label"
                  placeholder="Enter your e-mail"
                />
              </div>
              <div className="form-container ">
                <label for="list" className="artist description">
                  pick your artist
                </label>
                <select
                  id="artist"
                  type="list"
                  placeholder="Svetlyo"
                  required
                  className="form-item__element form-item__element--select form-label"
                >
                  <option disabled selected value="">
                    Please select artist
                  </option>
                  <option value="svetlyo">Svetlyo</option>
                  <option value="svetlyo">Svetlyo</option>
                  <option value="svetlyo">Svetlyo</option>
                  <option value="svetlyo">Svetlyo</option>
                </select>
              </div>
              <div className="form-container message-container">
                <label for="text" className="message description">
                  message *
                </label>

                <textarea
                  name="comment"
                  cols="40"
                  rows="3"
                  placeholder="Tell us about your idea"
                  className="form-label"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="upload-image">
            <UploadImages href="#" />
            <UploadImages href="#" />
            <UploadImages href="#" />
          </div>
        </div>
      </div>
      <div className="header-btn contact-btn ">
        <button>
          <p className="btn-description">contact us </p>
          <span className="btn-description">+</span>
        </button>
      </div>
    </div>
  );
}
