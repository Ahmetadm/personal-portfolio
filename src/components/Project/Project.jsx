import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./Project.scss";

const Project = ({ title, description, demo, img, code, stacks }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card-container">
      <div className="card-bg"></div>
      <div
        className="card"
        style={{
          backgroundColor: darkMode && "#1E1650",
        }}
      >
        <div className="image">
          <img src={`assets/${img}`} alt="" />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <hr />
          <p>{description}</p>

          <h4 className="usedStacks">Stacks</h4>
          <div className="stacks">
            {stacks &&
              stacks.map((stack, idx) => <span key={idx}>{stack}</span>)}
          </div>

          <div className="links">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="mainBtn"
              style={{
                color: darkMode && "white",
              }}
            >
              view Page
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="secondaryBtn"
              style={{
                color: darkMode && "white",
              }}
            >
              view code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
