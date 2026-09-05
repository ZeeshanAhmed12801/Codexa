import React from "react";
import "./Home.css";
import heroImg from "../../assets/hero.png";

import {
  FaBolt,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaCog,
  FaClock,
  FaSmile,
  FaCode,
  FaTrophy,
  FaUserFriends,
} from "react-icons/fa";


function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">

        <div className="hero-left">

          <span className="sub-title">
            WE BUILD DIGITAL SOLUTIONS
          </span>

          <h1>
            Build Modern <br />
            Digital <span>Solutions</span> <br />
            for Your Business
          </h1>

          <p>
            Codexa is a software house that builds fast,
            secure and scalable web applications to grow
            your business.
          </p>

          <div className="hero-btn">

            <button className="btn-primary">
              Start a Project →
            </button>

            <button className="btn-outline">
              View Portfolio →
            </button>

          </div>

        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Hero" />
        </div>

      </section>

      {/* Feature Cards */}

      <section className="features">

        <div className="card">

          <div className="icon blue">
            <FaBolt />
          </div>

          <div>
            <h3>Fast Delivery</h3>
            <p>On-time, Every Time</p>
          </div>

        </div>

        <div className="card">

          <div className="icon green">
            <FaShieldAlt />
          </div>

          <div>
            <h3>Secure Solutions</h3>
            <p>Security First Approach</p>
          </div>

        </div>

        <div className="card">

          <div className="icon purple">
            <FaRocket />
          </div>

          <div>
            <h3>Scalable Growth</h3>
            <p>Built for the Future</p>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="whyChoose">

        <div className="leftSide">

          <span className="smallTitle">
            WHY CHOOSE US
          </span>

          <h2>
            We Deliver More Than Just Code
          </h2>

          <p>
            We combine technology, creativity and strategy to deliver
            digital solutions that drive real results.
          </p>

        </div>

        <div className="rightSide">

          <div className="service">
            <FaUsers className="serviceIcon blue" />
            <h3>Expert Team</h3>
            <p>
              Skilled professionals dedicated to delivering
              high-quality solutions.
            </p>
          </div>

          <div className="service">
            <FaCog className="serviceIcon green" />
            <h3>Custom Solutions</h3>
            <p>
              Tailored solutions designed to solve your
              unique business needs.
            </p>
          </div>

          <div className="service">
            <FaShieldAlt className="serviceIcon purple" />
            <h3>Secure & Reliable</h3>
            <p>
              We build secure, reliable and scalable
              applications.
            </p>
          </div>

          <div className="service">
            <FaClock className="serviceIcon yellow" />
            <h3>On-Time Delivery</h3>
            <p>
              We value your time and ensure timely
              project delivery.
            </p>
          </div>

        </div>

      </section>

      {/* Counter Section */}

      <section className="counterSection">

        <div className="counter">

          <FaSmile className="counterIcon blue" />

          <div>
            <h2>50+</h2>
            <p>Happy Clients</p>
          </div>

        </div>

        <div className="counter">

          <FaCode className="counterIcon green" />

          <div>
            <h2>120+</h2>
            <p>Projects Completed</p>
          </div>

        </div>

        <div className="counter">

          <FaTrophy className="counterIcon purple" />

          <div>
            <h2>5+</h2>
            <p>Years Experience</p>
          </div>

        </div>

        <div className="counter">

          <FaUserFriends className="counterIcon yellow" />

          <div>
            <h2>20+</h2>
            <p>Team Members</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;