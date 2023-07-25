import styled from "@emotion/styled";
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component";
import CustomImage from "../../components/custom-image/custom-image.component";

export const Wrapper = styled(SectionWrapper)`
  text-align: center;
  padding: 60px 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-style: normal;
  font-weight: 900;
  font-size: ${({ theme }) => theme.typography.pxToRem(40)};
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.palette.secondary.dark};
  text-transform: uppercase;
  margin-bottom: 60px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: ${({ theme }) => theme.typography.pxToRem(29)};
  }
`;

export const ImageWrapper = styled.div`
  max-height: 500px;
  &.haveTopSpacing {
    margin-top: 112px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    &.haveTopSpacing {
      margin-top: 30px;
    }
  }
`;

export const Image = styled(CustomImage)``;
