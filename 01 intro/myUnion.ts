//Not sure what type of data is expected
let score: number | string = 33;

score = 44;

score = "55";

//Example

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let alina: User | Admin = {
  name: "hitesh",
  id: 334,
};
alina = { username: "al", id: 332 };

// function getDBId(id: number| string) {
//     //making some API calls
//     console.log(`DB id is: {id}`);
// }

getDBId(3);
getDBId("3");

//strong checking of the type to apply methods to the data
function getDBId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array

const data: number[] = [1, 2, 3]; // array of numbers
const data2: string[] = ["1", "2", "3"]; // array of strings

const data3: (string | number)[] = [1, 2, "3"]; // union type, array of number and strings

//specify a value thaht cannot be changes, very useful

let seatAirplane: "aisle" | "middle" | "window";
// seatAirplane= "crew"// can't be assinged to "crew"
