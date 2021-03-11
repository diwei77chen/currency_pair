import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';
import { SelectValidator } from 'react-material-ui-form-validator';
import {
  currenciesAndCodes,
  getCurrencyCode,
  getCurrencyCodeDisplay,
} from '../../utils';

export default function FromCurrency({
  updateParentValue,
  fromCurrency = '',
  required = false,
  validators = [],
  errorMessages = [],
}) {
  return (
    <SelectValidator
      id="fromCurrency"
      name="From Currency"
      label={`From Currency ${required ? '*' : ''}`}
      fullWidth
      select
      variant="outlined"
      validators={validators}
      errorMessages={errorMessages}
      value={getCurrencyCodeDisplay(fromCurrency)}
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

FromCurrency.propTypes = {
  updateParentValue: PropTypes.func,
  fromCurrency: PropTypes.string,
  required: PropTypes.bool,
  validators: PropTypes.array,
  errorMessages: PropTypes.array,
};
