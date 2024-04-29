import React, { useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { Context } from "../../Context/ContextProvider";

import { Container } from "./styles";

export default function Header() {
  const history = useHistory();

  const { handleToggleTheme, theme: selectedTheme } = useContext(Context);

  useEffect(() => {
    console.debug(selectedTheme);

    return () => {
      console.log("Componente <Layout /> saiu da tela.");
    };
  }, [selectedTheme]);

  function handleNavigate() {
    history.push("/");
  }

  return (
    <Container>
      <h1>JStack&apos;s Blog</h1>
      <button type="button" onClick={() => handleToggleTheme()}>
        {selectedTheme === "light" ? "🌞" : "🌚"}
      </button>
      <button type="submit" onClick={handleNavigate}>Voltar para a home</button>
    </Container>
  );
}
