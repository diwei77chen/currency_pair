/**
 * Get a customer rate.
 *
 * (Caller dependency is injected into the function which makes unit testing possible.
 * The dependency refer only to abstractions, not concretions.)
 *
 * @param {promise} caller Request caller
 * @param {string} url An API to call
 * @returns {promise} A promise resolves to a number
 */
export const getCustomerRate = (caller, url) => {
  return caller(url)
    .then((response) => {
      const { status } = response || {};
      if (status !== 200)
        throw new Error(
          'Error getting a customer rate. Please contact admins.'
        );
      return response.json();
    })
    .then((data) => {
      const { CustomerRate } = data || {};
      return Number(CustomerRate);
    });
};
