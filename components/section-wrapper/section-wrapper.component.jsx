import React from "react";

import * as S from "./section-wrapper.syles";

const SectionWrapper = ({ children, ...otherProps }) => {
  return <S.Section {...otherProps}>{children}</S.Section>;
};

export default SectionWrapper;
