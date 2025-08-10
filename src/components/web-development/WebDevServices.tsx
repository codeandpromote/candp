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
                  src="/assets/img/bg-img/303.jpg"
                  alt="Web Development"
                />
                <h2>
                  Professional Web Development Services That Drive Business
                  Growth
                </h2>
                <p>
                  Transform your online presence with our expert web development
                  services. At Code and Promote, we create custom websites that
                  not only look stunning but also deliver measurable results for
                  your business. With over 5 years of experience in web
                  development, our team has successfully launched 100+ websites
                  across diverse industries, helping businesses increase their
                  online visibility, engage customers, and drive conversions.
                </p>
                <p>
                  Whether you need a simple business website, an e-commerce
                  platform, or a complex web application, we combine
                  cutting-edge technology with user-centered design to create
                  digital experiences your customers love. Our responsive web
                  development approach ensures your website performs flawlessly
                  across all devices. Every website we build is SEO-ready,
                  fast-loading, secure, and scalable to grow with your business.
                </p>

                <ul className="list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Custom Website Development – HTML, CSS, JavaScript,
                    responsive design, CMS integration, SEO foundation,
                    performance optimization, and security.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    E-commerce Website Development – shopping cart, payment
                    gateways, inventory management, mobile-optimized, SSL
                    security, SEO product pages.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    WordPress Development – custom themes, plugins, maintenance,
                    performance optimization, security hardening, SEO setup,
                    content migration.
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/107.jpg"
                      alt="Web Development Process"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/108.jpg"
                      alt="Web Development Technologies"
                    />
                  </div>
                </div>

                <p>
                  We follow a proven process to ensure project success:
                  Discovery & Planning, Design & Wireframing, Development &
                  Coding, Testing & Launch. Our modern technology stack includes
                  HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS,
                  PHP, Laravel, Node.js, Python, MySQL, PostgreSQL, and
                  WordPress.
                </p>
              </div>

              <div className="divider-sm"></div>

              {/* FAQ */}
              <div className="faq-accordion service-details-faq">
                <h3 className="mb-5">
                  Web Development Frequently Asked Questions
                </h3>
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
                        How long does web development take?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Website development timelines vary depending on project
                        complexity. A basic business website typically takes 4–6
                        weeks, while complex e-commerce sites or web
                        applications may require 8–12 weeks or more.
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
                        Do you provide website maintenance?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Yes, we offer comprehensive website maintenance services
                        including security updates, content updates, performance
                        monitoring, and technical support.
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
                        Will my website be mobile-friendly?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Absolutely. All websites we develop are fully responsive
                        and optimized for mobile devices.
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
                        Can you help with search engine optimization?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Yes, we implement on-page SEO best practices, optimize
                        site speed, ensure mobile responsiveness, and create
                        SEO-friendly URL structures.
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
                        What if I need changes after launch?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We provide post-launch support. Minor content updates
                        and bug fixes are typically included, while major
                        changes may require additional development.
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
                        Download our brochure to explore our full Web
                        Development services, process, and transparent pricing.
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
