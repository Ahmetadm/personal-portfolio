import "./topbar.scss";
import { Instagram, GitHub, LinkedIn } from "@material-ui/icons";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <span
              style={{
                color: darkMode && "#ccf381",
              }}
            >
              adm.
            </span>{" "}
          </a>

          <div className="itemContainer">
            <a href="http://instagram.com/ahmetadm" target="_blank">
              <Instagram
                className="s-icon"
                style={{
                  color: darkMode && "white",
                }}
              />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://linkedin.com/in/ahmetadem" target="_blank">
              <LinkedIn
                className="s-icon"
                style={{
                  color: darkMode && "white",
                }}
              />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/ahmetadm" target="_blank">
              <GitHub
                className="s-icon"
                style={{
                  color: darkMode && "white",
                }}
              />
            </a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span
              className="line1"
              style={{
                backgroundColor: darkMode && "#ccf381",
              }}
            ></span>
            <span
              className="line2"
              style={{
                backgroundColor: darkMode && "#ccf381",
              }}
            ></span>
            <span
              className="line3"
              style={{
                backgroundColor: darkMode && "#ccf381",
              }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
