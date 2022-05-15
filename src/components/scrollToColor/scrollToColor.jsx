import React from "react";
import { useScrollTrigger } from "@mui/material";

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "black" : "black",
      transition: trigger ? "0.6s" : "0.6s",
      boxShadow: "none",
      padding: "10px 0px"
    }
  });
};

const ScrollToColor01 = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor01;
