import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button as MButton } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '5em',
    marginTop: theme.spacing(4),
  },
}));

export default function Button(props) {
  const classes = useStyles();
  return (
    <MButton
      className={classes.button}
      variant="contained"
      size="large"
      color="primary"
      {...props}
    />
  );
}

Button.propTypes = {
  children: PropTypes.object,
};
