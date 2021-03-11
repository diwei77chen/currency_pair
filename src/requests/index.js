/**
 *
 * @param {*} caller
 * @param {*} url
 * @returns
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
      return CustomerRate;
    });
};
