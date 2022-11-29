const { createSelector } = require("@reduxjs/toolkit");

const cartSelector = (state: any) => state.cart;

export const cartTotalSelector = createSelector([cartSelector], (cart: any) =>
          cart.reduce((total: number, item: any) => (total += item.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart: any) =>
          cart.reduce((total: number, item: any) => (total += parseFloat(item.price) * item.quantity), 0)
);