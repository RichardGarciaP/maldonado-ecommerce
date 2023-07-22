import React from "react";
import * as S from "./custom-input.styles";
import { useFormContext } from "react-hook-form";

const CustomInput = ({
  title,
  name,
  cols = 12,
  validations,
  label,
  value,
  className,
  select,
  type = "text",
  variant = "outlined",
  maxLength,
  ...otherProps
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];
  const handleErrors = () => {
    if (error) {
      return error.message;
    }
  };
  return (
    <S.InputContainer className={className}>
      {title && <S.Title>{title}</S.Title>}
      <S.CustomInput
        error={!!error}
        required={!!validations?.required}
        select={!!select}
        variant={variant}
        label={label}
        helperText={handleErrors()}
        defaultValue={value}
        inputProps={{ maxLength: maxLength ? maxLength : "" }}
        type={type}
        {...register(name, validations)}
        {...otherProps}
      />
    </S.InputContainer>
  );
};

export default CustomInput;
