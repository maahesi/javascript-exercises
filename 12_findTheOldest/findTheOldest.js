const findTheOldest = function(people) {
    let age = 0,
        highestAge = 0,
        personIndex = 0,
        year = new Date();
    for (let i = 0; i < people.length; i++) {
        if(!Number.isFinite(people[i].yearOfDeath)) {
            year.getFullYear();
            age = year - people[i].yearOfBirth;
        } else {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        if(age > highestAge) {
            highestAge = age;
            personIndex = i;
        }
    }

    return people[personIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
