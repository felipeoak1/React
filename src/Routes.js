import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Home from "./pages/home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transforme: "translateY(50px)", position: "absolute" },
    enter: { opacity: 1, transforme: "translateY(0px)", position: "absolute" },
    leave: { opacity: 0, transforme: "translateY(50px)", position: "absolute" },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
        {/* <Route exact path="/posts/:id/:author" component={Post} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </animated.div>
  ));
}
