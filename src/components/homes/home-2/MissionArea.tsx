"use client";

const MissionArea = () => {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  return (
    <>
      <div className="mission-vision-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="mission-vision-img-container">
                <img src="/assets/img/bg-img/6.jpg" alt="" />

                <div className="experience">
                  <h3 className="mb-0">7+</h3>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="mission-vision-content">
                <h2>Code Your Vision, Promote Your Success</h2>
                <p className="mb-4">
                  At Code and Promote, we transform your ideas into powerful
                  digital solutions that drive real results. From cutting-edge
                  website development to impactful marketing strategies, we
                  blend creativity with technology. Our mission is to help your
                  brand shine, connect with your audience, and grow beyond
                  limits.With us, your vision isn’t just built—it’s promoted to
                  success.
                </p>

                <div className="mission-vision-accordion">
                  <div className="accordion" id="missionVision">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Our Mission
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#missionVision"
                      >
                        <div className="accordion-body">
                          To empower businesses with innovative digital
                          solutions that blend creativity and technology. We aim
                          to deliver measurable growth through tailored
                          strategies and high-quality execution. Our mission is
                          to be the trusted partner that turns ideas into
                          impactful digital realities.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Our Vision
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#missionVision"
                      >
                        <div className="accordion-body">
                          To be a global leader in digital transformation and
                          creative technology solutions. We envision shaping a
                          future where every business thrives through smart,
                          scalable innovation. Our vision is to set benchmarks
                          for excellence, trust, and lasting client success.
                        </div>
                      </div>
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

export default MissionArea;
