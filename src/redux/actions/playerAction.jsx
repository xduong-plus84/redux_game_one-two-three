import { PLAYER } from "../constants/player";

export let playerAction = (value) => {
  return {
    type: PLAYER,
    payload: value,
  };
};
