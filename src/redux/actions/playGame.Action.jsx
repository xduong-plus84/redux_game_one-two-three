import { END_GAME, PLAY_GAME } from "../constants/playGame";

export let playGameAction = () => {
  return {
    type: PLAY_GAME,
  };
};

export const endGameAcion = () => {
  return {
    type: END_GAME,
  };
};
