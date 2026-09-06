import React, { useEffect, useRef, useState } from "react";
import "./Project.css";

import {
  FaGlobe,
  FaShoppingCart,
  FaChartBar,
  FaMobileAlt,
  FaRobot,
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

const projects = [
  {
    id: "01",
    category: "E-Commerce",
    title: "E-Commerce Website",
    desc: "A full-featured online shopping platform with cart, checkout and secure payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: <FaShoppingCart />,
  },
  {
    id: "02",
    category: "Web Development",
    title: "Codexa Agency Website",
    desc: "Modern software house website with animations, responsive layout and premium UI.",
    tech: ["React", "Tailwind", "Framer Motion"],
    icon: <FaGlobe />,
  },
  {
    id: "03",
    category: "Restaurant",
    title: "Restaurant Website",
    desc: "Responsive restaurant website with online booking and elegant food showcase.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: <FaGlobe />,
  },
  {
    id: "04",
    category: "Portfolio",
    title: "Portfolio Website",
    desc: "Creative developer portfolio with modern dark theme and smooth animations.",
    tech: ["React", "CSS", "Framer Motion"],
    icon: <FaGlobe />,
  },
  {
    id: "05",
    category: "Dashboard",
    title: "Admin Dashboard",
    desc: "Analytics dashboard with beautiful charts, tables and user management.",
    tech: ["React", "Chart.js", "Firebase"],
    icon: <FaChartBar />,
  },
  {
    id: "06",
    category: "AI",
    title: "AI Chat Application",
    desc: "Real-time AI chatbot interface with clean UI and modern interactions.",
    tech: ["React", "OpenAI API", "Socket.io"],
    icon: <FaRobot />,
  },
];

function Project() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`projects ${visible ? "show" : ""}`}
    >
      <div className="container">

        {/* Heading */}
        <div className="heading">

          <span>MY RECENT WORK</span>

          <h2>
            Featured <strong>Projects</strong>
          </h2>

          <p>
            Explore some of my latest web applications and digital
            solutions crafted with modern technologies and exceptional
            user experiences.
          </p>

          <div className="line"></div>

        </div>


        {/* Categories */}
        <div className="categories">

          <button className="active">
            <FaGlobe />
            All Projects
          </button>

          <button>
            <FaGlobe />
            Web Development
          </button>

          <button>
            <FaShoppingCart />
            E-Commerce
          </button>

          <button>
            <FaChartBar />
            Dashboard
          </button>

          <button>
            <FaMobileAlt />
            Mobile Apps
          </button>

          <button>
            <FaRobot />
            AI Solutions
          </button>

        </div>


        {/* Project Grid */}
        <div className="project-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={project.id}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >

              {/* Project Preview */}
              <div className="image">

                <div className="preview-content">
                  <div className="preview-icon">
                    {project.icon}
                  </div>

                  <span>
                    {project.category}
                  </span>
                </div>

                <span className="number">
                  {project.id}
                </span>

                <span className="tag">
                  {project.category}
                </span>

              </div>


              {/* Content */}
              <div className="content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.desc}
                </p>


                {/* Technologies */}
                <div className="tech">

                  {project.tech.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>


                {/* Buttons */}
                <div className="buttons">

                  <a
                    href="#"
                    className="demo"
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>

                  <a
                    href="#"
                    className="github"
                  >
                    GitHub
                    <FaGithub />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* View All */}
        <div className="view-all">

          <button>
            View All Projects
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
}

export default Project;