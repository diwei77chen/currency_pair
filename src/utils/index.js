import {
  getCountries,
  getCountryCallingCode,
  AsYouType,
} from 'libphonenumber-js';
import cc, { data } from 'currency-codes';

export const countriesAndCallingCodes = getCountries()
  .map((country) => `${country} +${getCountryCallingCode(country)}`)
  .sort();

export const getCallingCode = (countryAndCode) => {
  if (!countryAndCode || typeof countryAndCode !== 'string') return null;
  const splits = countryAndCode.split(' ');
  return splits.length > 1 ? splits[1] : null;
};

export const formatCountryAndCode = (code) => {
  if (!code) return '';
  console.log(
    '🚀 ~ file: index.js ~ line 20 ~ formatCountryAndCode ~ code',
    code
  );
  const asYouType = new AsYouType();
  asYouType.input(`+${code}-`);
  const number = asYouType.getNumber();
  console.log(
    '🚀 ~ file: index.js ~ line 27 ~ formatCountryAndCode ~ number',
    number
  );
  const country = asYouType.getCountry();
  console.log(
    '🚀 ~ file: index.js ~ line 29 ~ formatCountryAndCode ~ country',
    country
  );
  return `${country} +${code}`;
};

const formatCurrencyAndCode = (currency, code) => `${currency} (${code})`;

export const currenciesAndCodes = data
  .map(({ currency, code } = {}) => formatCurrencyAndCode(currency, code))
  .sort();

export const getCurrencyCode = (currencyAndCode) => {
  if (!currencyAndCode || typeof currencyAndCode !== 'string') return null;
  const regex = /\(([^)]+)\)/; // match the currency code within a pair of parentheses
  const matches = currencyAndCode.match(regex);
  return Array.isArray(matches) && matches.length > 1 ? matches[1] : null;
};

export const getCurrencyCodeDisplay = (code) => {
  if (!code) return null;
  const { currency } = cc.code(code);
  return formatCurrencyAndCode(currency, code);
};

export const formatNumber = (number) => {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
