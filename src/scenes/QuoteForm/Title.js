import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title({ title }) {
  return (
    <Typography component="h1" variant="h4">
      {title}
    </Typography>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};
