import React from 'react';
import './About.css';
import {
  FaCode,
  FaBolt,
  FaRocket,
  FaHeadset,
  FaUsers,
  FaBriefcase,
  FaTrophy,
  FaUserFriends,
  FaReact,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";

import { SiTypescript, SiTailwindcss } from "react-icons/si";

import aboutImg from "../../assets/about.png";

function About() {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
    },
    {
      icon: <FaBolt />,
      title: "High Performance",
    },
    {
      icon: <FaRocket />,
      title: "Modern Design",
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Support",
    },
  ];

  const stats = [
    {
      icon: <FaUsers />,
      number: "50+",
      title: "Happy Clients",
    },
    {
      icon: <FaBriefcase />,
      number: "120+",
      title: "Projects Completed",
    },
    {
      icon: <FaTrophy />,
      number: "5+",
      title: "Years of Experience",
    },
    {
      icon: <FaUserFriends />,
      number: "10+",
      title: "Team Members",
    },
  ];

  return (
    <section className="about-section">

      {/* Background Effects */}
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">

        {/* ================= LEFT CONTENT ================= */}

        <div className="about-content">

          <span className="about-subtitle">
            ABOUT US
          </span>

          <div className="about-line"></div>

          <h1>
            We Build Digital
            <br />
            Solutions that
            <br />
            <span>Drive Your Success</span>
          </h1>

          <p className="about-description">
            At Codexa, we are passionate about turning ideas into
            powerful digital experiences. We build modern, scalable
            and user-friendly websites and applications that help
            businesses grow and stand out in the digital world.
          </p>


          {/* FEATURES */}

          <div className="about-features">

            {features.map((feature, index) => (
              <div className="about-feature" key={index}>

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <span>
                  {feature.title}
                </span>

              </div>
            ))}

          </div>


          {/* STATS */}

          <div className="about-stats">

            {stats.map((stat, index) => (
              <div className="about-stat" key={index}>

                <div className="stat-icon">
                  {stat.icon}
                </div>

                <h3>
                  {stat.number}
                </h3>

                <p>
                  {stat.title}
                </p>

              </div>
            ))}

          </div>

        </div>


        {/* ================= RIGHT CONTENT ================= */}

        <div className="about-visual">

          {/* Main Image */}

          <div className="about-image-wrapper">

            <img
              src={aboutImg}
              alt="Codexa Developer"
              className="about-image"
            />

          </div>


          {/* Technology Icons */}

          <div className="tech-icons">

            <div className="tech-icon react-icon">
              <FaReact />
            </div>

            <div className="tech-icon js-icon">
              <FaJsSquare />
            </div>

            <div className="tech-icon ts-icon">
              <SiTypescript />
            </div>

            <div className="tech-icon node-icon">
              <FaNodeJs />
            </div>

            <div className="tech-icon tailwind-icon">
              <SiTailwindcss />
            </div>

          </div>


          {/* Mission Card */}

          <div className="mission-card">

            <div className="mission-icon">
              <FaRocket />
            </div>

            <div className="mission-content">

              <h3>
                Our Mission
              </h3>

              <div className="mission-line"></div>

              <p>
                To deliver innovative digital solutions
                that create real value and drive success.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;