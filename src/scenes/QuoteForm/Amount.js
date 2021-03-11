import React from 'react';
import PropTypes from 'prop-types';
import { TextValidator } from 'react-material-ui-form-validator';

export default function Amount({
  updateParentValue,
  amount,
  required = false,
  validators = [],
  errorMessages = [],
}) {
  return (
    <TextValidator
      id="amount"
      name="Amount"
      label={`Amount ${required ? '*' : ''}`}
      variant="outlined"
      type="number"
      validators={validators}
      errorMessages={errorMessages}
      value={amount}
      onChange={(event) => updateParentValue(Number(event?.target?.value))}
    />
  );
}

Amount.propTypes = {
  updateParentValue: PropTypes.func,
  amount: PropTypes.number,
  required: PropTypes.bool,
  validators: PropTypes.array,
  errorMessages: PropTypes.array,
};
