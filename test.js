// mock object to test the console
export const myObj = {
    name: 'myObj',
    age: 18,
    address: {
        city: 'test',
        street: 'test'
    },
    friends: ['a', 'b', 'c'],
    functions: {
        sayHi: function () {
            console.log('hi');
        },
        sayHello: () => {
            console.log('hello');
        },
        sayName: function () {
            console.log(this.name);
        }
    }
};
