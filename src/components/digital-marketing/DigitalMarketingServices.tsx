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
                  src="/assets/img/bg-img/304.jpg"
                  alt="Digital Marketing"
                />
                <h2>Smart Digital Marketing That Drives Real Results</h2>
                <p>
                  At Code and Promote, we turn clicks into customers with
                  result-driven digital marketing strategies that grow your
                  brand, increase traffic, and boost sales. In today’s
                  competitive online world, having a website isn’t enough — you
                  need strategic, targeted campaigns to reach the right
                  audience, at the right time, with the right message.
                </p>
                <p>
                  Our team of experts uses data-driven strategies combined with
                  creative storytelling to help your business stand out in the
                  crowded digital space. Whether you need SEO, social media
                  campaigns, paid ads, or content marketing, we create
                  customised plans that deliver measurable results.
                </p>

                <ul className="list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Custom Strategies – built for your unique business goals and
                    audience.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Proven Methods – backed by research, analytics, and industry
                    best practices.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Full-Funnel Marketing – turning leads into loyal customers
                    through every stage.
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/151.gif"
                      alt="Digital Marketing Campaign"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/152.gif"
                      alt="Social Media Marketing"
                    />
                  </div>
                </div>

                <p>
                  Our all-in-one digital marketing solutions include SEO, PPC,
                  social media marketing, content marketing, email marketing,
                  and conversion rate optimization. We follow a proven process:
                  Discovery & Goal Setting, Strategy Development, Campaign
                  Execution, Monitoring & Optimization, and Reporting & Growth —
                  ensuring your campaigns deliver real, measurable results.
                </p>
              </div>

              <div className="divider-sm"></div>

              {/* FAQ */}
              <div className="faq-accordion service-details-faq">
                <h3 className="mb-5">
                  Digital Marketing Frequently Asked Questions
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
                        How long does it take to see results from digital
                        marketing?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Most businesses start to see measurable improvements in
                        traffic and engagement within 3–6 months, depending on
                        the strategies used and your industry.
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
                        Do I need all digital marketing services or just one?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        It depends on your goals. Some businesses see great
                        results from SEO alone, while others benefit from a
                        multi-channel approach combining SEO, PPC, and social
                        media marketing.
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
                        How do you measure campaign success?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We track metrics such as website traffic, keyword
                        rankings, conversion rates, click-through rates, and
                        ROI. Detailed reports are shared regularly so you can
                        see progress clearly.
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
                        What makes Code and Promote different from other
                        agencies?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We combine creativity with data-driven decision-making,
                        provide transparent reporting, and offer dedicated
                        support to ensure you get the maximum value from your
                        marketing budget.
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
                        Can you guarantee top rankings in Google?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        No reputable agency can guarantee rankings due to
                        constant search engine algorithm changes. However, we
                        follow best practices that consistently deliver strong
                        improvements over time.
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
                        Download our brochure to explore our full Digital
                        Marketing services, strategies, and success stories.
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
