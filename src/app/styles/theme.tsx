import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const basePalette = {
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  error: {
    main: "#ff0000",
    contrast: "#008000",
  },
};

const baseTheme = createMuiTheme({
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

export const myTheme = createMuiTheme({
  ...baseTheme,
  themeName: "myTheme",
  palette: {
    ...basePalette,
    primary: {
      light: "#479bba",
      main: "#1a83a9",
      dark: "#146887",
      third: "#75b4cb",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ba6647",
      main: "#a9401a",
      dark: "#873314",
    },
  },
});
