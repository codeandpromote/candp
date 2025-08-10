"use client";
import Link from "next/link";
import React from "react";

const ServiceDetailsArea = () => {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  return (
    <>
      <div className="service-details-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xxl-5">
            {/* LEFT CONTENT */}
            <div className="col-12 col-lg-8">
              <div className="service-details-content">
                <img
                  className="rounded-lg"
                  src="/assets/img/bg-img/306.jpg"
                  alt="Website Maintenance"
                />
                <h2>Professional Website Maintenance Services</h2>
                <p>
                  Your website is the digital face of your business – and just
                  like any other important asset, it needs regular care and
                  updates to perform at its best. Our website maintenance
                  services ensure your site remains fast, secure, and
                  up-to-date, providing a seamless experience for your visitors.
                </p>
                <p>
                  From updating content and fixing bugs to implementing security
                  patches and optimising performance, we take care of everything
                  in the background so you can focus on running your business.
                  Whether you have a small blog or a complex e-commerce
                  platform, we tailor our maintenance plans to your needs.
                </p>

                <ul className="list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Regular content updates to keep your website fresh and
                    relevant.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Security monitoring and malware protection to safeguard your
                    site.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Performance optimisation for faster load times and better
                    SEO.
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/157.jpg"
                      alt="Website Monitoring"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/158.jpg"
                      alt="Website Updates"
                    />
                  </div>
                </div>

                <p>
                  Our process includes routine site health checks, plugin and
                  theme updates, security audits, and backup management. With
                  our expert team handling your website maintenance, you can
                  rest assured your site will always function smoothly, stay
                  protected against cyber threats, and deliver an outstanding
                  user experience.
                </p>
              </div>

              <div className="divider-sm"></div>

              {/* FAQ */}
              <div className="faq-accordion service-details-faq">
                <h3 className="mb-5">Website Maintenance FAQs</h3>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion1"
                        aria-expanded="true"
                        aria-controls="faqQuestion1"
                      >
                        Why is regular website maintenance important?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Regular maintenance ensures your website remains secure,
                        performs well, and provides visitors with up-to-date and
                        accurate information.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion2"
                        aria-expanded="false"
                        aria-controls="faqQuestion2"
                      >
                        Do you offer 24/7 monitoring?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Yes, our advanced monitoring tools track your website’s
                        uptime and performance around the clock, alerting us to
                        any issues immediately.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion3"
                        aria-expanded="false"
                        aria-controls="faqQuestion3"
                      >
                        Can you maintain e-commerce websites?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Absolutely. We provide specialised maintenance for
                        e-commerce platforms including WooCommerce, Shopify, and
                        Magento, ensuring smooth transactions and secure
                        payments.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion4"
                        aria-expanded="false"
                        aria-controls="faqQuestion4"
                      >
                        What happens if my site goes down?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Our team responds immediately to restore your site. We
                        investigate the cause, fix the issue, and put measures
                        in place to prevent it from happening again.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion5"
                        aria-expanded="false"
                        aria-controls="faqQuestion5"
                      >
                        How often should my website be updated?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We recommend monthly updates for most websites, though
                        high-traffic or security-sensitive sites may require
                        more frequent attention.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-12 col-lg-4">
              <div className="d-flex flex-column gap-5">
                <div className="service-widget">
                  <h4 className="mb-4">Service List</h4>
                 <ul className="service-list">
                    <li>
                      <Link href="/digital-marketing">
                        Digital Marketing
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-development">
                        Web Development
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mobile-app-development">
                        Mobile Apps
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ui-ux">
                        UI/UX Design
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/graphics-designing">
                        Graphics Designing
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="service-widget brochures">
                  <h4 className="mb-4">Our Brochures</h4>
                  <div className="d-flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M6.70703 46.127C7.42451 48.3722 9.50576 50.0006 11.9562 50.0006H38.0443C40.4946 50.0006 42.5759 48.3722 43.2934 46.127H6.70703Z"
                          fill="#ECC80B"
                        />
                        <path
                          d="M41.9457 8.03447L35.5285 1.61729V8.85498C35.5285 9.03564 35.6759 9.18223 35.8567 9.18223H42.8277C42.5895 8.76699 42.2935 8.38223 41.9457 8.03447Z"
                          fill="#ECC80B"
                        />
                        <path
                          d="M43.5614 12.1116H35.0013V0H11.9561C8.91445 0 6.43945 2.4751 6.43945 5.51758V20.5662H43.5615V12.1116Z"
                          fill="#ECC80B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="50" height="50" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <p>
                        Download our brochure to learn more about our
                        comprehensive website maintenance services and packages.
                      </p>
                      <a href="#" className="btn-link">
                        Click here to download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
