class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age:number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const whis = new Human("whis", 32, "unknown")

const sayHi = (person: Human):void => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`);
};

sayHi(whis);

export { };