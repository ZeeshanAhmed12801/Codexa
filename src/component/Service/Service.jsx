import React from "react";
import "./Service.css";
import {
  FaCode,
  FaDesktop,
  FaMobileAlt,
  FaRocket,
  FaCog,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Building responsive, fast and modern websites and web applications using the latest technologies.",
    color: "text-violet-500 border-violet-500/40 bg-violet-500/10",
    link: "text-violet-500",
  },
  {
    icon: <FaDesktop />,
    title: "UI/UX Design",
    desc: "Designing beautiful, user-friendly and intuitive interfaces that provide the best user experience.",
    color: "text-green-500 border-green-500/40 bg-green-500/10",
    link: "text-green-500",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    desc: "Creating cross-platform mobile applications for Android and iOS that users love.",
    color: "text-yellow-400 border-yellow-400/40 bg-yellow-400/10",
    link: "text-yellow-400",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "Improving website speed, performance and SEO to ensure the best results for your business.",
    color: "text-blue-500 border-blue-500/40 bg-blue-500/10",
    link: "text-blue-500",
  },
  {
    icon: <FaCog />,
    title: "Custom Solutions",
    desc: "Providing custom solutions tailored to your business needs to help you achieve your goals.",
    color: "text-pink-500 border-pink-500/40 bg-pink-500/10",
    link: "text-pink-500",
  },
  {
    icon: <FaHeadset />,
    title: "Maintenance & Support",
    desc: "Offering reliable maintenance and support to keep your website and applications running smoothly.",
    color: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    link: "text-cyan-400",
  },
];

function Service() {
  return (
    <section className="service-section">
      <div className="service-container">

        {/* Heading */}

        <div className="service-heading">
          <p className="service-subtitle">Services</p>

          <h2 className="service-title">
            What I <span>Do</span>
          </h2>

          <p className="service-description">
            I help businesses and individuals bring their ideas to life with
            modern, scalable and high-performance solutions.
          </p>

          <div className="service-line"></div>
        </div>

        {/* Cards */}

        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">

              <div className={`service-icon ${service.color}`}>
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <button className={`service-btn ${service.link}`}>
                Read More
                <FaArrowRight />
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;