import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import useClickableFonts from "./useClickableFonts";

test("Cycles through a list of fonts when clicked", () => {
  const { result } = renderHook(() =>
    useClickableFonts(["Indie Flower", "Sacramento", "Mansalva"])
  );

  expect(result.current.fontFamily).toBe("Indie Flower");

  act(() => {
    result.current.handleChangeFont();
  });

  expect(result.current.fontFamily).toBe("Sacramento");

  act(() => {
    result.current.handleChangeFont();
  });

  expect(result.current.fontFamily).toBe("Mansalva");

  act(() => {
    result.current.handleChangeFont();
  });

  expect(result.current.fontFamily).toBe("Indie Flower");
});
