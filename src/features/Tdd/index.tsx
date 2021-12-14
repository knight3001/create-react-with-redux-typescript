import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Title from "./Title";
import useClickableFonts from "./useClickableFonts";

const Tdd = () => {
  const { fontFamily, handleChangeFont } = useClickableFonts([
    "Indie Flower",
    "Sacramento",
    "Mansalva",
    "Emilys Candy",
    "Merienda One",
    "Pompiere",
  ]);

  return (
    <>
      <Title fontFamily={fontFamily} handleChangeFont={handleChangeFont}>
        Clickable Fonts
      </Title>
      <footer>{fontFamily}</footer>
    </>
  );
};

export default Tdd;
