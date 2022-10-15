import { randomOneTwoThree } from "../../util/randomOneTwoThree";
import { BAO, BUA, KEO } from "../constants/keoBuaBao";
import { PLAYER } from "../constants/player";
import { PLAY_GAME } from "../constants/playGame";

let initialState = {
  player: KEO,
  playerComputer: KEO,
  soBanThang: 0,
  soLanChoi: 0,
};

export let reducerGameOneTwoThree = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER: {
      state.player = action.payload;

      return { ...state };
    }
    case PLAY_GAME: {
      state.soLanChoi += 1;
      state.playerComputer = randomOneTwoThree();

      if (
        (state.player == KEO && state.playerComputer == BAO) ||
        (state.player == BUA && state.playerComputer == KEO) ||
        (state.player == BAO && state.playerComputer == BUA)
      ) {
        state.soBanThang += 1;
      }

      return { ...state };
    }
    default: {
      return { ...state };
      // do lần đầu load trang không có return thì sẽ báo lỗi
    }
  }
};
