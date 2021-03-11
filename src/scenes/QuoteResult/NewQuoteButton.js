import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';

export default function NewQuoteButton({ onNewQuotePress }) {
  return <Button onClick={() => onNewQuotePress()}>START NEW QUOTE</Button>;
}

NewQuoteButton.propTypes = {
  onNewQuotePress: PropTypes.func,
};
