import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { Global } from "@emotion/react";
import theme from "../theme/theme";
import { CssBaseline } from "@mui/material";
import { SnipcartProvider } from "use-snipcart";
import { GlobalStyles, SnipcartTheme } from "@/styles/app.styles";
import { isBrowser } from "@/lib/utils";
import { updateQty } from "@/lib/firebase";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    if (isBrowser()) {
      document.addEventListener("snipcart.ready", () => {
        window.Snipcart.events.on("cart.confirmed", async (cartData) => {
          try {
            cartData?.items?.items?.map((item) => {
              updateQty(item.id, item);
            });
            console.log(cartData?.items?.items);
          } catch (e) {
            console.log("cart submit error", e?.message);
          }
        });
        //
        // return () => {
        //   cartConfirmedCart();
        // };
      });
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={{ ...theme }}>
        <EmotionThemeProvider theme={{ ...theme }}>
          <SnipcartProvider>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
            </Head>
            <CssBaseline />
            <Global styles={GlobalStyles} />
            <Global styles={SnipcartTheme} />
            <Component {...pageProps} key={router.asPath} />
          </SnipcartProvider>
        </EmotionThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
