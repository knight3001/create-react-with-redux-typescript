// @flow
import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import ErrorBoundary from "../ErrorBoundary";
import Menu from "./Menu";
import { myTheme } from "../styles/theme";

function Template(props: ReactNode) {
  return (
    <MuiThemeProvider theme={myTheme}>
      <ErrorBoundary>
        <div>
          <Menu>
            <Outlet />
          </Menu>
        </div>
      </ErrorBoundary>
    </MuiThemeProvider>
  );
}

export default Template;
