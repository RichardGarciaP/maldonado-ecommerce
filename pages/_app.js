import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { Global } from "@emotion/react";
import theme from "../theme/theme";
import { CssBaseline } from "@mui/material";
import { SnipcartProvider } from "use-snipcart";
import { GlobalStyles, SnipcartTheme } from "@/styles/app.styles";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ThemeProvider theme={{ ...theme }}>
      <EmotionThemeProvider theme={{ ...theme }}>
        <SnipcartProvider>
          <CssBaseline />
          <Global styles={GlobalStyles} />
          <Global styles={SnipcartTheme} />
          <Component {...pageProps} key={router.asPath} />
        </SnipcartProvider>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
