"use client";
import Link from "next/link";
import React, { useState } from "react";

const services = [
  {
    icon: "ads_click",
    title: "Digital Marketing",
    description:
      "Boost your online visibility, engage your audience, and drive business growth.",
    link: "/digital-marketing",
  },
  {
    icon: "web",
    title: "Web Development",
    description:
      "Websites designed to boost your brand’s online presence and drive business growth.",
    link: "/web-development",
  },
  {
    icon: "stream_apps",
    title: "Mobile Apps",
    description:
      "Seamless experiences and help your business grow in the digital world.",
    link: "/mobile-app-development",
  },
  {
    icon: "design_services",
    title: "UI/UX Design",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    link: "/ui-ux",
  },
  {
    icon: "web",
    title: "Web Maintenance",
    description:
      "Services to keep your site secure, updated, and performing at its best",
    link: "/web-maintenance",
  },
  {
    icon: "ads_click",
    title: "Graphic Designing",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    link: "/graphics-designing",
  },
];

const ServiceArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="service-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-lg-5">
            {services.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-xl-4">
                <Link href={item.link}>
                  <div
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`service-slide-card ${
                      activeIndex === i ? "active" : ""
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                    <h2
                      style={{ bottom: activeIndex === i ? "140px" : "" }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="mb-0"
                      style={{ bottom: activeIndex === i ? "45px" : "" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ServiceArea;
