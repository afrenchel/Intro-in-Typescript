//Define the type of the arg accepted and the type of wht is expected to be returned
function addTwo(num: number): number {
  return num + 2;
  //   return "hello"; can't return a string
}
function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

//Give a default value
const loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// function getValue(myVal: number) {
//   if (myVal > 5) {
//     true;
//   }
//   return " 200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

// const heros= ["thor", "spiderman","ironman"];
const heros = [1, 2, 3];
//Automatically deduces the type of hero, but it is best practice
heros.map((hero): string => {
  return `hero is ${hero}`;
});

loginUser("h@gmail.com", "ha");

signUpUser("Alina", "alina@gmail.com", true);
addTwo(5);
getUpper("alina");

//Handling errors

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
