"use strict";
let describe_city = (city, country = "Pakistan") => {
    return `${city}, is in ${country}`;
};
console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("Quetta"));
