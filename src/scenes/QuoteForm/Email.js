import React from 'react';
import PropTypes from 'prop-types';
import { TextValidator } from 'react-material-ui-form-validator';

export default function Email({
  updateParentValue,
  email = '',
  required = false,
  validators = [],
  errorMessages = [],
}) {
  return (
    <TextValidator
      id="email"
      name="Email"
      label={`Email ${required ? '*' : ''}`}
      variant="outlined"
      fullWidth
      validators={validators}
      errorMessages={errorMessages}
      value={email}
      onChange={(event) => updateParentValue(event?.target?.value)}
    />
  );
}

Email.propTypes = {
  updateParentValue: PropTypes.func,
  email: PropTypes.string,
  required: PropTypes.bool,
  validators: PropTypes.array,
  errorMessages: PropTypes.array,
};
