import { gameBoard } from "./gameboard";
import { createShip } from "../ship/ship";

// let board: ReturnType<typeof gameBoard>;
// beforeEach(() => {
//   board = gameBoard();
// });

// //? These are all vertical using carrierShip ?//
// describe("These are all vertical using carrierShip (length is 5)", () => {
//   // Create the carrierShip and set the horizontal
//   // to false (meaning the ship is being placed vertically
//   let carrierShip: ReturnType<typeof createShip>;
//   let horizontal: boolean;
//   beforeEach(() => {
//     carrierShip = createShip(5);
//     horizontal = false;
//   });

//   test("Place ship at coordinate x, y (1, 1)", () => {
//     expect(board.placeShip(1, 1, horizontal, carrierShip)).toBeFalsy();
//   });

//   test("Place ship at coordinate x, y (10, 1)", () => {
//     expect(board.placeShip(10, 1, horizontal, carrierShip)).toBeFalsy();
//   });

//   test("Place ship at coordinate x, y (1, 10)", () => {
//     expect(board.placeShip(1, 10, horizontal, carrierShip)).toBeTruthy();
//   });

//   test("Place ship at coordinate x, y (10, 10)", () => {
//     expect(board.placeShip(10, 10, horizontal, carrierShip)).toBeTruthy();
//   });

//   test("Place ship at coordinate x, y (3, 7)", () => {
//     expect(board.placeShip(3, 7, horizontal, carrierShip)).toBeTruthy();
//   });

//   test("Place ship at coordinate x, y (3, 1)", () => {
//     expect(board.placeShip(3, 1, horizontal, carrierShip)).toBeFalsy();
//   });
// });
// //? These are all vertical using carrierShip ?//

// //? These are all horizontal using carrierShip ?//
// describe("\nThese are all horizontal using carrierShip (length is 5)", () => {
//   // Create the carrierShip and set the horizontal
//   // to false (meaning the ship is being placed vertically
//   let carrierShip: ReturnType<typeof createShip>;
//   let horizontal: boolean;
//   beforeEach(() => {
//     carrierShip = createShip(5);
//     horizontal = true;
//   });

//   test("Place ship at coordinate x, y (1, 1)", () => {
//     expect(board.placeShip(1, 1, horizontal, carrierShip)).toBeFalsy();
//   });

//   test("Place ship at coordinate x, y (1, 10)", () => {
//     expect(board.placeShip(1, 10, horizontal, carrierShip)).toBeFalsy();
//   });

//   test("Place ship at coordinate x, y (4, 10)", () => {
//     expect(board.placeShip(4, 10, horizontal, carrierShip)).toBeFalsy();
//   });

//   test("Place ship at coordinate x, y (5, 3)", () => {
//     expect(board.placeShip(5, 3, horizontal, carrierShip)).toBeTruthy();
//   });

//   test("Place ship at coordinate x, y (10, 4)", () => {
//     expect(board.placeShip(10, 4, horizontal, carrierShip)).toBeTruthy();
//   });

//   test("Place ship at coordinate x, y (5, 3)", () => {
//     expect(board.placeShip(5, 3, horizontal, carrierShip)).toBeTruthy();
//     expect(board.placeShip(5, 3, horizontal, carrierShip)).toBeFalsy();
//   });
// });
// //? These are all horizontal using carrierShip ?//

// //? These are to check if an Attack has been received ?//
// describe("\n These are to check if an Attack has been received", () => {
//   let carrierShip: ReturnType<typeof createShip>;
//   let horizontal: boolean;
//   beforeEach(() => {
//     carrierShip = createShip(5);
//     horizontal = true;
//   });

//   test("Receive attack at (5, 3)", () => {
//     board.placeShip(5, 3, horizontal, carrierShip);
//     expect(board.receiveAttack(5, 3)).toBeTruthy();
//     expect(board.receiveAttack(4, 3)).toBeTruthy();
//     expect(board.receiveAttack(3, 3)).toBeTruthy();
//     expect(board.receiveAttack(2, 3)).toBeTruthy();
//     expect(board.receiveAttack(1, 3)).toBeTruthy();
//     expect(board.receiveAttack(6, 3)).toBeFalsy();
//   });

//   test("Receive attack at (5, 3) duplicates", () => {
//     board.placeShip(5, 3, horizontal, carrierShip);
//     board.printMap();
//     expect(board.receiveAttack(5, 3)).toBeTruthy();
//     expect(board.receiveAttack(4, 3)).toBeTruthy();
//     expect(board.receiveAttack(5, 3)).toBeFalsy();
//     expect(board.receiveAttack(5, 3)).toBeFalsy();
//     expect(board.receiveAttack(1, 3)).toBeTruthy();
//     expect(board.receiveAttack(6, 3)).toBeFalsy();
//   });
// });
// //? These are to check if an Attack has been received ?//

// //? These are to check if ships are sunken ?//
// describe("\n These are to check if ships are sunken", () => {
//   let carrierShip: ReturnType<typeof createShip>;
//   let battleShip: ReturnType<typeof createShip>;
//   let cruiserShip: ReturnType<typeof createShip>;
//   let submarineShip: ReturnType<typeof createShip>;
//   let destroyerShip: ReturnType<typeof createShip>;
//   beforeEach(() => {
//     carrierShip = createShip(5);
//     battleShip = createShip(4);
//     cruiserShip = createShip(3);
//     submarineShip = createShip(3);
//     destroyerShip = createShip(2);

//     board.placeShip(5, 3, true, carrierShip);
//     board.placeShip(5, 4, true, battleShip);
//     board.placeShip(1, 6, false, cruiserShip);
//     board.placeShip(1, 10, false, submarineShip);
//     board.placeShip(2, 7, true, destroyerShip);
//   });

//   test("This is to check if all ships are not sunk only one ship should be sunken", () => {
//     expect(board.receiveAttack(5, 3)).toBeTruthy();
//     expect(board.receiveAttack(4, 3)).toBeTruthy();
//     expect(board.receiveAttack(3, 3)).toBeTruthy();
//     expect(board.receiveAttack(2, 3)).toBeTruthy();
//     expect(board.receiveAttack(1, 3)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(4);
//     expect(board.allShipsSunken()).toBeFalsy();
//   });

//   test("This is to check if two ships are sunk", () => {
//     expect(board.receiveAttack(5, 3)).toBeTruthy();
//     expect(board.receiveAttack(4, 3)).toBeTruthy();
//     expect(board.receiveAttack(3, 3)).toBeTruthy();
//     expect(board.receiveAttack(2, 3)).toBeTruthy();
//     expect(board.receiveAttack(1, 3)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(4);

//     expect(board.receiveAttack(5, 4)).toBeTruthy();
//     expect(board.receiveAttack(4, 4)).toBeTruthy();
//     expect(board.receiveAttack(3, 4)).toBeTruthy();
//     expect(board.receiveAttack(2, 4)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(3);
//   });

//   test("This is to check if three ships are sunk", () => {
//     expect(board.receiveAttack(5, 3)).toBeTruthy();
//     expect(board.receiveAttack(4, 3)).toBeTruthy();
//     expect(board.receiveAttack(3, 3)).toBeTruthy();
//     expect(board.receiveAttack(2, 3)).toBeTruthy();
//     expect(board.receiveAttack(1, 3)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(4);

//     expect(board.receiveAttack(5, 4)).toBeTruthy();
//     expect(board.receiveAttack(4, 4)).toBeTruthy();
//     expect(board.receiveAttack(3, 4)).toBeTruthy();
//     expect(board.receiveAttack(2, 4)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(3);

//     expect(board.receiveAttack(1, 6)).toBeTruthy();
//     expect(board.receiveAttack(1, 5)).toBeTruthy();
//     expect(board.receiveAttack(1, 4)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(2);
//   });

//   test("This is to check if four ships are sunk", () => {
//     expect(board.receiveAttack(5, 3)).toBeTruthy();
//     expect(board.receiveAttack(4, 3)).toBeTruthy();
//     expect(board.receiveAttack(3, 3)).toBeTruthy();
//     expect(board.receiveAttack(2, 3)).toBeTruthy();
//     expect(board.receiveAttack(1, 3)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(4);

//     expect(board.receiveAttack(5, 4)).toBeTruthy();
//     expect(board.receiveAttack(4, 4)).toBeTruthy();
//     expect(board.receiveAttack(3, 4)).toBeTruthy();
//     expect(board.receiveAttack(2, 4)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(3);

//     expect(board.receiveAttack(1, 6)).toBeTruthy();
//     expect(board.receiveAttack(1, 5)).toBeTruthy();
//     expect(board.receiveAttack(1, 4)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(2);

//     expect(board.receiveAttack(1, 10)).toBeTruthy();
//     expect(board.receiveAttack(1, 9)).toBeTruthy();
//     expect(board.receiveAttack(1, 8)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(1);
//   });

//   test("This is to check if all ships are sunk", () => {
//     expect(board.receiveAttack(5, 3)).toBeTruthy();
//     expect(board.receiveAttack(4, 3)).toBeTruthy();
//     expect(board.receiveAttack(3, 3)).toBeTruthy();
//     expect(board.receiveAttack(2, 3)).toBeTruthy();
//     expect(board.receiveAttack(1, 3)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(4);

//     expect(board.receiveAttack(5, 4)).toBeTruthy();
//     expect(board.receiveAttack(4, 4)).toBeTruthy();
//     expect(board.receiveAttack(3, 4)).toBeTruthy();
//     expect(board.receiveAttack(2, 4)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(3);

//     expect(board.receiveAttack(1, 6)).toBeTruthy();
//     expect(board.receiveAttack(1, 5)).toBeTruthy();
//     expect(board.receiveAttack(1, 4)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(2);

//     expect(board.receiveAttack(1, 10)).toBeTruthy();
//     expect(board.receiveAttack(1, 9)).toBeTruthy();
//     expect(board.receiveAttack(1, 8)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(1);

//     expect(board.receiveAttack(2, 7)).toBeTruthy();
//     expect(board.receiveAttack(1, 7)).toBeTruthy();
//     expect(board.getRemainingShips().size).toBe(0);

//     expect(board.allShipsSunken()).toBeTruthy();
//   });
// });
// //? These are to check if ships are sunken ?//
