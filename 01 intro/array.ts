const superHeros: string[] = [];
const herPower: number[] = [];

//another way
const heroLife: Array<number> = [];

superHeros.push("spiderman");
herPower.push(2);

type UserArray = {
  name: string;
  isActive: boolean;
};
const allUsers: UserArray[] = [];
allUsers.push({ name: "Spiderman", isActive: true });
