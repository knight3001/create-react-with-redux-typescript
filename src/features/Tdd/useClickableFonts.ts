import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";

const useClickableFonts = (fontList: string[]) => {
  const [fontIndex, setFontIndex] = useState(0);

  const handleChangeFont = () => {
    setFontIndex(fontIndex >= fontList.length - 1 ? 0 : fontIndex + 1);
  };

  const fontFamily = fontList[fontIndex];

  return { fontFamily, handleChangeFont };
};

export default useClickableFonts;
