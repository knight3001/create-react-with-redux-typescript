import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

type ErrorBoundaryStatesType = {
  hasError: boolean;
};

type ErrorBoundaryPropsType = {
  children: React$Node;
};

class ErrorBoundary extends Component<
  ErrorBoundaryPropsType,
  ErrorBoundaryStatesType
> {
  constructor(props: ErrorBoundaryPropsType) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: T, info: T) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render(): T {
    const { classes } = this.props;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Typography>Error happend!</Typography>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
