import React from "react";
import Roles from "./Roles";

/*
  Profession / Services updated to reflect Mokhles' real skills:
  - Backend (Java / Spring Boot)
  - Frontend (Angular / React)
  - Fullstack/Web Development, CI/CD & Cloud basics
*/

const rolesData = [
  {
    id: 1,
    title: "Backend Development (Java · Spring Boot)",
    description:
      "Design and implement RESTful APIs, business logic and data models using Java and Spring Boot. Emphasis on clean architecture, unit testing, and scalable services.",
  },
  {
    id: 2,
    title: "Frontend Development (Angular · React)",
    description:
      "Build responsive and maintainable frontends using component-driven architectures (Angular / React). Focus on accessibility, performance and clean UX.",
  },
  {
    id: 3,
    title: "Fullstack & DevOps Basics",
    description:
      "End-to-end delivery: database design (MySQL/Postgres), CI/CD pipelines, Docker-based deployments and basic cloud integrations (AWS fundamentals).",
  },
];

const Profession = () => {
  return (
    <section
      id="services"
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-16 max-md:text-center my-auto">
        <p id="services-heading" className="section-title max-md:text-center">
          What I do
        </p>

        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I deliver production-ready software and tooling across the stack —
            from backend services to frontend applications and CI/CD pipelines.
          </p>

          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My engineering approach combines rigorous testing, clear APIs and
            practical UX to build maintainable systems that solve real-world
            problems.
          </p>
        </div>

        <a
          href="mailto:bennamokhles@gmail.com"
          className="mt-5 md:mt-8 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[14px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>

      <div>
        {rolesData.map((role) => (
          <Roles role={role} key={role.id} />
        ))}
      </div>
    </section>
  );
};

export default Profession;
