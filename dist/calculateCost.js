"use strict";
const totalPrice = ({ price, discount, isInstallment, months }) => {
    return price * (100 - discount) / 100 / (isInstallment ? months : 1);
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);
