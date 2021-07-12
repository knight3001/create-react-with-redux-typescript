import React from "react";
import {
  MiddlewareAPI,
  isRejectedWithValue,
  Middleware,
} from "@reduxjs/toolkit";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

/**
 * Log a warning and show a toast!
 */
const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (
  action
) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
  if (isRejectedWithValue(action)) {
    console.warn("We got a rejected action!");
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={true}
      autoHideDuration={6000}
      message={action.error.data.message}
    />;
  }

  return next(action);
};

export default rtkQueryErrorLogger;
