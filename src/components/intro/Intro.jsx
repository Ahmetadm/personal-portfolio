import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../../context";
import Me from "../../img/me.png";
import DownArrow from "../../img/down.svg";

const Intro = () => {
  const textRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Frontend Developer  ",
        "Professional Trainer ",
        "React Developer ",
        "Professional Mentor ",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div animate={{ scale: 0.5 }} className="right">
        <img src={Me} alt="" />
        <div
          className="imgContainer"
          style={
            {
              // backgroundColor: darkMode && "#281A7F",
            }
          }
        ></div>
      </div>
      <div className="left">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1
            style={{
              color: darkMode ? "#f04290" : "#5927e5",
            }}
          >
            Ahmet Adem
          </h1>
          <h3>
            <span
              style={{
                color: darkMode ? "#ccf381" : "#ed217c",
              }}
              ref={textRef}
            ></span>
          </h3>
        </div>
        <a href="#projects">
          <img src={DownArrow} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
