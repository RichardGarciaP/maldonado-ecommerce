import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  navHeight: 74,
  sectionPadding: "padding-top: 1.5em; padding-bottom: 1.5em;",
  fonts: {
    primary: "Poppins, sans-serif",
    secondary: "Inter, sans-serif",
  },
  layout: {
    contentWidth: 1236,
  },
  palette: {
    primary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#E22D38",
      mainHover: "#B4242C",
      light: "#F4E8D7",
      dark: "#653718",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#F6ECDF",
      light: "#FEFEFD",
      dark: "#623311",
    },
    tertiary: {
      main: "#EBE0D0",
      light: "#faf6ef",
      dark: "#FFF9F0",
    },
    accent: {
      main: "#FAB500",
      light: "#FAB500",
      dark: "#FCB500",
    },
    text: {
      primary: "#623311",
      secondary: "#E84D0E",
      content: "#381E0A",
      tertiary: "#F9F9F8",
      disabled: "#10355A",
      hint: "#10355A",
      light: "#FFFFFF",
      other: "#745343",
    },
    bg: {
      main: "#FAF6EF",
      dark: "#F6ECDF",
      light: "#F8F1E7",
      other: "#47AE55",
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Open Sans", "Arial", sans-serif`,
  },
});

export default theme;
