

const findTheOldest = function(people) {

    const arrayAge = [];
    people.forEach(person => {
        if (Object.values(person).includes(person.yearOfDeath)){
        arrayAge.push(person.yearOfDeath - person.yearOfBirth)
        }else{
            arrayAge.push(2022 - person.yearOfBirth)
        }
      });
    const highestAge = Math.max(...arrayAge)
    const indexOfPerson = arrayAge.indexOf(highestAge)
    return people[indexOfPerson]
};




const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
