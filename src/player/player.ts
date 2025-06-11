import { IGameboard, gameBoard } from "../gameboard/gameboard";

export interface IPlayer {
  board: IGameboard;
}

export function createPlayer(board: HTMLElement): IPlayer {
  return {
    board: gameBoard(board),
  };
}
