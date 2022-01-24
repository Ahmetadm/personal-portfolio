import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./about.scss";
import Memoji from "../../img/memoji.PNG";
import { aboutMe } from "../../data";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about" id="about">
      <div className="a">
        <div className="a-left">
          <div
            className="a-card bg"
            style={{
              backgroundColor: darkMode && "#281A7F",
            }}
          ></div>
          <div className="a-card">
            <img src={Memoji} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h2 className="a-title">About Me</h2>
          {aboutMe.p1.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
          {aboutMe.stacks.map((stack, idx) => (
            <span key={idx}>{stack}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
