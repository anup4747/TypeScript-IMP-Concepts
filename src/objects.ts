interface User {
    name: string;
    isPaid: boolean;
}

function createUser({ name, isPaid }: User) {
    // Function logic here
}

let newUser: User = { name: "Anup", isPaid: true };

createUser(newUser);  // No error
