import "./styles.css";
import { createPlayer, IPlayer } from "./player/player";
import { createShip, IShip } from "./ship/ship";

const playerOne: IPlayer = createPlayer();
const enemy: IPlayer = createPlayer();

// Adding ships to players
const playerOneShips: IShip[] = [
  createShip(5),
  createShip(4),
  createShip(3),
  createShip(3),
  createShip(2),
];

const enemyShips: IShip[] = [
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
  enemy.board.placeShip(5, 1, true, enemyShips[0]) &&
  enemy.board.placeShip(10, 5, false, enemyShips[1]) &&
  enemy.board.placeShip(10, 10, true, enemyShips[2]) &&
  enemy.board.placeShip(8, 3, false, enemyShips[3]) &&
  enemy.board.placeShip(4, 4, true, enemyShips[4])
) {
  console.log("Placed enemy's ships");
}
//! This is temporary

//? Event listener for boards
const enemyBoard = document.querySelector(".enemy-board");
enemyBoard?.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLInputElement;
  //? First is the row number
  //? Second is the col number
  const row: number = parseInt(target.id.split(" ")[1].split("-")[1]);
  const col: number = parseInt(target.id.split(" ")[0].split("-")[1]);

  console.log(row, col);
  console.log(enemy.board.receiveAttack(row, col));
  enemy.board.allShipsSunken();
  // enemy.board.printMap();
});

//? Event listener for boards
