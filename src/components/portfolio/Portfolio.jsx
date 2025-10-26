import React from "react";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

/*
  Portfolio items updated to reflect projects described in the CV:
  - Skills management POC (Sofrecom)
  - ERP fleet module (Spisoft)
  - Desktop -> Web migration (Univers Soft)
  - plus 3 representative UI/UX / dashboard projects.
  Links point to GitHub or placeholders — change to real URLs if available.
*/

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Fullstack · POC",
    title: "Dynamic Skills Management — POC",
    description:
      "Proof-of-concept for dynamic skills management using Spring Boot, Angular, MySQL and GenAI-driven recommendations (Sofrecom internship).",
    link: "https://github.com/MokhlesBenna",
  },
  {
    id: 2,
    image: card2,
    category: "Backend · ERP",
    title: "Fleet Management Module (ERP)",
    description:
      "Java-based ERP module for fleet management — design, implementation and unit testing focused on performance and scalability (Spisoft).",
    link: "https://github.com/MokhlesBenna",
  },
  {
    id: 3,
    image: card3,
    category: "Migration · Web",
    title: "Desktop → Web Migration",
    description:
      "Migrated a desktop application to a modern web stack (React/Node) to enable responsive, browser-based workflows (Univers Soft).",
    link: "https://github.com/MokhlesBenna",
  },
  {
    id: 4,
    image: card4,
    category: "UI · Dashboard",
    title: "Admin Dashboard",
    description:
      "Interactive admin dashboard with charts and filters to visualize operational metrics — focused on usability and quick insights.",
    link: "https://github.com/MokhlesBenna",
  },
  {
    id: 5,
    image: card5,
    category: "Web · Frontend",
    title: "Landing & Marketing Site",
    description:
      "Responsive marketing site built with modern CSS and component-driven React/Angular architecture.",
    link: "https://github.com/MokhlesBenna",
  },
  {
    id: 6,
    image: card6,
    category: "Tooling",
    title: "CI/CD & Deployments",
    description:
      "Configured CI/CD pipelines and containerized deployments for reliable releases and automated tests.",
    link: "https://github.com/MokhlesBenna",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      aria-labelledby="portfolio-heading"
    >
      <div className="xl:mb-12 mb-5 text-center mx-auto max-w-3xl">
        <p id="portfolio-heading" className="section-title">
          Portfolio
        </p>
        <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
          A curated selection of projects from internships and personal work:
          backend systems, web migrations, dashboards and POCs demonstrating
          fullstack skills and production-ready engineering.
        </p>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data) => (
            <Projects data={data} key={data.id} />
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="https://github.com/MokhlesBenna"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-3 px-6 mt-6 text-[16px] font-semibold"
        >
          See more on GitHub
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
