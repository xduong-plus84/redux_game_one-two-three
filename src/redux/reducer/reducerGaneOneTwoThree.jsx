import { randomOneTwoThree } from "../../util/randomOneTwoThree";
import { BAO, BUA, KEO } from "../constants/keoBuaBao";
import { PLAYER } from "../constants/player";
import { END_GAME, PLAY_GAME } from "../constants/playGame";

let initialState = {
  player: KEO,
  playerComputer: KEO,
  soBanThang: 0,
  soLanChoi: 0,
  thongBao: "I'll kick your ass",
};

export let reducerGameOneTwoThree = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER: {
      state.player = action.payload;

      return { ...state };
    }

    case PLAY_GAME: {
      state.playerComputer = randomOneTwoThree();
      return { ...state };
    }

    case END_GAME: {
      // thắng
      if (
        (state.player == KEO && state.playerComputer == BAO) ||
        (state.player == BUA && state.playerComputer == KEO) ||
        (state.player == BAO && state.playerComputer == BUA)
      ) {
        state.soBanThang += 1;
        state.thongBao = "You win";
      }

      // hoà
      if (
        (state.player == KEO && state.playerComputer == KEO) ||
        (state.player == BUA && state.playerComputer == BUA) ||
        (state.player == BAO && state.playerComputer == BAO)
      ) {
        state.thongBao = "Even game";
      }

      //thua
      if (
        (state.player == KEO && state.playerComputer == BUA) ||
        (state.player == BUA && state.playerComputer == BAO) ||
        (state.player == BAO && state.playerComputer == KEO)
      ) {
        state.thongBao = "Thua sml nha !!";
      }

      state.soLanChoi += 1;
      return { ...state };
    }

    default: {
      return { ...state };
      // do lần đầu load trang không có return thì sẽ báo lỗi
    }
  }
};
