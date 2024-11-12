import React from "react";

function Empower() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto md:px-40 px-10 text-2xl ">
          <h1 className="text-6xl font-bold text-center text-green-700 mb-4 p-5">
            Empower
          </h1>
          <p className="text-center italic mb-8">
            "Gain the confidence to stand out and proudly share your expertise
            with the world."
          </p>

          <section className="mb-8">
            <h2 className="text-4xl font-bold text-green-500 mb-4">
              Our Vision
            </h2>
            <p className="mb-4">
              At <span className="font-bold">Mission One Million</span>, we aim
              to empower students by providing opportunities to work directly
              with industry professionals. These experiences help students gain
              invaluable insights, refine their skills, and build the confidence
              to present their own work with pride. Our goal is to nurture the
              next generation of leaders who can navigate challenges,
              communicate effectively, and make meaningful contributions.
            </p>
          </section>
        </div>

        <div className="flex flex-wrap items-center justify-center min-h-[40vh] pt-10 gap-10 md:gap-20 text-2xl">
          <div className="relative border border-green-600 rounded-lg p-5 w-full max-w-[350px] h-[340px] text-center shadow-lg bg-[#5ca4754d]">
            <h3 className="font-bold mb-2 text-3xl text-green-700">
              Professional <br /> Mentorship
            </h3>
            <p className="p-6">
              Work with experienced professionals who provide guidance,
              feedback, and real-world insights.
            </p>
          </div>
          <div className="relative border border-green-600 rounded-lg p-5 w-full max-w-[350px] h-[340px] text-center shadow-lg bg-[#5ca4754d] ">
            <h3 className="font-bold mb-2 text-3xl text-green-700">
              Confidence <br />
              Building
            </h3>
            <p className="p-6">
              {" "}
              Develop the confidence to present and describe your work,
              preparing you for future professional environments.
            </p>
          </div>
          <div className="relative border border-green-600 rounded-lg p-5 w-full max-w-[350px] h-[340px] text-center shadow-lg bg-[#5ca4754d]">
            <h3 className="font-bold mb-2 text-3xl text-green-700">
              Career <br /> Preparation
            </h3>
            <p className="p-6">
              Gain practical skills and the ability to communicate your
              achievements, giving you a competitive edge in your career.
            </p>
          </div>
        </div>

        <section className="mx-auto md:px-40 px-10 text-2xl mt-10">
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Join the Empowerment Journey
          </h2>
          <p className="mb-8 ">
            Ready to work alongside experts and bring your ideas to life?
            Embrace the opportunity to develop your skills, gain industry
            insights, and build a portfolio that speaks to your accomplishments.
            Let's empower your future together.
          </p>
          <section className="text-center">
            <button className="bg-green-700 text-white py-4 px-6 rounded-full text-2xl mb-20">
              Start Building Your Confidence
            </button>
          </section>
        </section>
      </div>
    </>
  );
}

export default Empower;
