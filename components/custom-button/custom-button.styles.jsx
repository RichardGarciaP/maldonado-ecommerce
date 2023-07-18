import styled from "@emotion/styled";
import { darken } from "@mui/system";
import { LoadingButton } from "@mui/lab";

export const CustomButton = styled(LoadingButton)`
  color: white;
  font-family: ${({ theme }) => theme.fonts.secondary};
  background-color: ${({ theme, color }) =>
    theme.palette[color]
      ? theme.palette[color].light
      : theme.palette.primary.main};
  padding: 0.9rem 1.8rem;
  border: 1px solid transparent;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  font-weight: 900 !important;
  border-radius: 4px;
  min-height: 38px;
  line-height: 17px;
  letter-spacing: -0.01em;
  text-transform: capitalize;
  // ${({ theme }) => theme.breakpoints.up("md")} {
  //   padding: 0.9rem 1.8rem;
  // }
  &.light {
    background-color: white;
    color: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
  }
  &.secondary-light {
    background-color: ${({ theme }) => theme.palette.primary.light};
    color: white;
    &:hover {
      background-color: #dacfc0;
    }
  }

  &.red {
    color: #eeefed;
    background-color: ${({ theme }) => theme.palette.primary.main};

    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.mainHover};
    }
  }

  &.darkBorder {
    border: 1px solid ${({ theme }) => theme.palette.primary.light};
    background-color: transparent;
    color: ${({ theme }) => theme.palette.text.primary};
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
  }

  &.yellow {
    background-color: ${({ theme }) => theme.palette.accent.main};
    color: ${({ theme }) => theme.palette.secondary.dark};

    &:hover {
      background-color: ${({ theme }) =>
        darken(theme.palette.accent.main, 0.08)};
    }
  }

  &:not(.secondary-light):not(.darkBorder):not(.light):not(.yellow).hover {
    background-color: ${({ theme, color }) =>
      darken(
        theme.palette[color]
          ? theme.palette[color].main
          : theme.palette.primary.main,
        0.1,
      )};
  }

  &.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    background: lightgray;
    border-color: lightgray;
    cursor: not-allowed;
  }

  //.MuiLoadingButton-loadingIndicator {
  //  position: relative;
  //  left: -5px;
  //}

  .MuiCircularProgress-root {
    width: 22px !important;
    height: 22px !important;
  }
  .text {
    ${({ loading }) => (loading ? "opacity: 0" : "opacity: 1")};
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
