import { getCustomerRate } from './index';
import { OFX_PUBLIC_INDIVIDUAL_API, CUSTOMER_ID } from '../settings/settings';
import { buildCustomerRateAPI } from '../utils';

describe('getCustomerRate Test Suite', () => {
  test('Given a valid caller, API, fromCurrency and toCurrency, it should return a customer rate as a number if the request succeeded.', (done) => {
    const fromCurrency = 'AUD';
    const toCurrency = 'USD';
    const url = buildCustomerRateAPI(
      OFX_PUBLIC_INDIVIDUAL_API,
      fromCurrency,
      toCurrency,
      CUSTOMER_ID
    );
    const succeededFetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ CustomerRate: 0.77 }),
      })
    );

    getCustomerRate(succeededFetch, url).then((data) => {
      expect(typeof data).toBe('number');
      done();
    });
  });
  test('Given a valid caller and API, but unknown fromCurrency or toCurrency, it should throw an error', (done) => {
    const fromCurrency = 'XXX';
    const toCurrency = 'USD';
    const url = buildCustomerRateAPI(
      OFX_PUBLIC_INDIVIDUAL_API,
      fromCurrency,
      toCurrency,
      CUSTOMER_ID
    );
    const failedFetch = jest.fn(() =>
      Promise.resolve({
        status: 500,
      })
    );
    getCustomerRate(failedFetch, url).catch((error) => {
      expect(typeof error).toBe('object');
      done();
    });
  });
});
