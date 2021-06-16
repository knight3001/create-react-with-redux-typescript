// @flow
import React, { ReactNode } from "react";
import { withRouter } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import ErrorBoundary from "../ErrorBoundary";
import Menu from "./Menu";
import { myTheme } from "../styles/theme";

type TemplatePropsType = {
  children?: ReactNode;
};

function Template(props: TemplatePropsType) {
  return (
    <MuiThemeProvider theme={myTheme}>
      <ErrorBoundary>
        <div>
          <Menu>{props.children}</Menu>
        </div>
      </ErrorBoundary>
    </MuiThemeProvider>
  );
}

export default withRouter(Template);
