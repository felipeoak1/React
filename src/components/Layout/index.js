import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "styled-components";

import Header from "../Header";
import Footer from "../Footer";
import { Nav } from "./styles";

import Routes from "../../Routes";

export default function Layout() {
// Para utilizarmos o useTheme não é necessário passarmos o contexto igual acontece na ContextAPI,
// o styled components já realiza esta função.
  const theme = useTheme();

  return (
    <>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Post</Link>
        <Link to="/posts/:id">Post</Link>
      </Nav>
      <Routes />
      {/* <Footer /> */}
    </>
  );
}
