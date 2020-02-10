interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: 'whis',
    age: 32,
    gender: 'unknown'
}

const sayHi = (person: Human):void => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`);
};

sayHi(person);

export { };