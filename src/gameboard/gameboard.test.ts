import { gameBoard } from "./gameboard";
import createShip from "../ship/ship";

let board: ReturnType<typeof gameBoard>;
beforeEach(() => {
  board = gameBoard();
});

//? These are all vertical using carrierShip ?//
describe("These are all vertical using carrierShip (length is 5)", () => {
  // Create the carrierShip and set the horizontal
  // to false (meaning the ship is being placed vertically
  let carrierShip: ReturnType<typeof createShip>;
  let horizontal: boolean;
  beforeEach(() => {
    carrierShip = createShip(5);
    horizontal = false;
  });

  test("Place ship at coordinate x, y (1, 1)", () => {
    expect(board.placeShip(1, 1, horizontal, carrierShip)).toBeFalsy;
  });

  test("Place ship at coordinate x, y (10, 1)", () => {
    expect(board.placeShip(10, 1, horizontal, carrierShip)).toBeFalsy;
  });

  test("Place ship at coordinate x, y (1, 10)", () => {
    expect(board.placeShip(1, 10, horizontal, carrierShip)).toBeTruthy;
  });

  test("Place ship at coordinate x, y (10, 10)", () => {
    expect(board.placeShip(10, 10, horizontal, carrierShip)).toBeTruthy;
  });

  test("Place ship at coordinate x, y (3, 7)", () => {
    expect(board.placeShip(3, 7, horizontal, carrierShip)).toBeTruthy;
  });

  test("Place ship at coordinate x, y (3, 1)", () => {
    expect(board.placeShip(3, 1, horizontal, carrierShip)).toBeFalsy;
  });
});
//? These are all vertical using carrierShip ?//

//? These are all horizontal using carrierShip ?//
describe("\nThese are all horizontal using carrierShip (length is 5)", () => {
  // Create the carrierShip and set the horizontal
  // to false (meaning the ship is being placed vertically
  let carrierShip: ReturnType<typeof createShip>;
  let horizontal: boolean;
  beforeEach(() => {
    carrierShip = createShip(5);
    horizontal = true;
  });

  test("Place ship at coordinate x, y (1, 1)", () => {
    expect(board.placeShip(1, 1, horizontal, carrierShip)).toBeFalsy;
  });

  test("Place ship at coordinate x, y (1, 10)", () => {
    expect(board.placeShip(1, 10, horizontal, carrierShip)).toBeFalsy;
  });

  test("Place ship at coordinate x, y (4, 10)", () => {
    expect(board.placeShip(4, 10, horizontal, carrierShip)).toBeFalsy;
  });

  test("Place ship at coordinate x, y (5, 3)", () => {
    expect(board.placeShip(5, 3, horizontal, carrierShip)).toBeTruthy;
  });

  test("Place ship at coordinate x, y (10, 4)", () => {
    expect(board.placeShip(10, 4, horizontal, carrierShip)).toBeTruthy;
  });

  test("Place ship at coordinate x, y (5, 3)", () => {
    expect(board.placeShip(5, 3, horizontal, carrierShip)).toBeTruthy;
    expect(board.placeShip(5, 3, horizontal, carrierShip)).toBeFalsy;
  });
});
//? These are all horizontal using carrierShip ?//
