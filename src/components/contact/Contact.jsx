import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";



// Values taken from your CV: location, email, phone. (See CV for full details.) :contentReference[oaicite:1]{index=1}
const addressData = [
  {
    icon: faLocationDot,
    title: "Location",
    description: "Tunisia",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "bennamokhles@gmail.com",
    href: "mailto:bennamokhles@gmail.com",
  },
  {
    icon: faPhone,
    title: "Phone",
    description: "+216 26 653 094",
    href: "tel:+21626653094",
  },
];

const Contact = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative z-10 px-4">
      <div className="content p-4 md:p-10 lg:p-16 bg-white rounded-2xl shadow-md">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <div className="lg:w-1/2">
            <h2 id="contact-heading" className="text-3xl font-semibold text-[#132238]">
              Let's discuss your project
            </h2>
            <p className="mt-3 text-sm sm:text-base text-soft-dark">
              I'm available for freelance work and internship opportunities. If you have a project
              where I can contribute — frontend, backend, or fullstack — please get in touch.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>

            <div className="mt-6">
              <SocialMedia />
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <h3 className="text-2xl font-semibold text-[#132238] lg:hidden text-center">
              Let's discuss your project
            </h3>
            <div className="mt-4">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
