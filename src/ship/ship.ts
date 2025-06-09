interface IShip {
  hit: () => void;
  getLength: () => number;
  getHealth: () => number;
  getIsSunk: () => boolean;
}

function createShip(length: number): IShip {
  let isSunk = false;
  let hits = 0;
  if (length <= 0 || !Number.isInteger(length)) {
    hits = 0;
    length = 0;
    isSunk = true;
  }

  return {
    hit: (): void => {
      if (hits < length) hits += 1;
    },
    getLength: (): number => length,
    getHealth: (): number => length - hits,
    getIsSunk: (): boolean => (length - hits === 0 ? true : false),
  };
}

export default createShip;
