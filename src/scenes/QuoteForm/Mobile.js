import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Grid } from '@material-ui/core';
import { TextValidator } from 'react-material-ui-form-validator';
import { countriesAndCallingCodes, getCallingCode } from '../../utils';

export default function Mobile({
  updateParentCallingCode,
  updateParentCallingNumber,
  // callingCode = '',  //TODO: Mobile validation
  callingNumber = '',
  required = false,
  validators = [],
  errorMessages = [],
}) {
  return (
    <Grid container>
      <Grid item xs={12} sm={2}>
        <TextValidator
          id="mobileCodeSelect"
          variant="outlined"
          fullWidth
          select
          validators={validators}
          errorMessages={errorMessages}
          renderValue={(value) => getCallingCode(value)}
          onChange={(event) => {
            const code = getCallingCode(event?.target?.value);
            updateParentCallingCode(code);
          }}
        >
          {countriesAndCallingCodes.map((countryAndCode) => {
            return (
              <MenuItem key={countryAndCode} value={countryAndCode}>
                {countryAndCode}
              </MenuItem>
            );
          })}
        </TextValidator>
      </Grid>
      <Grid item xs={12} sm={10}>
        <TextValidator
          id="mobile"
          name="TelephoneMobile"
          label={`Telephone / Mobile ${required ? '*' : ''}`}
          variant="outlined"
          fullWidth
          validators={validators}
          errorMessages={errorMessages}
          value={callingNumber}
          onChange={(event) => {
            const mobileNumber = event?.target?.value;
            updateParentCallingNumber(mobileNumber);
          }}
        />
      </Grid>
    </Grid>
  );
}

Mobile.propTypes = {
  updateParentCallingCode: PropTypes.func,
  updateParentCallingNumber: PropTypes.func,
  callingCode: PropTypes.string,
  callingNumber: PropTypes.string,
  required: PropTypes.bool,
  validators: PropTypes.array,
  errorMessages: PropTypes.array,
};
