const User = {
  name: " Alina",
  email: "alina@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Alina", isPaid: false });
//Let's you add the email even if it is not in the function params
const newUser = { name: "Sam", isPaid: false, email: "sam@gmail.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 3.99 };
}

//Type aliases

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number; // optional parameter
};

// function createUserExample(user: User): User {
//   return { name: "", email: "", isActive: false };
// }

const myUser: User = {
  _id: "1234",
  name: "John",
  email: "john@example.com",
  isActive: false,
};

myUser.email = "sam@gmail.com";
// myUser._id= not possible to change

type cardNumber = {
  cardNumber: string;
};
type cardDate = {
  cardDate: string;
};

//mix and match

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
