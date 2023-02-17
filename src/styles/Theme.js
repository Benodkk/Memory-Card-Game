import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    lightBlue07: "rgba(159, 203, 200, 0.7)",
    lightBlue04: "rgba(159, 203, 200, 0.4)",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
