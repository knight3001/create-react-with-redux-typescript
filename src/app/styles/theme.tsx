import { createTheme } from "@material-ui/core/styles";

const basePalette = {
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  error: {
    main: "#ff0000",
    contrastText: "#008000",
  },
};

const baseTheme = createTheme({
  overrides: {
    MuiTableHead: {
      root: {
        fontSize: "0.9375rem",
      },
    },
    MuiTableBody: {
      root: {
        fontSize: "0.9375rem",
      },
    },
    MuiAccordionDetails: {
      root: {
        display: "block",
      },
    },
    MuiTooltip: {
      tooltipPlacementBottom: {
        fontSize: "0.8125rem",
      },
      tooltipPlacementTop: {
        fontSize: "0.8125rem",
      },
      tooltipPlacementLeft: {
        fontSize: "0.8125rem",
      },
      tooltipPlacementRight: {
        fontSize: "0.8125rem",
      },
    },
    MuiCard: {
      root: {
        overflow: "visible",
      },
    },
  },
});

export const myTheme = createTheme({
  ...baseTheme,
  palette: {
    ...basePalette,
    primary: {
      light: "#479bba",
      main: "#1a83a9",
      dark: "#146887",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ba6647",
      main: "#a9401a",
      dark: "#873314",
    },
  },
});
