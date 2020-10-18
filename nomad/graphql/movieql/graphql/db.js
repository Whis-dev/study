export const people = [
    {
        id: 1,
        name: "whis",
        age: 32,
        gender: "female"      
    },
    {
        id: 2,
        name: "kalh",
        age: 18,
        gender: "male"
    },
    {
        id: 3,
        name: "Goku",
        age: 48,
        gender: "male"
    },
    {
        id: 4,
        name: "five",
        age: 50,
        gender: "male"
    },
    {
        id: 5,
        name: "Andy",
        age: 20,
        gender: "male"
    },
    {
        id: 6,
        name: "uraraka",
        age: 17,
        gender: "female"
    },
    {
        id: 7,
        name: "nezuko",
        age: 14,
        gender: "female"
    }
];

export const getById = id => {
    return people.filter(person => id === person.id)[0];
}

