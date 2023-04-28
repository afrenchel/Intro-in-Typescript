//special type of array with restriction regardin the position of the data

// const user: (string|number)[] = ["hc",1];

let tuser: [string, number, boolean];

tuser = ["hc", 2, true];

//use case, in case of rgb

let rgb: [number, number, number] = [255, 233, 255];

type Usertupple = [number, string];

const newUser: Usertupple = [112, "eaxmple@google.com"];
