import styled from "@emotion/styled";
import { Container } from "@mui/system";

export const Wrapper = styled(Container)`
    padding-top: 2rem;
    padding-bottom: 2rem;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Title = styled.h2`
    font-size: 2rem;
`

export const FeatureWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    span {
        font-weight: bold;
    }
`