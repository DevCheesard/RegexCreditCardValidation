# RegexCreditCardValidation
This shows the use of Regular Expressions to validate credit cards in Js.
It's important to note that this is a simple implementation and it may not cover all possible cases of Credit card numbers.
 
## Description of the Regex patterns used in the code

The first pattern, "visaRegex" shows a visa regex pattern. <br/>
A visa card always starts with "4" and comprises of 13-16 digits. 
It should not contain any alphabet or special characters. <br/>
Where: <br/>
^ - Matches the start of the string. <br/>
4 - Matches the string that should start with 4. <br/>
[0-9]{12} - Matches the next twelve digits should be any between 0-9. <br/>
( - represents the start of the group. <br/>
[0-9]{3} - Matches the next three digits should be any between 0-9. <br/>
) - Matches the end of the group. <br/>
? - Matches the 0 or 1 time. <br/>
$ - Matches the end of the string. <br/>

The second pattern, "mastercardRegex" shows a masterCard regex pattern. <br/>
A mastercard comprises of 16 digits.
It should start with either two digits numbers may range from 51 to 55 or four digits numbers may range from 2221 to 2720.
this regex will match any Mastercard card number that starts with 5, 222, 22, 2, 27 and 2720 and has 12 more digits. <br/>
Where: <br/>
^ - Matches the start of the input string. <br/>
(?:) - A non-capturing group. This groups together the different options for the start of the card number without capturing the matched text. <br/>
5[1-5][0-9]{2} - Matches the start of a Mastercard card number with the first digit being a 5 and the second digit being in the range 1-5. <br/>
| - The "or" operator. This allows the regular expression to match any of the options separated by | <br/>
222[1-9] - Matches the start of a card number with the first three digits being 222 and the fourth digit being in the range 1-9. <br/>
22[3-9][0-9] - Matches the start of a card number with the first two digits being 22 and the third digit being in the range 3-9 and the forth digit being any digit. <br/>
2[3-6][0-9]{2} - Matches the start of a card number with the first digit being 2, the second digit being in the range 3-6 and the next two digits being any digit. <br/>
27[01][0-9] - Matches the start of a card number with the first two digits being 27, the third digit being either 0 or 1 and the forth digit being any digit. <br/>
2720 - Matches the start of a card number with the first four digits being 2720. <br/>
) - Closes the non-capturing group. <br/>
[0-9]{12} - Matches any 12 digits after the first four digits. <br/>
$ - Matches the end of the input string. <br/>

The third pattern, "verveRegex" shows a verve regex pattern. <br/>
A verve card always starts with "50" and comprises of 18-19 digits. <br/>
Where: <br/>
^ - Matches the start of the input string. <br/>
50 - Matches the first two digits of a Verve card number being 50. <br/>
[0-9]{14} - Matches any 14 digits after the first two digits. <br/>
$ - Matches the end of the input string. <br/>

## Requirements for running the code

1. The User needs to install node js
