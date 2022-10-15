import { BAO, BUA, KEO } from "../redux/constants/keoBuaBao";

export const randomOneTwoThree = () => {
  let x = Math.floor(Math.random() * 3 + 1);
  switch (x) {
    case 1: {
      return KEO;
    }
    case 2: {
      return BUA;
    }
    case 3: {
      return BAO;
    }
  }
};
