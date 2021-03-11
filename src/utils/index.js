import {
  getCountries,
  getCountryCallingCode,
  AsYouType,
} from 'libphonenumber-js';
import cc, { data } from 'currency-codes';

/**
 * Format currency and code for display
 * @param {string} currency Country currency
 * @param {string} code Country code
 * @returns {string}
 */
const formatCurrencyAndCode = (currency, code) => `${currency} (${code})`;

// A list of formatted currency code strings
export const currenciesAndCodes = data
  .map(({ currency, code } = {}) => formatCurrencyAndCode(currency, code))
  .sort();

/**
 * Get the currency code from a formatted currency code string
 * @param {string} currencyAndCode
 * @returns {string or null}
 */
export const getCurrencyCode = (currencyAndCode) => {
  if (!currencyAndCode || typeof currencyAndCode !== 'string') return null;
  const regex = /\(([^)]+)\)/; // match the currency code within a pair of parentheses
  const matches = currencyAndCode.match(regex);
  return Array.isArray(matches) && matches.length > 1 ? matches[1] : null;
};

/**
 * Get a formatted currency code string for display
 * @param {string} code Country code
 * @returns {string}
 */
export const getCurrencyCodeDisplay = (code) => {
  if (!code) return null;
  const { currency } = cc.code(code);
  return formatCurrencyAndCode(currency, code);
};

/**
 * Separate a digit by commas
 * @param {number} number
 * @returns {string}
 */
export const formatNumber = (number) => {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

/**
 * Build a customer API to retrieve a customer rate
 * @param {string} api
 * @param {string} fromCurrency Country currency
 * @param {string} toCurrency Country currency
 * @param {string} customerID
 * @returns {string}
 */
export const buildCustomerRateAPI = (
  api,
  fromCurrency,
  toCurrency,
  customerID
) => {
  if (!api || !fromCurrency || !toCurrency || !customerID) return '';
  return `${api}/${fromCurrency}/${toCurrency}/${customerID}?format=json`;
};

// a list of country code and calling code strings
export const countriesAndCallingCodes = getCountries()
  .map((country) => `${country} +${getCountryCallingCode(country)}`)
  .sort();

/**
 * Get the calling code from a country code and calling code string
 * @param {string} countryAndCode A country code string
 * @returns {string or null}
 */
export const getCallingCode = (countryAndCode) => {
  if (!countryAndCode || typeof countryAndCode !== 'string') return null;
  const splits = countryAndCode.split(' ');
  return splits.length > 1 ? splits[1] : null;
};

/**
 * Get a formatted contry code and calling code string from a country code
 * @param {string} code A country code
 * @returns {string}
 */
export const formatCountryAndCode = (code) => {
  if (!code) return '';
  const asYouType = new AsYouType();
  asYouType.input(`+${code}-`);
  const country = asYouType.getCountry();
  return `${country} +${code}`;
};
