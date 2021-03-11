import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';
import { SelectValidator } from 'react-material-ui-form-validator';
import {
  currenciesAndCodes,
  getCurrencyCode,
  getCurrencyCodeDisplay,
} from '../../utils';

export default function ToCurrency({
  updateParentValue,
  toCurrency = '',
  required = false,
  validators = [],
  errorMessages = [],
}) {
  return (
    <SelectValidator
      id="toCurrency"
      name="To Currency"
      label={`To Currency ${required ? '*' : ''}`}
      fullWidth
      select
      variant="outlined"
      validators={validators}
      errorMessages={errorMessages}
      value={getCurrencyCodeDisplay(toCurrency)}
      onChange={(event) => {
        const code = getCurrencyCode(event?.target?.value);
        updateParentValue(code);
      }}
    >
      {currenciesAndCodes.map((currencyAndCode) => {
        return (
          <MenuItem key={currencyAndCode} value={currencyAndCode}>
            {currencyAndCode}
          </MenuItem>
        );
      })}
    </SelectValidator>
  );
}

ToCurrency.propTypes = {
  updateParentValue: PropTypes.func,
  toCurrency: PropTypes.string,
  required: PropTypes.bool,
  validators: PropTypes.array,
  errorMessages: PropTypes.array,
};
