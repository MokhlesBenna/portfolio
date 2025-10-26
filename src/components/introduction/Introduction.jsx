import React from "react";
import person from "../../assets/images/person2.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

/*
  Introduction.jsx — cleaned up and defensive:
  - No undeclared variables (no 'index' used).
  - Accessible headings and buttons.
  - Uses information summary data sourced from the CV/profile.
  - Email and copy reflect CV supplied by the user.
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
    description: "4",
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
            Hello, I’m
            <span className="block text-primary mt-1">Mokhles Benna</span>
          </h1>

          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-gray-700">
            I’m a final-year Software Engineering student and Fullstack Developer
            (Spring Boot · Angular).
             I build production-ready web
            applications and POCs integrating GenAI, dashboards and cloud-native
            practices. I focus on clean architecture, measurable performance,
            and shipping reliable software.
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
