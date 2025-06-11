import "./styles.css";
import { createPlayer, IPlayer } from "./player/player";
import { createShip, IShip } from "./ship/ship";

const playerOne: IPlayer = createPlayer();
const playerTwo: IPlayer = createPlayer();

// Adding ships to players
const playerOneShips: IShip[] = [
  createShip(5),
  createShip(4),
  createShip(3),
  createShip(3),
  createShip(2),
];

const playerTwoShips: IShip[] = [
  createShip(5),
  createShip(4),
  createShip(3),
  createShip(3),
  createShip(2),
];

//! This is temporary
// Setting up predetermined coordinates for each player
if (
  playerOne.board.placeShip(5, 3, true, playerOneShips[0]) &&
  playerOne.board.placeShip(5, 4, true, playerOneShips[1]) &&
  playerOne.board.placeShip(1, 6, false, playerOneShips[2]) &&
  playerOne.board.placeShip(1, 10, false, playerOneShips[3]) &&
  playerOne.board.placeShip(2, 7, true, playerOneShips[4])
) {
  console.log("Placed playerOnes ships");
}

if (
  playerTwo.board.placeShip(5, 1, true, playerTwoShips[0]) &&
  playerTwo.board.placeShip(10, 5, false, playerTwoShips[1]) &&
  playerTwo.board.placeShip(10, 10, true, playerTwoShips[2]) &&
  playerTwo.board.placeShip(8, 3, false, playerTwoShips[3]) &&
  playerTwo.board.placeShip(4, 4, true, playerTwoShips[4])
) {
  console.log("Placed playerTwos ships");
}
//! This is temporary

//? Event listener for boards
const playerOneBoard = document.querySelector(".board");
playerOneBoard?.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLInputElement;
  //? First is the row number
  //? Second is the col number
  const row: number = parseInt(target.id.split(" ")[1].split("-")[1]);
  const col: number = parseInt(target.id.split(" ")[0].split("-")[1]);

  console.log(row, col);
  console.log(playerTwo.board.receiveAttack(row, col));
  playerTwo.board.allShipsSunken();
  // playerTwo.board.printMap();
});
//? Event listener for boards
