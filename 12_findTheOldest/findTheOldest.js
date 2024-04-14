const findTheOldest = function(peopleArray) {
  const currentYear = new Date().getFullYear();
  let olderAge = 0;
  let oldestPerson = {
    name: "",
    yearOfBirth: 0,
    yearOfDeath: 0,
  };
  return peopleArray.reduce((oldestPerson, person) => {
    if (!person.yearOfDeath) person.yearOfDeath = currentYear;
    const personAge = person.yearOfDeath - person.yearOfBirth;
    if (personAge > olderAge) {
      olderAge = personAge;
      oldestPerson = person;
    }
    return oldestPerson;
  }, oldestPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
