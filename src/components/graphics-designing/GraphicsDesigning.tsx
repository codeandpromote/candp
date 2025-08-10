"use client"
import Link from 'next/link';
import React from 'react';

const ServiceDetailsArea = () => {

  if (typeof window !== 'undefined') {
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
                <img className="rounded-lg" src="/assets/img/bg-img/305.jpg" alt="Graphic Design Services" />
                <h2>Creative Graphic Design That Brings Your Brand to Life</h2>
                <p>
                  At Code and Promote, we design visuals that speak louder than words – helping your business stand out, connect with your audience, and leave a lasting impression. In today’s digital world, first impressions happen in seconds – and your visuals often speak before your words do.
                </p>
                <p>
                  That’s why powerful graphic design is not just about looking good – it’s about communicating your brand’s story, values, and personality. From a sleek logo to complete brand identity packages, we make sure every design reflects who you are and why customers should choose you.
                </p>

                <ul className="list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    Custom Designs tailored to your business identity.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    Brand Consistency across all platforms for a unified visual presence.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    Marketing-Ready Assets optimised for print, digital, and social media.
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img src="/assets/img/bg-img/159.jpg" alt="Logo & Brand Identity" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/bg-img/160.jpg" alt="Graphic Design Work" />
                  </div>
                </div>

                <p>
                  Our services cover everything your brand needs to shine: Logo Design & Brand Identity, Social Media Graphics, Marketing Collateral, Website & UI Design, Product Packaging Design, and Infographics. We follow a proven process: Brand Discovery, Concept Creation, Design & Development, Feedback & Revisions, and Final Delivery.
                </p>
              </div>

              <div className="divider-sm"></div>

              {/* FAQ */}
              <div className="faq-accordion service-details-faq">
                <h3 className="mb-5">Graphic Design Frequently Asked Questions</h3>
                <div className="accordion" id="faqAccordion">

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion1" aria-expanded="true" aria-controls="faqQuestion1">
                        How long does it take to complete a design project?
                      </button>
                    </h2>
                    <div id="faqQuestion1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Timelines depend on the project scope. A logo design may take 1–2 weeks, while full brand identity packages may take 3–4 weeks or more.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
                        Do you provide source files?
                      </button>
                    </h2>
                    <div id="faqQuestion2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes, we provide all final designs in print-ready and web-optimised formats, along with editable source files if required.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
                        Can you design for both print and digital?
                      </button>
                    </h2>
                    <div id="faqQuestion3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Absolutely. We design assets optimised for both online and offline marketing channels.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
                        What if I want revisions?
                      </button>
                    </h2>
                    <div id="faqQuestion4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        We include revision rounds in all design packages to ensure the final product meets your expectations perfectly.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion5" aria-expanded="false" aria-controls="faqQuestion5">
                        Can you create a full brand identity package?
                      </button>
                    </h2>
                    <div id="faqQuestion5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes, we specialise in complete brand identity design, including logos, colour palettes, typography, and brand guidelines.
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <g clipPath="url(#clip0)">
                        <path d="M6.70703 46.127C7.42451 48.3722 9.50576 50.0006 11.9562 50.0006H38.0443C40.4946 50.0006 42.5759 48.3722 43.2934 46.127H6.70703Z" fill="#ECC80B" />
                        <path d="M41.9457 8.03447L35.5285 1.61729V8.85498C35.5285 9.03564 35.6759 9.18223 35.8567 9.18223H42.8277C42.5895 8.76699 42.2935 8.38223 41.9457 8.03447Z" fill="#ECC80B" />
                        <path d="M43.5614 12.1116H35.0013V0H11.9561C8.91445 0 6.43945 2.4751 6.43945 5.51758V20.5662H43.5615V12.1116Z" fill="#ECC80B" />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="50" height="50" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <p>
                        Download our brochure to explore our full Graphic Design services, portfolio, and client success stories.
                      </p>
                      <a href="#" className="btn-link">Click here to download</a>
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
