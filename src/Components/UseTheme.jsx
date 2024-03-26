import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import lightLogo from "../assets/logos/day.png";
import darkLogo from "../assets/logos/night.png";

function UseTheme() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const bg = theme === "light" ? "linear-gradient(#edeef0, #dcf0ff)" : "linear-gradient(#0b0b17, #020119, #101010)";
  const text = theme === "light" ? "black" : "white";

  useEffect(() => {
    document.body.style.backgroundImage = bg;
    document.body.style.color = text;
  }, [theme]);

  return (
    <div>
      <img className="h-10 w-10"
        src={theme === "light" ? lightLogo : darkLogo}
        alt={theme === "light" ? "Light Mode" : "Dark Mode"}
        onClick={toggleTheme}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default UseTheme;

