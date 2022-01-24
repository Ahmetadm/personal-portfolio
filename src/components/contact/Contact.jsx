import "./contact.scss";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";

import { useContext, useRef, useState } from "react";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import { ThemeContext } from "../../context";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9qqq96h",
        "template_zaquecs",
        formRef.current,
        "user_VccaDyk6t4T4qvGWPVJD5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact">
      {/* <div className="c-bg"></div> */}
      <div className="c-wrapper">
        <div className="c-left">
          <h2 className="c-title">Let's discuss your project</h2>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <a
                href="tel:+38972321268"
                style={{
                  color: darkMode && "white",
                }}
              >
                +389 72 321 268
              </a>
            </div>

            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a
                href="mailto:contact@ahmetadm.dev"
                style={{
                  color: darkMode && "white",
                }}
              >
                contact@ahmetadm.dev
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Linkedin} alt="" />
              <a
                href="https://linkedin.com/in/ahmetadem"
                style={{
                  color: darkMode && "white",
                }}
              >
                linkedin/ahmetadem
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Github} alt="" />
              <a
                href="https://github.com/ahmetadm"
                style={{
                  color: darkMode && "white",
                }}
              >
                github/ahmetadm
              </a>
            </div>

            <div className="c-info-item">
              <img className="c-icon" src={Instagram} alt="" />
              <a
                href="https://Instagram.com/ahmetadm"
                style={{
                  color: darkMode && "white",
                }}
              >
                instagram/ahmetadm
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              style={{
                backgroundColor: darkMode && "#281A7F",
                color: darkMode && "white",
              }}
              placeholder="Name"
              name="user_name"
              required
            />

            <input
              type="text"
              style={{
                backgroundColor: darkMode && "#281A7F",
                color: darkMode && "white",
              }}
              placeholder="Subject"
              name="user_subject"
              required
            />

            <input
              type="text"
              style={{
                backgroundColor: darkMode && "#281A7F",
                color: darkMode && "white",
              }}
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              rows="7"
              style={{
                backgroundColor: darkMode && "#281A7F",
                color: darkMode && "white",
              }}
              placeholder="Message"
              name="message"
              required
            />
            {done && (
              <p style={{ marginBottom: "10px", color: "green" }}>
                Thank you for your message, I will reply as soon as possible
              </p>
            )}
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
