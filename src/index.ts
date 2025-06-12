import "./styles.css";
import { createPlayer, IPlayer } from "./player/player";
import { createShip, IShip } from "./ship/ship";

const body = document.body;

// TODO: Fix this shit
//! This shit is retarded and broken
const boardContainer = document.createElement("div");
boardContainer.classList.add("board-container");

const friendlyWatersContainer = document.createElement("div");
friendlyWatersContainer.classList.add("friendly-water");

const friendlyTitle = document.createElement("div");
friendlyTitle.classList.add("player-1-title");
friendlyTitle.textContent = "FRIENDLY WATERS";
friendlyWatersContainer.appendChild(friendlyTitle);

const friendlyBoard = document.createElement("div");
friendlyBoard.classList.add("friendly-board");
friendlyBoard.classList.add("board");
friendlyBoard.id = "player-1";
friendlyWatersContainer.appendChild(friendlyBoard);

const enemyWatersContainer = document.createElement("div");
enemyWatersContainer.classList.add("enemy-waters");

const enemyTitle = document.createElement("div");
enemyTitle.classList.add("enemy-title");
enemyTitle.textContent = "ENEMY WATERS";
enemyWatersContainer.appendChild(enemyTitle);

const enemyBoard = document.createElement("div");
enemyBoard.classList.add("enemy-board");
enemyBoard.classList.add("board");
enemyBoard.classList.add("board");
enemyBoard.id = "enemy";
enemyWatersContainer.appendChild(enemyBoard);

body.appendChild(boardContainer);
boardContainer.appendChild(friendlyWatersContainer);
boardContainer.appendChild(enemyWatersContainer);

const playerOne: IPlayer = createPlayer(friendlyBoard);
const enemy: IPlayer = createPlayer(enemyBoard);

playerOne.board.buildBoard();
enemy.board.buildBoard();

// Replace console.logs with actual DOM appending
// friendlyWatersContainer.appendChild(playerOne.board.buildBoard());
// enemyWatersContainer.appendChild(enemy.board.buildBoard());

//! This shit is retarded and broken
// TODO: Fix this shit

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
  playerOne.board.placeShip(5, 1, true, enemyShips[0]) &&
  playerOne.board.placeShip(10, 5, false, enemyShips[1]) &&
  playerOne.board.placeShip(10, 10, true, enemyShips[2]) &&
  playerOne.board.placeShip(8, 3, false, enemyShips[3]) &&
  playerOne.board.placeShip(4, 4, true, enemyShips[4])
) {
  console.log("Placed playerOnes ships");
  playerOne.board.renderShips();
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
enemyBoard?.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLInputElement;
  //? First is the row number
  //? Second is the col number
  const row: number = parseInt(
    target.classList.value.split(" ")[1].split(",")[1].split("-")[1]
  );
  const col: number = parseInt(
    target.classList.value.split(" ")[1].split(",")[0].split("-")[1]
  );

  console.log(row, col);
  console.log(enemy.board.receiveAttack(row, col));
  enemy.board.allShipsSunken();
  // enemy.board.printMap();
});

//? Event listener for boards
