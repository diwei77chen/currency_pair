import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { useHistory } from 'react-router-dom';
import Title from './Title';
import FirstName from './FirstName';
import LastName from './LastName';
import Email from './Email';
import Mobile from './Mobile';
import FromCurrency from './FromCurrency';
import ToCurrency from './ToCurrency';
import Amount from './Amount';
import SubmitButton from './SubmitButton';
import { getCustomerRate } from '../../requests';
import {
  OFX_PUBLIC_INDIVIDUAL_API,
  CUSTOMER_ID,
} from '../../settings/settings';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    marginTop: theme.spacing(8),
  },
}));

export default function QuoteForm() {
  const classes = useStyles();
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [callingCode, setCallingCode] = useState('');
  const [callingNumber, setCallingNumber] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const validators = ['required'];
  const errorMessages = ['This field is required.'];

  return (
    <div className={classes.paper}>
      <Grid className={classes.container} container>
        <Grid item xs={12}>
          <Title title="Quick Quote" />
        </Grid>
        <Grid item xs={12}>
          <hr color="blue" />
        </Grid>
      </Grid>
      <ValidatorForm
        className={classes.form}
        onSubmit={() => {
          console.log('onSubmit is pressed.');
          const url = `${OFX_PUBLIC_INDIVIDUAL_API}/${fromCurrency}/${toCurrency}/${CUSTOMER_ID}?format=json`;
          getCustomerRate(fetch, url)
            .then((customerRate) => {
              const quoteResultLocation = {
                pathname: '/QuoteResult',
                state: {
                  customerRate,
                  fromCurrency,
                  toCurrency,
                  amount,
                },
              };
              history.push(quoteResultLocation);
            })
            .catch((err) => {
              //TODO: Graceful Degration
              console.log('getCustomerRate error', err);
            });
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FirstName
              firstName={firstName}
              required={true}
              validators={validators}
              errorMessages={errorMessages}
              updateParentValue={(value) => setFirstName(value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LastName
              lastName={lastName}
              required={true}
              validators={validators}
              errorMessages={errorMessages}
              updateParentValue={(value) => setLastName(value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Email
              email={email}
              updateParentValue={(value) => setEmail(value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Mobile
              callingCode={callingCode}
              callingNumber={callingNumber}
              updateParentCallingCode={(value) => setCallingCode(value)}
              updateParentCallingNumber={(value) => setCallingNumber(value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FromCurrency
              fromCurrency={fromCurrency}
              required={true}
              validators={validators}
              errorMessages={errorMessages}
              updateParentValue={(value) => setFromCurrency(value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ToCurrency
              toCurrency={toCurrency}
              required={true}
              validators={validators}
              errorMessages={errorMessages}
              updateParentValue={(value) => setToCurrency(value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Amount
              amount={amount}
              required={true}
              validators={validators}
              errorMessages={errorMessages}
              updateParentValue={(value) => setAmount(value)}
            />
          </Grid>
        </Grid>
        <SubmitButton className={classes.submit} />
      </ValidatorForm>
    </div>
  );
}
