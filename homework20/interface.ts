interface User {
    age: number;
    car?: string;
    children?: number;
    name: string;
    occupation: string;
    role?: string;
}

interface Admin {
    age: number;
    name: string;
    role: string;
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];

const admin: Admin = {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'

}

type Person = Admin | User;

const persons: Person[]= [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
