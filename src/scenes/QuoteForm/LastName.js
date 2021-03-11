import React from 'react';
import PropTypes from 'prop-types';
import { TextValidator } from 'react-material-ui-form-validator';

export default function LastName({
  updateParentValue,
  lastName = '',
  required = false,
  validators = [],
  errorMessages = [],
}) {
  return (
    <TextValidator
      id="lastName"
      name="Last Name"
      label={`Last Name ${required ? '*' : ''}`}
      variant="outlined"
      fullWidth
      validators={validators}
      errorMessages={errorMessages}
      value={lastName}
      onChange={(event) => {
        const name = event?.target?.value;
        updateParentValue(name);
      }}
    />
  );
}

LastName.propTypes = {
  updateParentValue: PropTypes.func,
  lastName: PropTypes.string,
  required: PropTypes.bool,
  validators: PropTypes.array,
  errorMessages: PropTypes.array,
};
