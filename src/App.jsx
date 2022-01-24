import { useContext } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
import ProjectList from "./components/ProjectList/ProjectList";
import About from "./components/about/About";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    const localDarkMode = window.localStorage.getItem("darkMode");
    if (localDarkMode === "true") {
      theme.dispatch({ type: "TOGGLE" });
    }
  }, [theme]);

  return (
    <div
      className="app"
      style={{
        backgroundColor: darkMode && "#1E1650",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <ProjectList />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
