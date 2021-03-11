import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { formatNumber } from '../../utils';
import NewQuoteButton from './NewQuoteButton';
import Title from '../QuoteForm/Title';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    marginTop: theme.spacing(2),
  },
  textStart: {
    padding: theme.spacing(2),
    textAlign: 'flex-start',
  },
  textCenter: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  customerRate: {
    textAlign: 'center',
    color: theme.palette.success.main,
  },
  amount: {
    color: theme.palette.primary.main,
  },
  newQuote: {
    marginTop: theme.spacing(6),
  },
}));

export default function QuoteResult({ location = {} }) {
  const { state } = location;
  const { amount, customerRate, fromCurrency, toCurrency } = state || {};
  const classes = useStyles();
  const history = useHistory();
  const decimal = 2;
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
      <Grid
        className={classes.container}
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography component="h1" variant="h4">
            OFX Customer Rate
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={classes.container}
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4}>
          <Typography
            className={classes.customerRate}
            component="h1"
            variant="h3"
          >
            {customerRate}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={classes.container}
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4}>
          <Typography component="h1" variant="h5">
            From
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.container}
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={1}>
          <Typography component="h1" variant="h5">
            {fromCurrency}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.amount} component="h1" variant="h4">
            {formatNumber(Number(amount).toFixed(decimal))}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={classes.container}
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4}>
          <Typography component="h1" variant="h5">
            To
          </Typography>
        </Grid>
      </Grid>

      <Grid
        className={classes.container}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={1}>
          <Typography component="h1" variant="h5">
            {toCurrency}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.amount} component="h1" variant="h4">
            {formatNumber(Number(amount * customerRate).toFixed(decimal))}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={classes.newQuote}
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <NewQuoteButton onNewQuotePress={() => history.goBack()} />
        </Grid>
      </Grid>
    </div>
  );
}

QuoteResult.propTypes = {
  location: PropTypes.object,
};
