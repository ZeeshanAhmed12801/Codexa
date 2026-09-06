import React, { useEffect, useRef, useState } from "react";
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
    color: "violet",
  },
  {
    icon: <FaDesktop />,
    title: "UI/UX Design",
    desc: "Designing beautiful, user-friendly and intuitive interfaces that provide the best user experience.",
    color: "green",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    desc: "Creating cross-platform mobile applications for Android and iOS with smooth performance.",
    color: "yellow",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "Improving website speed, performance and SEO to ensure better results for your business.",
    color: "blue",
  },
  {
    icon: <FaCog />,
    title: "Custom Solutions",
    desc: "Providing custom digital solutions tailored to your business needs and requirements.",
    color: "pink",
  },
  {
    icon: <FaHeadset />,
    title: "Maintenance & Support",
    desc: "Offering reliable maintenance and support to keep your website and applications running smoothly.",
    color: "cyan",
  },
];

function Service() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`service-section ${visible ? "show" : ""}`}
    >
      {/* Background Glow */}
      <div className="service-glow glow-one"></div>
      <div className="service-glow glow-two"></div>

      <div className="service-container">

        {/* Heading */}
        <div className="service-heading">
          <p className="service-subtitle">WHAT I OFFER</p>

          <h2 className="service-title">
            My <span>Services</span>
          </h2>

          <div className="service-line"></div>

          <p className="service-description">
            I help businesses and individuals transform their ideas into
            modern, scalable and high-performance digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="service-grid">

          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card ${service.color}`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >

              {/* Number */}
              <div className="service-top">
                <span className="service-number">
                  0{index + 1}
                </span>

                <FaArrowRight className="service-top-arrow" />
              </div>

              {/* Icon */}
              <div className="service-icon">
                {service.icon}
              </div>

              {/* Title */}
              <h3>{service.title}</h3>

              {/* Description */}
              <p>{service.desc}</p>

              {/* Read More */}
              <div className="service-btn">
                <span>Learn More</span>
                <FaArrowRight />
              </div>

              {/* Bottom Line */}
              <div className="card-line"></div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="service-cta">
          <p>
            Have an idea in mind?
            <a href="#contact">
              Let's build something amazing together
              <FaArrowRight />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Service;