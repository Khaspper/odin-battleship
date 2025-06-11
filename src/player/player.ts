import { IGameboard, gameBoard } from "../gameboard/gameboard";

export interface IPlayer {
  board: IGameboard;
}

export function createPlayer(): IPlayer {
  const board = gameBoard();
  return {
    board,
  };
}
