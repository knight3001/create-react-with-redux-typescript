import React, { FunctionComponent } from "react";
import classNames from "classnames";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";

const inputStyles = (theme: DictionaryType): DictionaryType => ({
  labelFormControl: {
    paddingLeft: "30px",
    fontSize: "0.9375rem",
  },
  whiteLabel: {
    color: theme.palette.primary.contrastText,
    "&$labelFocused": {
      color: theme.palette.primary.contrastText,
    },
    "&$labelError": {
      color: theme.palette.error.main,
    },
    "&$labelDisabled": {
      color: theme.palette.grey.main,
    },
  },
  greenLabel: {
    color: theme.palette.primary.light,
    "&$labelFocused": {
      color: theme.palette.primary.main,
    },
    "&$labelError": {
      color: theme.palette.error.main,
    },
    "&$labelDisabled": {
      color: theme.palette.grey.main,
    },
  },
  labelFocused: {},
  labelError: {},
  labelDisabled: {},
  inputFont: {
    fontSize: "0.9375rem",
    paddingLeft: "20px",
  },
  inputRootWhite: {
    color: theme.palette.primary.contrastText,
    "&$inputDisabled": {
      color: theme.palette.grey.main,
    },
    "&$inputError": {
      "&:after": {
        borderBottomColor: theme.palette.error.main,
      },
    },
  },
  inputRootGreen: {
    color: theme.palette.common.black,
    "&$inputDisabled": {
      color: theme.palette.grey.main,
    },
    "&$inputError": {
      "&:after": {
        borderBottomColor: theme.palette.error.main,
      },
    },
  },
  inputDisabled: {},
  inputError: {},
  underlineGreen: {
    "&:before": {
      borderBottomColor: theme.palette.primary.light,
    },
    "&:hover:before": {
      borderBottomColor: "#8a8a8a",
    },
    "&:after": {
      borderBottomColor: theme.palette.primary.main,
    },
  },
  underlineWhite: {
    "&:before": {
      borderBottomColor: theme.palette.primary.contrastText,
    },
    "&:hover:before": {
      borderBottomColor: "#8a8a8a",
    },
    "&:after": {
      borderBottomColor: theme.palette.primary.contrastText,
    },
  },
  helper: {
    paddingLeft: "20px",
  },
  textFieldFormLabel: {
    fontSize: "1.0625rem",
    fontWeight: 500,
    padding: "10px 5px",
  },
  textFieldRoot: {
    padding: 0,
    marginBottom: theme.spacing(2),
    "label + &": {
      marginTop: theme.spacing(4),
    },
  },
  textFieldInput: {
    borderRadius: 4,
    background: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: "1rem",
    padding: "10px 12px",
    width: "calc(100% - 24px)",
    minWidth: theme.spacing(5),
    transition: "box-shadow 0.25s ease-in-out",
    "&:focus": {
      borderColor: theme.palette.primary.light,
      boxShadow: "0 0 0 0.2rem #66c38b",
    },
  },
  borderError: {
    borderColor: theme.palette.error.main,
    "&:focus": {
      borderColor: theme.palette.error.main,
      boxShadow: "0 0 0 0.1rem #3a7d34",
    },
  },
  helperText: {
    marginTop: "-5px",
    paddingLeft: "6px",
  },
});

const useStyles = makeStyles((theme) => ({
  ...inputStyles(theme),
}));

interface StyledTextFieldPropsType {
  label: string;
  name: string;
  value: string;
  inpuType: string;
  onChange: Function;
  isRequired?: boolean;
  isInvalid?: boolean;
  isAutoFocus?: boolean;
  isDisabled?: boolean;
  onBlur?: Function;
  onFocus?: Function;
  onEnter?: Function;
  endAdornment?: React$Element<T>;
  startAdornment?: React$Element<T>;
  helper?: string;
  rows?: number;
  width?: string;
  inputComponent?: React$Element<T>;
  placeholder?: string;
  autoCompleteOff?: boolean;
}

const defaultProps = {
  isRequired: false,
  isInvalid: false,
  isAutoFocus: false,
  isDisabled: false,
  onBlur: null,
  onFocus: null,
  onEnter: null,
  endAdornment: null,
  startAdornment: null,
  helper: null,
  rows: 0,
  width: 0,
  placeholder: "",
  autoCompleteOff: false,
};

const StyledTextField: FunctionComponent<{
  props: StyledTextFieldPropsType;
}> = (props = defaultProps) => {
  const classes = useStyles();

  return (
    <FormControl
      fullWidth={!props.width}
      disabled={props.isDisabled}
      style={props.width ? { width: props.width } : {}}
    >
      {props.label !== "" && (
        <InputLabel
          htmlFor={props.name}
          required={props.isRequired}
          error={props.isInvalid}
          shrink={true}
          classes={{
            root: classes.greenLabel,
            formControl: classes.textFieldFormLabel,
            focused: classes.labelFocused,
            error: classes.labelError,
            disabled: classes.labelDisabled,
          }}
        >
          {props.label}
        </InputLabel>
      )}
      <Input
        id={props.name}
        name={props.name}
        value={props.value}
        classes={{
          root: classes.textFieldRoot,
          input: classNames(
            classes.textFieldInput,
            props.isInvalid && classes.borderError
          ),
        }}
        error={props.isInvalid}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        type={props.inpuType}
        fullWidth={true}
        disableUnderline={true}
        inputProps={{
          required: props.isRequired,
          autoComplete: props.autoCompleteOff ? "new-password" : "on",
        }}
        autoFocus={props.isAutoFocus}
        onKeyPress={(ev: SyntheticKeyboardEvent<T>) => {
          if (props.onEnter !== undefined) {
            if (ev.key === "Enter") {
              props.onEnter();
              ev.preventDefault();
            }
          }
        }}
        endAdornment={props.endAdornment}
        startAdornment={props.startAdornment}
        multiline={props.rows !== undefined}
        rows={props.rows}
        inputComponent={props.inputComponent}
        disabled={props.isDisabled}
        placeholder={props.placeholder}
      />
      {props.helper && (
        <FormHelperText
          error={props.isInvalid}
          classes={{ root: classes.helperText }}
        >
          {props.helper}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default StyledTextField;
