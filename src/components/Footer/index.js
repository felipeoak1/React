import React, { useContext } from "react";

import { Context } from "../../Context/ContextProvider";

import { Container } from "./styles";

export default function Footer() {
  const { theme: selectedTheme, handleToggleTheme } = useContext(Context);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={() => handleToggleTheme()}>
        {selectedTheme === "light" ? "🌞" : "🌚"}
      </button>
    </Container>
  );
}
