const name = "whis",
    age = 32,
    gender = "unknown";

const sayHi = (name: string, age: number, gender: string):void => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}!`);
};

sayHi(name, age, gender);

export { };