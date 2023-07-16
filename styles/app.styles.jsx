import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { darken } from "@mui/system";

export const SnipcartTheme = (theme) => css`
  #snipcart {
    position: relative;
    z-index: 9999;
    /* -----------------
        Colors
    ----------------- */
    --color-default: ${theme.palette.secondary.dark};
    --color-alt: hsl(0, 0%, 50%);
    --color-icon: ${theme.palette.secondary.dark};
    --color-success: hsl(144, 50%, 55%);
    --color-error: hsl(6, 55%, 60%);

    --color-link: ${theme.palette.primary.dark};
    --color-link-hover: ${darken(theme.palette.primary.dark, 0.08)};
    --color-link-active: var(--color-link);
    --color-link-focus: var(--color-link);

    --color-input: ${theme.palette.primary.dark};
    --color-input-hover: var(--color-input);
    --color-input-focus: var(--color-input);
    --color-input-checked: white;
    --color-input-disabled: var(--color-alt);
    --color-input-error: var(--color-error);
    --color-inputLabel: ${theme.palette.primary.dark};
    --color-inputLabel-hover: var(--color-inputLabel);
    --color-inputLabel-focus: var(--color-inputLabel);
    --color-inputIcon: var(--color-alt);
    --color-inputIcon-hover: var(--color-default);
    --color-inputIcon-focus: var(--color-inputIcon);
    --color-inputIcon-checked: var(--color-default);
    --color-inputIcon-error: var(--color-error);
    --color-inputPlaceholder: var(--color-alt);

    --color-buttonPrimary: ${theme.palette.primary.light};
    --color-buttonPrimary-hover: ${darken(theme.palette.primary.light, 0.02)};
    --color-buttonPrimary-active: var(--color-buttonPrimary);
    --color-buttonPrimary-focus: var(--color-buttonPrimary);
    --color-buttonPrimary-disabled: var(--color-alt);
    --color-buttonPrimary-success: var(--color-buttonPrimary);
    --color-buttonPrimary-error: var(--color-buttonPrimary);

    --color-buttonSecondary: ${theme.palette.primary.light};
    --color-buttonSecondary-hover: ${darken(theme.palette.primary.light, 0.02)};
    --color-buttonSecondary-active: var(--color-buttonSecondary);
    --color-buttonSecondary-focus: var(--color-buttonSecondary);
    --color-buttonSecondary-disabled: rgba(0, 0, 0, 0.26);
    --color-buttonSecondary-success: var(--color-success);
    --color-buttonSecondary-error: var(--color-error);

    --color-buttonDanger: var(--color-error);
    --color-buttonDanger-hover: ${theme.palette.primary.light};
    --color-buttonDanger-active: var(--color-buttonDanger);
    --color-buttonDanger-focus: var(--color-buttonDanger);
    --color-buttonDanger-disabled: hsl(210, 10%, 25%);
    --color-buttonDanger-success: var(--color-default);
    --color-buttonDanger-error: var(--color-default);

    --color-badge: ${theme.palette.primary.light};
    --color-badge-active: ${theme.palette.primary.light};
    --color-badge-disabled: ${theme.palette.primary.dark};

    /* -----------------
        Border colors
    ----------------- */
    --borderColor-default: hsla(0, 0%, 100%, 10%);
    --borderColor-error: hsl(6, 55%, 30%);

    --borderColor-link: currentColor;
    --borderColor-link-hover: currentColor;
    --borderColor-link-active: currentColor;
    --borderColor-link-focus: currentColor;

    --borderColor-input: hsla(0, 0%, 100%, 10%);
    --borderColor-input-hover: ${theme.palette.secondary.main};
    --borderColor-input-focus: var(--borderColor-input-hover);
    --borderColor-input-checked: var(--borderColor-input-hover);
    --borderColor-input-disabled: hsl(210, 10%, 20%);
    --borderColor-input-error: var(--borderColor-error);

    --borderColor-buttonPrimary: transparent;
    --borderColor-buttonPrimary-hover: transparent;
    --borderColor-buttonPrimary-focus: transparent;
    --borderColor-buttonPrimary-disabled: transparent;
    --borderColor-buttonPrimary-success: transparent;
    --borderColor-buttonPrimary-error: transparent;

    --borderColor-buttonSecondary: transparent;
    --borderColor-buttonSecondary-hover: transparent;
    --borderColor-buttonSecondary-focus: transparent;
    --borderColor-buttonSecondary-disabled: transparent;
    --borderColor-buttonSecondary-success: transparent;
    --borderColor-buttonSecondary-error: transparent;

    --borderColor-badge: transparent;
    --borderColor-badge-active: transparent;
    --borderColor-badge-disabled: transparent;

    /* -----------------
        Background colors
    ----------------- */
    --bgColor-default: ${theme.palette.bg.main};
    --bgColor-alt: ${theme.palette.bg.dark};
    --bgColor-success: hsl(144, 70%, 15%);
    --bgColor-error: ${theme.palette.bg.dark};
    --bgColor-info: ${theme.palette.primary.main};

    --bgColor-modal: ${theme.palette.bg.light};

    --bgColor-link: none;
    --bgColor-link-hover: none;
    --bgColor-link-active: none;
    --bgColor-link-focus: hsl(210, 55%, 10%);

    --bgColor-input: ${theme.palette.bg.light};
    --bgColor-input-hover: var(--bgColor-input);
    --bgColor-input-focus: var(--bgColor-input);
    --bgColor-input-checked: ${theme.palette.primary.main};
    --bgColor-input-disabled: rgba(0, 0, 0, 0.1);
    --bgColor-input-error: var(--bgColor-input);
    --bgColor-input-autofill: ${theme.palette.bg.main};

    --bgColor-buttonPrimary: ${theme.palette.primary.main};
    --bgColor-buttonPrimary-hover: ${darken(theme.palette.primary.main, 0.08)};
    --bgColor-buttonPrimary-active: var(--bgColor-buttonPrimary);
    --bgColor-buttonPrimary-focus: var(--bgColor-buttonPrimary);
    --bgColor-buttonPrimary-disabled: rgba(0, 0, 0, 0.1);
    --bgColor-buttonPrimary-success: hsl(144, 66%, 30%);
    --bgColor-buttonPrimary-error: hsl(6, 60%, 35%);

    --bgColor-buttonSecondary: var(--bgColor-info);
    --bgColor-buttonSecondary-hover: ${darken(
      theme.palette.primary.main,
      0.08,
    )};
    --bgColor-buttonSecondary-active: var(--bgColor-buttonSecondary);
    --bgColor-buttonSecondary-focus: var(--bgColor-buttonSecondary);
    --bgColor-buttonSecondary-disabled: lightgray;
    --bgColor-buttonSecondary-success: var(--bgColor-success);
    --bgColor-buttonSecondary-error: var(--bgColor-error);

    --bgColor-buttonDanger: var(--bgColor-error);
    --bgColor-buttonDanger-hover: ${theme.palette.primary.main};
    --bgColor-buttonDanger-active: var(--bgColor-buttonDanger);
    --bgColor-buttonDanger-focus: var(--bgColor-buttonDanger);
    --bgColor-buttonDanger-disabled: hsl(210, 10%, 9%);
    --bgColor-buttonDanger-success: hsl(144, 66%, 30%);
    --bgColor-buttonDanger-error: hsl(6, 60%, 35%);

    --bgColor-badge: ${theme.palette.primary.main};
    --bgColor-badge-active: ${theme.palette.primary.main};
    --bgColor-badge-disabled: ${theme.palette.bg.main};

    /* -----------------
        Shadows
    ----------------- */

    --shadow-default: 0px 20px 24px -20px hsla(0, 0%, 0%, 0.5);
    --shadow-tooltip: 0px 8px 16px hsla(220, 70%, 22%, 0.5);

    --shadow-link-focus: 0px 6px 4px -3px hsla(200, 90%, 40%, 0.5);

    --shadow-input-hover: none;
    --shadow-input-focus: 0px 5px 10px -3px ${theme.palette.primary.light};
    --shadow-input-checked: none;

    --shadow-buttonPrimary-hover: 0px 10px 4px -8px ${theme.palette.primary.light};
    --shadow-buttonPrimary-active: none;
    --shadow-buttonPrimary-focus: 0px 0px 6px 2px hsl(200, 90%, 40%);

    --shadow-buttonSecondary-hover: 0px 10px 4px -8px hsla(0, 0%, 0%, 0.2);
    --shadow-buttonSecondary-active: none;
    --shadow-buttonSecondary-focus: 0px 0px 6px 2px hsla(200, 90%, 40%, 0.8);

    --shadow-buttonDanger-hover: 0px 10px 4px -8px hsla(0, 0%, 0%, 0.25);
    --shadow-buttonDanger-active: none;
    --shadow-buttonDanger-focus: 0px 0px 6px 2px hsla(6, 55%, 60%);
  }
`;

export const GlobalStyles = (theme) => css`
  img,
  svg {
    max-width: 100%;
  }

  .snipcart-modal__close-title {
    display: block !important;
  }

  .emphasis {
    color: ${theme.palette.primary.main};
  }

  * {
    letter-spacing: -0.01em;
  }

  h1,
  h2 {
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 40px;
    ${theme.breakpoints.up("md")} {
      font-size: 3.75rem;
      line-height: 59px;
    }

    span {
      ${theme.breakpoints.up("md")} {
        font-size: 4.25rem;
        line-height: 75px;
      }
    }
  }

  h1,
  h2,
  h3 {
    font-weight: 900;
  }

  h3 {
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 40px;

    ${theme.breakpoints.up("md")} {
      font-size: ${theme.typography.pxToRem(45)};
      line-height: 45px;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: ${theme.fonts.tertiary};
    margin: 0;
  }

  .visuallyhidden {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
  }

  .MuiMenu-paper.MuiPaper-root {
    .MuiList-root {
      background: ${theme.palette.tertiary.dark} !important;
      border-radius: 4px 0px 4px 4px;
      box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.25);
      padding: 0;
    }

    margin-top: 1rem;
    min-width: 198px;
    overflow: visible;

    ::before {
      content: "";
      display: block;
      position: absolute;
      background-size: contain;
      height: 24px;
      width: 24px;
      top: -11px;
      left: 0.75rem;
      z-index: 1;
    }
  }

  .MuiPaper-elevation {
    ${theme.breakpoints.down("sm")} {
      width: 100%;
    }
    .MuiList-root {
      width: 100%;
      text-align: center;
      .MuiMenuItem-root {
        padding-left: 5.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-weight: 600;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0.15px;
      }
    }
  }

  .pac-container {
    z-index: 9999;
  }

  div[data-rmiz-wrap="visible"] {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  body {
    .main-wrapper {
      padding-top: ${theme.navHeight}px;
    }

    .top-banner {
      display: none;
    }

    .sidebar-filters {
      top: ${theme.navHeight}px;
    }

    &.with-banner {
      .top-banner {
        display: flex;
      }
      .main-wrapper {
        padding-top: ${theme.navHeight + 76}px;
      }

      .sidebar-filters {
        top: ${theme.navHeight + 76}px;
      }

      ${theme.breakpoints.up("sm")} {
        .main-wrapper {
          padding-top: ${theme.navHeight + 41}px;
        }

        .sidebar-filters {
          top: ${theme.navHeight + 41}px;
        }
      }
    }
  }
`;

export const AppContainer = styled.main`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.bg.light};
`;
