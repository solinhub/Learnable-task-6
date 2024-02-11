function validateCreditCard(cardNumber) {
    // Regular expressions for various credit card types
    const cardRegEx = {
        "Discover": /^(6011\d{12})$/,
        "Visa": /^4\d{12}(?:\d{3})?$/,
        "MasterCard": /^(5[1-5]\d{14})$/,
        "China UnionPay": /^(62\d{14,17})$/,
        "American Express": /^(3[47]\d{13})$/,
        "JCB": /^(?:2131|1800|35\d{3})\d{11}$/,
        "RuPay": /^(?:508[5-9]\d{12}|6069\d{12}|(?:622(?:1(?:2[6-9]|[3-9]\d)|[2-8]\d{2}|9(?:[01]\d|2[0-5]))\d{10}))$/
    };

    // Iterate through card types and check if the card number matches any of the regex patterns
    for (const [cardType, regex] of Object.entries(cardRegEx)) {
        if (regex.test(cardNumber)) {
            return `Valid ${cardType} card number`;
        }
    }
    
    // If none of the patterns matched, return invalid
    return "Invalid card number";
}

// Usage:
const cardNumber = "6212345678901234"; 
console.log(validateCreditCard(cardNumber));