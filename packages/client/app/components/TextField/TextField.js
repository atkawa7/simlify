import React, { useState, useEffect } from 'react';
import TextFieldUi from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  textFieldFilled: {
    'background-color': '#4b69a5aa',
    'margin-top': '2px',
    'width': '100%',
    'borderRadius': '2px',
    'marginRight': '5px',
  },
};

const TextField = (props) => {
  const {
    label = '',
    id = '',
    defaultValue = '',
    onBlur = () => {},
    onFocus = () => {},
    multiline,
    type
  } = props;

  const [text, setText] = useState(defaultValue);

  function handleTextChange(event) {
    setText(event.target.value);
    if (props.onChange) props.onChange(event.target.value);
  }

  return (
    <TextFieldUi
      id={id}
      variant="filled"
      className={props.classes.textFieldFilled}
      value={text}
      label={label}
      onChange={(event) => handleTextChange(event)}
      onBlur={(event) => onBlur(event)}
      onFocus={(event) => onFocus(event)}
      multiline={multiline}
      maxRows={5}
      type={type === 'password' ? 'password' : 'text'}
    />
  );
};

export default withStyles(styles)(TextField);
