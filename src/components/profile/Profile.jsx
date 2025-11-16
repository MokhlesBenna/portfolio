import React from "react";
import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

/**
 * Profile.jsx — Deep dive into HOW Mokhles works and his TECHNICAL APPROACH
 * Differentiated from Introduction by focusing on:
 * - Specific technologies and methodologies
 * - Work philosophy and approach
 * - Concrete experience areas (GenAI, CI/CD, databases)
 * - Contact information and availability
 */

const Profile = () => {
  return (
    <article
      id="profile"
      aria-labelledby="profile-heading"
      className="relative mx-4 xxl:mx-0 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white shadow-xl xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Profile image + social */}
        <div className="flex-shrink-0 max-w-[320px] w-full">
          <div className="rounded-xl overflow-hidden bg-soft-white">
            <img
              src={person}
              alt="Mokhles Benna — Software Engineer"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <div className="px-6 py-3 bg-white rounded-md shadow-md">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Text / CTAs */}
        <div className="w-full md:pl-8">
          <h4
            id="profile-heading"
            className="text-2xl sm:text-4xl lg:text-[38px] font-semibold mb-4"
          >
            Software Engineer
          </h4>

          <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-3">
            <p>
              My approach combines <strong>modern backend architecture</strong> (Spring Boot, 
              RESTful APIs, microservices) with <strong>dynamic frontend experiences</strong> 
              (Angular, responsive design) to deliver full-stack solutions that scale.
            </p>
            
            <p>
              I specialize in integrating <strong>Generative AI capabilities</strong> into 
              traditional applications, building <strong>real-time dashboards</strong> for 
              data-driven insights, and implementing <strong>CI/CD pipelines</strong> that 
              ensure code quality from development through production.
            </p>

            <p>
              My work spans <strong>PostgreSQL, MySQL, and MongoDB</strong> for data 
              persistence, <strong>Docker for containerization</strong>, and modern DevOps 
              practices. I believe in writing clean, maintainable code that solves actual 
              business problems—not just technical exercises.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="btn btn-primary px-6 py-3 text-sm"
              href="#portfolio"
              aria-label="View projects"
            >
              My Projects
            </a>

            <a
              className="btn border px-6 py-3 text-sm flex items-center gap-2"
              href="/Mokhles_Benna_CV.pdf"
              download="Mokhles_Benna_CV.pdf"
              aria-label="Download Mokhles Benna CV"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </a>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-700">
            <li>
              <strong>Location:</strong> Tunisia
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:bennamokhles@gmail.com" className="underline">
                bennamokhles@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+21626653094" className="underline">
                +216 26 653 094
              </a>
            </li>
            <li>
              <strong>Available:</strong> Actively open to end-of-studies internships
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Profile;