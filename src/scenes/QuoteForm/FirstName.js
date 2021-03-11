import React from 'react';
import PropTypes from 'prop-types';
import { TextValidator } from 'react-material-ui-form-validator';

export default function FirstName({
  updateParentValue,
  firstName = '', // Single source of truth
  required = false,
  validators = [],
  errorMessages = [],
}) {
  return (
    <TextValidator
      id="firstName"
      name="First Name"
      label={`First Name ${required ? '*' : ''}`}
      variant="outlined"
      fullWidth
      validators={validators}
      errorMessages={errorMessages}
      value={firstName}
      onChange={(event) => {
        const name = event?.target?.value;
        updateParentValue(name);
      }}
    />
  );
}

FirstName.propTypes = {
  updateParentValue: PropTypes.func,
  firstName: PropTypes.string,
  required: PropTypes.bool,
  validators: PropTypes.array,
  errorMessages: PropTypes.array,
};
