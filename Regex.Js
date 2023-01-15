function validateCard(cardNumber) {
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercardRegex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
  const verveRegex = /^50[0-9]{14}$/;

// Visa: starts with 4, length of 13 or 16 digits
// Mastercard: starts with 51-55 or four digits numbers may range from 2221 to 2720, length of 16 digits
// Verve: starts with 50, length of 16 digits
  
  if (visaRegex.test(cardNumber)) {
    return "Visa";
  } else if (mastercardRegex.test(cardNumber)) {
    return "Mastercard";
  } else if (verveRegex.test(cardNumber)) {
    return "Verve";
  } else {
    return "Invalid card number";
  }
}
//You can test this function using


console.log(validateCard("4111111111111111"));  // Visa
console.log(validateCard("5114496353984312"));  // Mastercard
console.log(validateCard("5060789012345678"));  // Verve
console.log(validateCard("1234567890"));  // Invalid card number

//Note that this is a simple implementation and it may not cover all possible cases. It's also important to note that this code is for demonstration purposes only and should not be used in a production environment.

/*This regular expression uses a combination of "|" (OR) operators to match the different patterns of Visa, Mastercard, and Verve. 
The "^" and "$" symbols are used to start and end the input string, respectively.
The "(?:)" is used to group the parts of the regex without capture. */


