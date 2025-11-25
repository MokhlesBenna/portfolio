import React from "react";
import person from "../../assets/images/person2.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

/**
 * Introduction.jsx — Hero section focusing on WHO Mokhles is and his UNIQUE VALUE
 * Differentiated from Profile by emphasizing:
 * - Identity and passion (not technical stack)
 * - What drives him (problem-solving, learning)
 * - Big picture impact (not implementation details)
 */

const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "entry-level",
  },
  {
    id: 2,
    title: "Projects",
    description: "6+",
  },
  {
    id: 3,
    title: "Certifications",
    description: "7+",
  },
];

const Introduction = () => {
  return (
    <section
      id="introduction"
      aria-labelledby="intro-heading"
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-24 lg:mb-20 max-xl:gap-2 p-2 max-xxl:px-4"
    >
      {/* Left column: text and stats */}
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-6 transition-all duration-500">
          <h1
            id="intro-heading"
            className="text-3xl xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold w-full leading-tight"
          >
            Hello, I'm
            <span className="block text-primary mt-1">Mokhles Benna</span>
          </h1>

          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-gray-700">
            A final-year Software Engineering student passionate about solving real-world 
            problems through code. I transform ideas into robust, scalable applications 
            that businesses can rely on. Whether it's building from scratch or integrating 
            cutting-edge AI capabilities, I love the challenge of turning complexity into 
            clarity.
          </p>
        </div>

        {/* Summary stats */}
        <div className="mx-auto lg:mx-0 relative mt-8">
          <div className="grid grid-cols-3 gap-3 w-fit">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Right column: portrait */}
      <div className="max-w-[420px] w-full h-full max-lg:mx-auto aspect-[536/636] relative mt-6 lg:mt-0">
        <img
          src={person}
          alt="Mokhles Benna — portrait"
          className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Introduction;