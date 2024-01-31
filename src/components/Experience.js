import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export const Experience = () => {
  return (
    <section className="about-container px-3 mb-5" id="experience">
      <div className="container">
        <div className="row">
          {/* First Experience */}
          <div className="col-md-6 mb-4">
            <div className="card-body">
              <h2 className="mb-2 font-weight-bold text-19px">Sports Direct</h2>
              <p className="text-16px opacity-60">
                I was required to offer quick and reliable service to customers
                while cleaning the shop floor throughout the day. I remained
                calm in a fast-paced store and assist my fellow colleagues serve
                customers. I also processed footwear deliveries and I would
                operate stockrooms where I regularly rearrange stock to keep it
                safe and easily accessible for fellow colleagues
              </p>
              <div className="w-2 mx-auto h-2.5rem edu-line"></div>
              <div className="d-flex font-weight-bold rounded items-center justify-content-center edu-last">
                2019 - 2023
              </div>
            </div>
          </div>

          {/* Second Experience */}
          <div className="col-md-6 mb-4">
            <div className="card-body">
              <h2 className="mb-2 font-weight-bold text-19px">
                Creative Computing
              </h2>
              <p className="text-16px opacity-60">
                This was my introduction to coding. My college course thought me
                how to use creative methods to problem solve. I am currently in
                my final year and I have enjoyed every year so far
              </p>
              <div className="w-2 mx-auto h-2.5rem edu-line"></div>
              <div className="d-flex font-weight-bold rounded items-center justify-content-center edu-last">
                2020 - 2024
              </div>
            </div>
          </div>

          {/* Third Experience */}
          <div className="col-md-6 mb-4">
            <div className="card-body">
              <h2 className="mb-2 font-weight-bold text-19px">
                Capella Internship
              </h2>
              <p className="text-16px opacity-60">
                I was a part of the development team that works on
                Capella&apos;s Platform for Hybrid Working - Hot desk management
                software & hot desk scheduling | Capella (capella-ws.com) - I
                worked on analysing, implementing and maintaining features for
                the platform.
              </p>
              <div className="w-2 mx-auto h-2.5rem edu-line"></div>
              <div className="d-flex font-weight-bold rounded items-center justify-content-center edu-last">
                2023 Jan - Apr
              </div>
            </div>
          </div>

          {/* Fourth Experience */}
          <div className="col-md-6 mb-4">
            <div className="card-body">
              <h2 className="mb-2 font-weight-bold text-19px">
                Lead Developer | Research Assistant
              </h2>
              <p className="text-16px opacity-60">
                Following our victory in the N-TUTORR competition, we&apos;ve
                secured funding for a transformative project aimed at
                reimagining the student services offered on the Institute of
                Art, Design, and Technology (IADT) website.
              </p>
              <div className="w-2 mx-auto h-2.5rem edu-line"></div>
              <div className="d-flex font-weight-bold rounded items-center justify-content-center edu-last">
                2023 - 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
