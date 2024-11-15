import React from "react";

export const data=[
  {
    title:"Professional Mentorship",
    desc:" Work with experienced professionals who provide guidance,feedback, and real-world insights."
  },
 {
  title:"    Confidence Building",
  desc:" Develop the confidence to present and describe your work,preparing you for future professional environments."

 },
 {
  title:" Career Preparation",
    desc:" Gain practical skills and the ability to communicate your achievements, giving you a competitive edge in your career."

 }
]

function Empower() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto md:px-40 px-10 md:text-2xl text-xl  ">
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
            {data.map((vision,index)=>(
             <div className="relative border border-green-600 rounded-lg p-3 w-full max-w-[280px] h-[290px] text-center shadow-lg bg-[#5ca4754d] text-xl" key={index}>
            <h3 className="font-bold  text-3xl text-green-700">
              {vision.title}
            </h3>
            <p className="p-6">
              Work with experienced professionals who provide guidance,
              feedback, and real-world insights.
            </p>
          </div>
        ))}
         
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
            <button className="bg-green-700 text-white md:py-4 py-1   md:px-6 px-2 rounded-full md:text-2xl text-[15px] mb-20">
              Start Building Your Confidence
            </button>
          </section>
        </section>
      </div>
    </>
  );
}

export default Empower;
