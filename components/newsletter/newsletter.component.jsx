import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import SectionWrapper from "@/components/section-wrapper/section-wrapper.component";

import * as S from "./newsletter.styles";
import CustomInput from "@/components/custom-input/custom-input.component";

const Newsletter = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const { handleSubmit, reset } = methods;
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setSuccessMessage("Se ha registrado con exito!");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <SectionWrapper className="dark-background">
      <S.CustomContainer>
        <S.ContentWrapper>
          <S.Title variant="h2">Subscribete a nuestras noticias</S.Title>
          <S.Description>
            Subscribete para recibir ofertas y promociones
          </S.Description>
          <FormProvider {...methods}>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.Input
                name="email"
                label="Email"
                validations={{ required: true }}
              />
              <S.Button>Enviar</S.Button>
            </S.Form>
          </FormProvider>
        </S.ContentWrapper>
      </S.CustomContainer>
    </SectionWrapper>
  );
};

export default Newsletter;
