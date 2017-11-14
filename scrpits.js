/*
    Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
    After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
    Finally, check the amount against your bank account balance to see if you can afford it or not.
    You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
    You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
    Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/

const TAX_RATE = 0.08;
const PHONE_PRICE = 100;
const ACCESSORY_PRICE = 10;
const SPENDING_THRESHOLD = 110;

var bankAcountBalance = 300;
var total = 0;
var boughtPhones = 0;

function calculateTax(total) {
  return total * TAX_RATE;
}

function properPriceFormat(total) {
  return total.toFixed(2) + " PLN";
}

while(total < bankAcountBalance) {
  total = total + PHONE_PRICE;
  boughtPhones = boughtPhones + 1;
  
  if(total < SPENDING_THRESHOLD) {
    total = total + ACCESSORY_PRICE;
  }
}

total = total + calculateTax(total);
bankAcountBalance = bankAcountBalance - total;
total = properPriceFormat(total);

console.log(
  'You have bought ' + boughtPhones + ' phones for total price ' + total + ' . You have ' + properPriceFormat(bankAcountBalance) + ' left.'
  );

if (bankAcountBalance < 0) {
  console.log('You have ran out of money and cannot buy more phones, moreover you have debt. Learn to code and get senior fullstack developer job to buy some more.');
}