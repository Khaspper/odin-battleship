import Ship from "./ship";

test("Ship is created with the correct length (3)", () => {
  const ship = Ship(3);
  expect(ship.getLength()).toBe(3);
  expect(ship.getHealth()).toBe(3);
  expect(ship.getIsSunk()).toBeFalsy();
});

test("Ship loses health", () => {
  const ship = Ship(3);
  expect(ship.getIsSunk()).toBeFalsy();

  ship.hit();
  expect(ship.getHealth()).toBe(2);
  expect(ship.getIsSunk()).toBeFalsy();

  ship.hit();
  expect(ship.getHealth()).toBe(1);
  expect(ship.getIsSunk()).toBeFalsy();

  ship.hit();
  expect(ship.getHealth()).toBe(0);
  expect(ship.getIsSunk()).toBeTruthy();
});

test("Ship does not lose health if health already at 0", () => {
  const ship = Ship(0);
  expect(ship.getIsSunk()).toBeTruthy();
  ship.hit();
  expect(ship.getHealth()).toBe(0);
});

test("Ship with negative length is created with 0 health", () => {
  const ship = Ship(-1);
  expect(ship.getLength()).toBe(0);
  expect(ship.getHealth()).toBe(0);
  expect(ship.getIsSunk()).toBeTruthy();
});

test("Ship with non-integer length is created with 0 health", () => {
  const ship = Ship(3.5);
  expect(ship.getLength()).toBe(0);
  expect(ship.getHealth()).toBe(0);
  expect(ship.getIsSunk()).toBeTruthy();
});
