import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const InputContainer = styled.div`
  &.margin-top {
    margin-top: 1em;
  }

  &.text-area {
    .MuiOutlinedInput-root {
      border-radius: 20px;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }
    input {
      padding: 0em 1em;
    }
  }

  &.border-radius-8 {
    .MuiInputBase-multiline {
      border-radius: 8px;
    }
  }
`;

export const Title = styled.p`
  margin-top: 0;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: ${({ theme }) => theme.typography.pxToRem(18)};
  font-weight: 700;
  letter-spacing: -0.01em;
`;

export const CustomInput = styled(TextField)`
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
  letter-spacing: -0.01em;
  background-color: ${({ theme }) => theme.palette.bg.light};
  //opacity: 0.5;
  width: 100%;
  .MuiInputLabel-root {
    color: ${({ theme }) => theme.palette.text.content};
    padding: 0 0.5rem;
    opacity: 0.5;
  }

  .MuiOutlinedInput-root {
    border-radius: 5px;
  }

  .Mui-focused {
    fieldset {
      border-color: ${({ theme }) => theme.palette.text.primary} !important;
    }
    &.Mui-error {
      fieldset {
        border-color: ${({ theme }) => theme.palette.primary.main} !important;
      }
    }
  }

  ${({ invertcolor }) => {
    if (invertcolor) {
      return `
      .MuiInputLabel-root {
        color: #ffffff !important;
      }
      .MuiOutlinedInput-input {
        color: #ffffff !important;
      }
      .MuiOutlinedInput-notchedOutline {
        border-color: #ffffff !important;
      }
      fieldset {
        border-color: #ffffff !important;
      }
      .Mui-focused {
        fieldset {
          border-color: #ffffff !important;
        }
      }
      `;
    }
  }}
`;
