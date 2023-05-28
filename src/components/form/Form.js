import React from "react";
import "./form.css";
import razorpayIcon from "../../resources/images/razorpayicon.png";

const Form = () => {
  return (
    <div>
      <form className="edyoda-form">
        {/* PROGRESS BAR */}
        <div className="progress-bar">
          <div className="progress-bar-stage-one">
            <div className="form-sign-up-icon">
              <i>
                <svg
                  width="39"
                  height="38"
                  viewBox="0 0 39 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" width="38" height="38" rx="19" fill="#0096FF" />
                  <path
                    d="M21.8437 9.98413V27.0935H18.7383V13.6052L14.625 14.9646V12.4568L21.4922 9.98413H21.8437Z"
                    fill="white"
                  />
                </svg>
              </i>
            </div>
            <div className="form-sign-up-label">Sign Up</div>
          </div>
          <div className="progress-bar-stage-two">
            <div className="form-subscribe-icon">
              <svg
                width="39"
                height="38"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="38" height="38" rx="19" fill="#0096FF" />
                <path
                  d="M25.4297 24.656V27.0935H13.875V25.0076L19.418 19.0193C19.9961 18.363 20.4531 17.7927 20.7891 17.3083C21.125 16.824 21.3633 16.3865 21.5039 15.9958C21.6523 15.5974 21.7266 15.2185 21.7266 14.8591C21.7266 14.3357 21.6328 13.8787 21.4453 13.488C21.2578 13.0896 20.9844 12.781 20.625 12.5623C20.2734 12.3435 19.8398 12.2341 19.3242 12.2341C18.7539 12.2341 18.2656 12.3669 17.8594 12.6326C17.4609 12.8904 17.1562 13.2498 16.9453 13.7107C16.7422 14.1716 16.6406 14.699 16.6406 15.2927H13.5352C13.5352 14.2849 13.7695 13.3669 14.2383 12.5388C14.707 11.7029 15.3789 11.0349 16.2539 10.5349C17.1289 10.0349 18.168 9.78491 19.3711 9.78491C20.543 9.78491 21.5352 9.98022 22.3477 10.3708C23.1602 10.7537 23.7773 11.3005 24.1992 12.0115C24.6211 12.7224 24.832 13.5701 24.832 14.5544C24.832 15.1013 24.7422 15.6404 24.5625 16.1716C24.3828 16.7029 24.1289 17.2302 23.8008 17.7537C23.4805 18.2693 23.0977 18.7927 22.6523 19.324C22.207 19.8552 21.7109 20.3982 21.1641 20.9529L17.8359 24.656H25.4297Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="form-subscribe-label">Subscribe</div>
          </div>
        </div>
        {/* FORM HEADER */}
        <div className="form-header">
          <p className="form-header-label">Select your subcription plan</p>
        </div>

        <div className="input-container">
          {/* input container number 1 */}
          <div className="input-container-text-field">
            <div className="input-text-tag">
              <p className="input-text-container-tag">
                <h5>Offer expired</h5>
              </p>
            </div>

            <div className="input-text-radio">
              <input
                disabled
                className="input-text-radio-btn"
                name="form-radio-btn"
                type="radio"
              />
            </div>

            <div className="input-container-radio-text">
              <p className="input-container-radio-option-text">
                12 Months Subscription
              </p>
              <div className="input-container-radio-right-text">
                <div className="input-form-radio-top-text">
                  <p className="form-top-text-first-text">Total</p>
                  <p className="form-top-text-second-text">₹99</p>
                </div>
                <div className="input-form-radio-bottom-text">
                  <p className="form-bottom-text-first-text">₹8</p>
                  <p className="form-bottom-text-second-text">/mo</p>
                </div>
              </div>
            </div>
          </div>
          {/* input container number 2 */}
          <div className="input-container-number-two">
            <div className="input-text-tag-green">
              <p className="input-text-container-tag">Recommended</p>
            </div>

            <div className="input-text-radio">
              <input
                className="input-text-radio-btn"
                name="form-radio-btn"
                type="radio"
              />
            </div>

            <div className="input-container-radio-text">
              <p className="input-container-radio-option-text">
                12 Months Subscription{" "}
              </p>
              <div className="input-container-radio-right-text">
                <div className="input-form-radio-top-text">
                  <p className="form-top-text-first-text">Total</p>
                  <p className="form-top-text-second-text">₹99</p>
                </div>
                <div className="input-form-radio-bottom-text">
                  <p className="form-bottom-text-first-text">₹8</p>
                  <p className="form-bottom-text-second-text">/mo</p>
                </div>
              </div>
            </div>
          </div>
          {/* input container number 3 */}
          <div className="input-container-text-field">
            <div className="input-text-radio">
              <input
                className="input-text-radio-btn"
                name="form-radio-btn"
                type="radio"
              />
            </div>

            <div className="input-container-radio-text">
              <p className="input-container-radio-option-text">
                6 Months Subscription{" "}
              </p>
              <div className="input-container-radio-right-text">
                <div className="input-form-radio-top-text">
                  <p className="form-top-text-first-text">Total</p>
                  <p className="form-top-text-second-text">₹99</p>
                </div>
                <div className="input-form-radio-bottom-text">
                  <p className="form-bottom-text-first-text">₹8</p>
                  <p className="form-bottom-text-second-text">/mo</p>
                </div>
              </div>
            </div>
          </div>
          {/* input container number 4 */}
          <div className="input-container-text-field">
            <div className="input-text-radio">
              <input
                className="input-text-radio-btn"
                name="form-radio-btn"
                type="radio"
              />
            </div>

            <div className="input-container-radio-text">
              <p className="input-container-radio-option-text">
                3 Months Subscription{" "}
              </p>
              <div className="input-container-radio-right-text">
                <div className="input-form-radio-top-text">
                  <p className="form-top-text-first-text">Total</p>
                  <p className="form-top-text-second-text">₹99</p>
                </div>
                <div className="input-form-radio-bottom-text">
                  <p className="form-bottom-text-first-text">₹8</p>
                  <p className="form-bottom-text-second-text">/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SUMMARY CONTAINER*/}

        <div className="summary-container">
          <div className="summary-container-text-container">
            <div className="input-container-radio-option-text">
              Subscription Fee
            </div>
            <div>₹ 18,500</div>
          </div>
          <div className="summary-container-alert">
            <div className="summary-container-alert-header">
              <div>Limited time offer</div>
              <div>-₹ 18,401</div>
            </div>
            <div className="summary-container-alert-body">
              <i className="summary-container-alert-icon-clock">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99998 5V11L14.2 14.1L15 12.9L10.5 10.2V5H8.99998ZM18 10V16H20V10H18ZM18 18V20H20V18H18ZM16 18C14.3 19.3 12.3 20 9.99998 20C4.49998 20 -1.52588e-05 15.5 -1.52588e-05 10C-1.52588e-05 4.5 4.49998 0 9.99998 0C14.8 0 18.9 3.4 19.8 8H17.7C16.8 4.6 13.7 2 9.99998 2C5.59998 2 1.99998 5.6 1.99998 10C1.99998 14.4 5.59998 18 9.99998 18C12.4 18 14.5 16.9 16 15.3V18Z"
                    fill="#DE4313"
                  />
                </svg>
              </i>
              <p className="summary-container-alert-icon-text">
                Offer Valid till 25th March 2023
              </p>
            </div>
          </div>
          <div className="summary-container-second-text">
            <div className="summary-container-second-text-left-text">
              Total(Incl. of 18% GST)
            </div>
            <div className="summary-container-second-text-right-text">₹149</div>
          </div>
        </div>
        {/* BUTTON CONTAINER*/}
        <div className="edyoda-form-button-container">
          <button className="edyoda-form-secondary-button">
            <p>cancel</p>
          </button>
          <button className="edyoda-form-primary-button">
            <p>proceed to pay</p>
          </button>
        </div>
        {/* ICON CONTAINER*/}
        <div className="edyoda-form-icon-container">
          <div className="edyoda-form-razorpay-icon">
            <img
              className="razor-pay-img"
              alt="razorpay-icon"
              src={razorpayIcon}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
