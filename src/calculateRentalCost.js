/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_COST = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;

  if (days >= 7) {
    return RENTAL_COST * days - DISCOUNT_7_DAYS;
  }

  if (days >= 3) {
    return RENTAL_COST * days - DISCOUNT_3_DAYS;
  }

  return RENTAL_COST * days;
}

module.exports = calculateRentalCost;
