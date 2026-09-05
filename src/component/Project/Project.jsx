import React from "react";
import "./Project.css";
import {
  FaGlobe,
  FaShoppingCart,
  FaChartBar,
  FaMobileAlt,
  FaRobot,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    id: "01",
    category: "E-Commerce",
    title: "E-Commerce Website",
    desc: "A full-featured online shopping platform with cart, checkout and secure payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: "02",
    
    category: "Web Development",
    title: "Codexa Agency Website",
    desc: "Modern software house website with animations, responsive layout and premium UI.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: "03",

    category: "Restaurant",
    title: "Restaurant Website",
    desc: "Responsive restaurant website with online booking and elegant food showcase.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "04",
    category: "Portfolio",
    title: "Portfolio Website",
    desc: "Creative developer portfolio with modern dark theme and smooth animations.",
    tech: ["React", "CSS", "Framer Motion"],
  },
  {
    id: "05",
    category: "Dashboard",
    title: "Admin Dashboard",
    desc: "Analytics dashboard with beautiful charts, tables and user management.",
    tech: ["React", "Chart.js", "Firebase"],
  },
  {
    id: "06",
    category: "AI",
    title: "AI Chat Application",
    desc: "Real-time AI chatbot interface with clean UI and modern interactions.",
    tech: ["React", "OpenAI API", "Socket.io"],
  },
];

function Project() {
  return (
    <section className="projects">

      <div className="container">

        <div className="heading">

          <span>OUR PROJECTS</span>

          <h2>
            Recent <span>Projects</span>
          </h2>

          <p>
            Explore some of our latest web applications and digital
            solutions crafted with modern technologies and exceptional
            user experience.
          </p>

          <div className="line"></div>

        </div>

        <div className="categories">

          <button className="active">
            <FaGlobe /> All Projects
          </button>

          <button>
            <FaGlobe /> Web Development
          </button>

          <button>
            <FaShoppingCart /> E-Commerce
          </button>

          <button>
            <FaChartBar /> Dashboard
          </button>

          <button>
            <FaMobileAlt /> Mobile Apps
          </button>

          <button>
            <FaRobot /> AI Solutions
          </button>

        </div>

        <div className="project-grid">

          {projects.map((project) => (

            <div className="card" key={project.id}>

              <div className="image">

                <img src={project.image} alt="" />

                <span className="number">{project.id}</span>

                <span className="tag">{project.category}</span>

              </div>

              <div className="content">

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="tech">

                  {project.tech.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}

                </div>

                <div className="buttons">

                  <button className="demo">
                    Live Demo
                    <FaExternalLinkAlt />
                  </button>

                  <button className="github">
                    GitHub
                    <FaGithub />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="view-all">
          <button>
            View All Projects →
          </button>
        </div>

      </div>

    </section>
  );
}

export default Project;