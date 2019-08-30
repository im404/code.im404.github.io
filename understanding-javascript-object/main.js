var phone = {
    brand: 'apple',
    call: function(phoneNumber) {
        // do call sb.
    }
}

// { brand: 'apple', call: [Function: call] }
console.log(phone)

// add version property
phone.version = "Xs Max"
    //phone['version'] = "Xs Max"

// { brand: 'apple', call: [Function: call], version: 'Xs Max' }
console.log(phone)

// delete version property
delete phone.version
    // delete phone['version']

// { brand: 'apple', call: [Function: call] }
console.log(phone)