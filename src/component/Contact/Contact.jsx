import React from "react";
import "./Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaFileAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaLaptopCode,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">

      {/* Background Glow */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">

        {/* =====================================
            LEFT SIDE
        ===================================== */}

        <div className="contact-left">

          <span className="contact-subtitle">
            CONTACT US
          </span>

          <div className="contact-line"></div>

          <h1>
            Let's Build Something
            <br />
            Amazing <span>Together</span>
          </h1>

          <p className="contact-description">
            Have a project in mind or want to work together?
            We'd love to hear from you. Fill out the form or
            reach out using the details below.
          </p>


          {/* Contact Information */}

          <div className="contact-info">

            {/* Email */}

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>
                <p>info@codexa.com</p>
              </div>

            </div>


            {/* Phone */}

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FaPhone />
              </div>

              <div>
                <h3>Phone</h3>
                <p>+92 300 1234567</p>
              </div>

            </div>


            {/* Location */}

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>
                <p>Lahore, Pakistan</p>
              </div>

            </div>

          </div>


          {/* Social Media */}

          <div className="social-section">

            <h3>Follow Us</h3>

            <div className="social-icons">

              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>


        {/* =====================================
            RIGHT SIDE
        ===================================== */}

        <div className="contact-right">

          {/* Decorative Envelope */}

          <div className="floating-envelope">
            <FaEnvelope />
          </div>

          {/* Decorative Plane */}

          <div className="floating-plane">
            <FaPaperPlane />
          </div>


          {/* Code Workspace */}

          <div className="workspace">

            <div className="workspace-glow"></div>

            <div className="code-screen">

              <div className="screen-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="screen-content">

                <div className="code-title">
                  Contact Us
                </div>

                <div className="code-line line-one"></div>
                <div className="code-line line-two"></div>
                <div className="code-line line-three"></div>
                <div className="code-line line-four"></div>

                <div className="mini-form">

                  <div></div>
                  <div></div>
                  <div></div>

                </div>

                <button>
                  Send Message →
                </button>

              </div>

            </div>

            {/* Laptop Base */}

            <div className="laptop-base">
              <div className="laptop-trackpad"></div>
            </div>


            {/* Codexa Mug */}

            <div className="code-mug">
              CODEXA
            </div>


            {/* Notebook */}

            <div className="code-notebook">
              CODEXA
            </div>

          </div>


          {/* =====================================
              CONTACT FORM
          ===================================== */}

          <div className="contact-form-card">

            <div className="form-heading">

              <div className="form-icon">
                <FaPaperPlane />
              </div>

              <div>
                <h2>
                  Send Us a Message
                </h2>

                <div className="form-line"></div>
              </div>

            </div>


            <form>

              {/* Name + Email */}

              <div className="form-row">

                <div className="input-box">

                  <FaUser />

                  <input
                    type="text"
                    placeholder="Your Name"
                  />

                </div>


                <div className="input-box">

                  <FaEnvelope />

                  <input
                    type="email"
                    placeholder="Your Email"
                  />

                </div>

              </div>


              {/* Subject */}

              <div className="input-box full-input">

                <FaFileAlt />

                <input
                  type="text"
                  placeholder="Subject"
                />

              </div>


              {/* Message */}

              <div className="input-box textarea-box">

                <FaPaperPlane />

                <textarea
                  placeholder="Your Message"
                ></textarea>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="send-button"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;