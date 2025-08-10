import React from "react";

const WorkprocessArea = () => {
  return (
    <>
      <div className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                <h2 className="mb-4">
                  Our Working Process – Simple, Transparent, and Result-Driven
                </h2>
                <p className="mb-5">
                  At Code and Promote, we believe great results come from a
                  clear, structured approach. Our 4-step process ensures your
                  project moves smoothly from concept to completion — with you
                  involved at every stage.
                </p>
                <a href="/contact" className="btn btn-primary">
                  <span>Contact Us</span>
                  <span>Contact Us</span>
                </a>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">
                <div className="process-card">
                  <div className="number">1</div>
                  <div className="process-text">
                    <h4>Step 1: Discover & Plan</h4>
                    <p className="mb-0">
                      We start by understanding your goals, audience, and
                      vision. Through detailed discussions and research, we
                      create a custom strategy tailored to your business needs.
                      This ensures every decision aligns with your objectives.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">2</div>
                  <div className="process-text">
                    <h4>Quirk Step 2: Design & Prototype</h4>
                    <p className="mb-0">
                      Our creative team brings your ideas to life with engaging,
                      user-focused designs. You’ll get a visual prototype to
                      review, so you can see exactly how your project will look
                      and function before development begins.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">3</div>
                  <div className="process-text">
                    <h4>Step 3: Develop & Test</h4>
                    <p className="mb-0">
                      Using cutting-edge technology, our developers build a
                      fast, secure, and scalable solution. We run extensive
                      testing to ensure everything works flawlessly across all
                      devices and platforms.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">4</div>
                  <div className="process-text">
                    <h4>Step 4: Launch & Support</h4>
                    <p className="mb-0">
                      Once your project is perfect, we launch it for the world
                      to see. But our work doesn’t stop there — we offer ongoing
                      support, updates, and optimisation to keep your digital
                      presence performing at its best.
                    </p>
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

export default WorkprocessArea;
