import styled from "@emotion/styled";
import CustomLink from "../custom-link/custom-link.component";
import { Grid, Typography } from "@mui/material";

export const CustomFooter = styled.footer`
  color: white;
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 2rem 0;
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  gap: 48px;
  &.bottom {
    gap: 24px;
  }
`;

// export const Link = styled(CustomLink)`
//   font-weight: 600;
//   font-size: ${({ theme }) => theme.typography.pxToRem(14)};
//   line-height: 17px;
//   color: ${({ theme }) => theme.palette.secondary.light};
//   display: flex;
//
//   &.thin {
//     font-weight: 400;
//   }
//
//   position: relative;
//
//   &:after {
//     content: "";
//     width: 100%;
//     position: absolute;
//     height: 2px;
//     left: 0;
//     bottom: -5px;
//     transition: all 0.2s ease;
//   }
//
//   &:hover {
//     &:after {
//       background-color: white;
//     }
//   }
//
//   // &::before {
//   //   content: "";
//   //   position: absolute;
//   //   width: 100%;
//   //   height: 2px;
//   //   background-color: ${({ theme }) => theme.palette.secondary.light};
//   //   bottom: -5px;
//   //   left: 0;
//   //   transform-origin: right;
//   //   transform: scaleX(0);
//   //   transition: transform 0.3s ease-in-out;
//   // }
//   // &:hover::before {
//   //   transform-origin: left;
//   //   transform: scaleX(1);
//   // }
// `;

export const MainWrapper = styled.div`
  padding-bottom: 1rem;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: unset;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 17px;
  color: ${({ theme }) => theme.palette.secondary.light};
  display: flex;
  &.hidden {
    ${({ theme }) => theme.breakpoints.down("md")} {
      display: none;
    }
  }

  &.social-icon {
    border: 1px solid ${({ theme }) => theme.palette.text.light};
    padding: 0.5rem;
    border-radius: 9px;
  }
`;

export const CustomSpan = styled(Typography)`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 2rem;
  width: 100%;
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.palette.secondary.light};
  display: flex;
  align-items: end;
  span {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-style: italic;
  }
`;

export const ContactGrid = styled(Grid)`
  ${({ theme }) => theme.breakpoints.down("sm")}}{
    display: flex;
  justify-content: center;
  }
`;
export const ContactWrapper = styled.div``;

export const ContactTitle = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
`;

export const ContactDescription = styled(Typography)`
  width: 20ch;
  //white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
`;

export const BottomWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.text.light};
  display: flex;
  justify-content: center;
  padding: 1rem 0.5rem 0 0.5rem;
`;

export const PoweredBy = styled(Typography)`
  font-weight: 600;
  span {
    font-style: italic;
  }
`;
