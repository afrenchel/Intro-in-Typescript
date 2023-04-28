interface UserInterface {
  readonly dbId: number;
  email: string;
  id: number;
  googleId?: string;
  //   startTrial: ()=> string

  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

const hitesh: UserInterface = {
  dbId: 22,
  email: "h@h.com",
  id: 2211,
  startTrial: () => {
    return "trail started";
  },
  getCoupon: (couponname: "hitesh10", off: 10) => {
    return 10;
  },
};
