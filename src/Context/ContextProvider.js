import React, {
  createContext, useState, useEffect, useMemo,
} from "react";
import PropTypes from "prop-types";

export const Context = createContext();

export function ContextProvider(props) {
  const { children } = props;

  const [theme, setTheme] = useState(() => {
    const storedData = localStorage.getItem("theme");
    return storedData ? JSON.parse(storedData) : "light";
  });

  // Atualizando o localStorage sempre que o estado mudar
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const themeObject = useMemo(() => ({ theme, handleToggleTheme }), [theme, handleToggleTheme]);

  return (
    <Context.Provider value={themeObject}>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
