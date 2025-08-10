"use client";
import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactArea = () => {
  const [state, handleSubmit] = useForm("xgvzrzoa");

  // Toast notifications based on form state
  useEffect(() => {
    if (state.succeeded) {
      toast.success("✅ Your message has been sent successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    }

    if (state.errors && Object.keys(state.errors).length > 0) {
      toast.error("❌ Oops! Please check the form and try again.", {
        position: "top-center",
        autoClose: 4000,
      });
    }
  }, [state.succeeded, state.errors]);

  return (
    <>
      <ToastContainer />
      <div className="contact-details-wrap">
        <div className="divider"></div>

        {/* Contact Info */}
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-info-card">
                <div className="icon-wrapper">📞</div>
                <p className="mb-0">Phone number</p>
                <h4>+91 7003915129</h4>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-info-card">
                <div className="icon-wrapper">📧</div>
                <p className="mb-0">Email address</p>
                <h4>info@codeandpromote.io</h4>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-info-card">
                <div className="icon-wrapper">📍</div>
                <p className="mb-0">Office Address</p>
                <h4>India</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Google Map */}
        <div className="maps-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrap contact-page-form">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="contact-form bg-secondary m-0 mt-0">
                  <div className="section-heading text-center">
                    <h2>
                      Have Questions? <br /> Contact us!
                    </h2>
                  </div>
                  <div className="divider-sm"></div>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-4 g-xl-5">
                      <div className="col-12 col-lg-6">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="form-control"
                          required
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <input
                          id="phone"
                          type="text"
                          name="phone"
                          placeholder="Your Phone"
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <select
                          name="subject"
                          className="form-control"
                          defaultValue=""
                        >
                          <option value="">Select Subject</option>
                          <option value="Help & Support">
                            Help &amp; Support
                          </option>
                          <option value="Features Inquiry">
                            Features Inquiry
                          </option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          placeholder="Type your message"
                          className="form-control"
                          required
                        ></textarea>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </div>
                      <div className="col-12">
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary rounded-pill"
                            disabled={state.submitting}
                          >
                            <span>SEND MESSAGE</span>
                            <span>SEND MESSAGE</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>

                  {state.submitting && (
                    <p className="text-center mt-3">⏳ Sending your message...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
