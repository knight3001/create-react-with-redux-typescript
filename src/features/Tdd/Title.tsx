import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  ReactElement,
} from "react";
import styled, { createGlobalStyle } from "styled-components";

interface TitleProps {
  fontFamily: string;
}

const StyledTitle = styled.h1<TitleProps>`
  font-size: 3rem;
  cursor: pointer;
  user-select: none;
  font-family: ${(props) => props.fontFamily};
`;

function Title({
  fontFamily,
  handleChangeFont,
  children,
}: {
  fontFamily: string;
  handleChangeFont: () => void;
  children: string;
}) {
  return (
    <StyledTitle fontFamily={fontFamily} onClick={handleChangeFont}>
      {children}
    </StyledTitle>
  );
}

export default Title;
