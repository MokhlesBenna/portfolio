import React from "react";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <main className="relative" id="home">
      {/* Hero / Intro + Profile card */}
      <section className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </section>

      {/* Work process */}
      <section className="bg-soft-white pt-10">
        <WorkProcess />
      </section>

      {/* Portfolio */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Collaboration / Call to action */}
      <section className="bg-gray-900">
        <WorkTogether />
      </section>

      {/* Blog */}
      <section className="blog-background">
        <Blog />
      </section>

      {/* Profession / Skills */}
      <section className="bg-soft-white">
        <Profession />
      </section>

      {/* Testimonials & clients */}
      <section>
        <HappyClients />
      </section>

      <section>
        <Testimonial />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
