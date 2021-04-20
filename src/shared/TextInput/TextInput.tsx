import * as React from 'react';
import { compose, pure, withHandlers } from 'recompose';

import InputAdornment from '@material-ui/core/InputAdornment';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import MuiTextField, { StandardTextFieldProps } from '@material-ui/core/TextField';

import { Omit } from '@material-ui/core';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';

const merge = require('lodash/merge');

export interface TextInputProps extends StandardTextFieldProps {
  postLabel?: React.ReactNode;
  classes?: Partial<WithStyles<typeof styles>['classes']>;
  className?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  type?: any;
  value?: any;
  input?: WrappedFieldInputProps;
  meta?: WrappedFieldMetaProps;
  inputLabelProps?: Partial<InputLabelProps>;
  onChange?: (value: any) => void;
}

export interface TextInputPrivateProps extends Omit<TextInputProps, 'classes'>, WithStyles<typeof styles, true> {
  handleChange: (val: string) => void;
}

const styles = (theme:any) =>
  createStyles({
    root: {},
    label: {
      color: 'currentColor',
      // avoid parent with stronger weight to override the label
      fontWeight: 400,
    },
    suffix: {
      fontSize: 12,
      color: 'currentColor',
      opacity: 0.58,
      marginLeft: 5,
      whiteSpace: 'nowrap',
    },
  });

const TextInput: React.FC<TextInputPrivateProps> = (props) => {
  const {
    classes,
    className,
    handleChange,
    postLabel,
    InputLabelProps: InputLabelProperties = {},
    meta: { touched, error, invalid } = { touched: false, error: false, invalid: false },
    InputProps: InputProperties = {},
    input: { onChange = {}, ...inputProps } = {},
    ...others
  } = props;

  return (
    <>
      <MuiTextField
        {...inputProps}
        {...others}
        error={touched && invalid}
        helperText={touched && error}
        onChange={(e) => handleChange(e.target.value)}
        InputProps={merge(
          {
            endAdornment: postLabel && (
              <InputAdornment
                classes={{
                  root: classes.suffix,
                }}
                disableTypography
                position="end"
              >
                {postLabel}
              </InputAdornment>
            ),
          },
          InputProperties,
        )}
        InputLabelProps={merge({ shrink: true, classes: { root: classes.label } }, InputLabelProperties)}
        className={className}
      />
    </>
  );
};

const ComposedTextInput = compose<TextInputPrivateProps, TextInputProps>(
  withStyles(styles, { withTheme: true }),
  pure,
  withHandlers({
    handleChange: (props: TextInputPrivateProps) => (val:any) => {
      if (props.input) {
        props.input.onChange(val);
      } else if (props.onChange) {
        props.onChange(val);
      }
    },
  }),
)(TextInput);

ComposedTextInput.displayName = 'TextInput';

export default ComposedTextInput;
