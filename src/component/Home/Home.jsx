import React, { useEffect, useRef, useState } from "react";
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
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const homeRef = useRef(null);

  const counterData = [
    {
      number: 50,
      title: "Happy Clients",
      icon: <FaSmile />,
      color: "blue",
    },
    {
      number: 120,
      title: "Projects Completed",
      icon: <FaCode />,
      color: "green",
    },
    {
      number: 5,
      title: "Years Experience",
      icon: <FaTrophy />,
      color: "purple",
    },
    {
      number: 20,
      title: "Team Members",
      icon: <FaUserFriends />,
      color: "yellow",
    },
  ];

  /* Scroll Animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* Counter Animation */
  useEffect(() => {
    if (!visible) return;

    const duration = 1800;
    const startTime = performance.now();

    const animateCounters = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      setCounts(
        counterData.map((item) =>
          Math.floor(progress * item.number)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [visible]);

  return (
    <main ref={homeRef} className="home">

      {/* ================= HERO ================= */}

      <section className="hero">

        {/* Background Effects */}
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-grid"></div>

        {/* Left */}
        <div className="hero-left">

          <div className="hero-badge">
            <span></span>
            WE BUILD DIGITAL SOLUTIONS
          </div>

          <h1>
            Build Modern
            <br />

            Digital{" "}
            <span>Solutions</span>

            <br />

            for Your Business
          </h1>

          <p>
            Codexa is a software house that builds fast,
            secure and scalable web applications to help
            businesses grow and succeed in the digital world.
          </p>

          <div className="hero-btn">

            <a href="#contact" className="btn-primary">
              Start a Project
              <FaArrowRight />
            </a>

            <a href="#projects" className="btn-outline">
              View Portfolio
              <FaArrowRight />
            </a>

          </div>

          {/* Small Trust Text */}
          <div className="hero-trust">
            <span>✓</span>
            Modern Technology
            <span>✓</span>
            Reliable Solutions
            <span>✓</span>
            Client Focused
          </div>

        </div>

        {/* Right */}
        <div className="hero-right">

          <div className="hero-image-glow"></div>

          <div className="hero-image-wrapper">

            <div className="hero-ring"></div>

            <img
              src={heroImg}
              alt="Codexa Digital Solutions"
            />

          </div>

          {/* Floating Cards */}

          <div className="floating-card card-one">
            <FaRocket />
            <div>
              <strong>Fast & Scalable</strong>
              <span>Digital Solutions</span>
            </div>
          </div>

          <div className="floating-card card-two">
            <FaShieldAlt />
            <div>
              <strong>Secure</strong>
              <span>Technology</span>
            </div>
          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features">

        <div className="features-container">

          <div className="feature-card">
            <div className="feature-icon blue">
              <FaBolt />
            </div>

            <div>
              <h3>Fast Delivery</h3>
              <p>On-time, Every Time</p>
            </div>
          </div>


          <div className="feature-card">
            <div className="feature-icon green">
              <FaShieldAlt />
            </div>

            <div>
              <h3>Secure Solutions</h3>
              <p>Security First Approach</p>
            </div>
          </div>


          <div className="feature-card">
            <div className="feature-icon purple">
              <FaRocket />
            </div>

            <div>
              <h3>Scalable Growth</h3>
              <p>Built for the Future</p>
            </div>
          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section
        className={`whyChoose ${
          visible ? "section-visible" : ""
        }`}
      >

        <div className="whyChoose-container">

          {/* Left */}

          <div className="leftSide">

            <span className="smallTitle">
              WHY CHOOSE US
            </span>

            <h2>
              We Deliver More
              <span> Than Just Code</span>
            </h2>

            <p>
              We combine technology, creativity and strategy
              to deliver digital solutions that drive real
              business results.
            </p>

            <a href="#contact" className="why-btn">
              Work With Us
              <FaArrowRight />
            </a>

          </div>


          {/* Right */}

          <div className="rightSide">

            <div className="service">
              <div className="service-top">
                <FaUsers className="serviceIcon blue" />
                <span>01</span>
              </div>

              <h3>Expert Team</h3>

              <p>
                Skilled professionals dedicated to delivering
                high-quality digital solutions.
              </p>
            </div>


            <div className="service">
              <div className="service-top">
                <FaCog className="serviceIcon green" />
                <span>02</span>
              </div>

              <h3>Custom Solutions</h3>

              <p>
                Tailored solutions designed around your
                unique business needs.
              </p>
            </div>


            <div className="service">
              <div className="service-top">
                <FaShieldAlt className="serviceIcon purple" />
                <span>03</span>
              </div>

              <h3>Secure & Reliable</h3>

              <p>
                We build secure, reliable and scalable
                applications.
              </p>
            </div>


            <div className="service">
              <div className="service-top">
                <FaClock className="serviceIcon yellow" />
                <span>04</span>
              </div>

              <h3>On-Time Delivery</h3>

              <p>
                We value your time and ensure timely
                project delivery.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= COUNTERS ================= */}

      <section className="counterSection">

        <div className="counter-container">

          {counterData.map((item, index) => (
            <div
              className="counter"
              key={item.title}
            >

              <div className={`counterIcon ${item.color}`}>
                {item.icon}
              </div>

              <div>
                <h2>
                  {counts[index]}+
                </h2>

                <p>{item.title}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Home;