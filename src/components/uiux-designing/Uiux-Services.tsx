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
                  src="/assets/img/bg-img/302.jpg"
                  alt="UI/UX Design"
                />
                <h2>UI/UX Design Services</h2>
                <p>
                  Great design is more than just beautiful visuals — it’s about
                  creating an intuitive, enjoyable experience that guides users
                  seamlessly through your product or website. Our UI/UX design
                  services blend creativity with usability, ensuring every
                  click, scroll, and interaction feels natural and engaging.
                </p>
                <p>
                  We focus on understanding your audience, your goals, and the
                  way people will use your product. This allows us to design
                  interfaces that not only look stunning but also function
                  flawlessly across all devices.
                </p>

                <ul className="list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    User-centric design approach to improve engagement and
                    satisfaction.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Wireframing and prototyping to visualise ideas before
                    development.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Consistent design systems for brand alignment across all
                    platforms.
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img src="/assets/img/bg-img/155.gif" alt="UI Prototyping" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/bg-img/156.gif" alt="UX Research" />
                  </div>
                </div>

                <p>
                  From in-depth user research to pixel-perfect final designs,
                  our team ensures that your product’s UI/UX not only meets
                  industry standards but sets new benchmarks in user
                  satisfaction. We design experiences that inspire trust, drive
                  conversions, and build lasting brand loyalty.
                </p>
              </div>

              <div className="divider-sm"></div>

              {/* FAQ */}
              <div className="faq-accordion service-details-faq">
                <h3 className="mb-5">UI/UX Design FAQs</h3>
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
                        Why is UI/UX important for my business?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Good UI/UX improves user satisfaction, increases
                        engagement, and boosts conversions by making your
                        website or app easy and enjoyable to use.
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
                        Do you provide prototypes before final design?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Yes, we create wireframes and interactive prototypes so
                        you can see how the design will work before development
                        begins.
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
                        Can you redesign my existing website or app?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Absolutely. We specialise in redesigning outdated or
                        underperforming digital products to improve usability
                        and aesthetics while maintaining brand consistency.
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
                        Will my design be mobile-friendly?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Yes, all our designs are fully responsive and optimised
                        for mobile, tablet, and desktop devices.
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
                        How long does a UI/UX design project take?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Project timelines vary depending on scope and
                        complexity, but most UI/UX projects take between 2–6
                        weeks.
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
                        Download our brochure to explore our UI/UX design
                        process, portfolio, and pricing details.
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
