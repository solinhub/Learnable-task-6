This JavaScript program uses Regular Expressions to validate credit card numbers and identify their types. Each credit card type has a corresponding RegEx pattern.
Here's a brief explanation of the Regular Expression patterns used in this code:

## Discover
Starts with 6011 followed by 12 digits.
## Visa 
Starts with a 4 followed by 12 or 15 digits, optionally followed by 3 additional digits.
## MasterCard 
Starts with a 5 followed by a digit between 1 and 5, followed by 14 digits.
## China UnionPay 
Starts with 62 followed by 14 to 17 digits.
## American Express
Starts with either 34 or 37 followed by 13 digits.
## JCB
Starts with 2131, 1800, or 35, followed by 3 digits (representing JCB card prefix), followed by 11 digits.
## RuPay
Follows a combination of patterns for various Rupay card formats.

## Usage
If the input card number matches any of these patterns, the function returns _'Valid (corresponding card type) card number'_. If none of the patterns matched, the function returns _'Invalid card number'_.
