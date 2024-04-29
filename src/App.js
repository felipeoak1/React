import React, {
  useMemo, useContext, useEffect, useRef, useState,
} from "react";

import { ThemeProvider } from "styled-components";
import { Context } from "./Context/ContextProvider";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes";

function App() {
  const { theme } = useContext(Context);

  // Com o useRef estamos mantendo o valor da propriedade sem renderizarmos o componente novamente.
  const firstRender = useRef(true);

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  // O useEffect só executará quando houver uma alteração de estado, não executará nem na primeira vez.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    console.debug("useEffect não executou na primeira componentização, só quando o estado ou as props foram alteradas.");
  }, [theme]);

  // Toda vez que o componente for renderizado, o useEffect executará a função passada.
  useEffect(() => {
    console.debug("useEffect executou");
  });

  // O useEffect executará a função passada uma vez depois que o mount do componente for concluído.
  useEffect(() => {
    console.debug("useEffect executou uma vez depois do mount");
  }, []);

  // O useEffect executará a função passada toda vez que um state ou uma prop que passarmos for alterada.
  useEffect(() => {
    console.debug("useEffect executou porque o state ou a prop foram alterados");
  }, [theme]);

  // Sua sintaxe e funcionamento são os mesmos do useEffect, entretanto, a diferença aqui ocorre no seu lifecyle, o useLayoutEffect é executado antes do React realizar a componetização em tela, ou seja, o React procurará por useLayoutEffects para executar ele antes de renderizar o componente em tela.
  // OBS: Ele é um hook síncrono, o React não irá renderizar nada em tela enquanto ele não for finalizado. (NÃO UTILIZAR ESTE HOOK)

  // useLayoutEffect(() => {
  //   for (let i = 0; i <= 15000; i++) {
  //     console.log(i)
  //   }
  // })

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
