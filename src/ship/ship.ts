interface Ship {
  hit: () => void;
  getLength: () => number;
  getHealth: () => number;
  getIsSunk: () => boolean;
}

function Ship(length: number): Ship {
  let isSunk = false;
  let health = length;
  if (length <= 0 || !Number.isInteger(length)) {
    health = 0;
    length = 0;
    isSunk = true;
  }

  return {
    hit: (): void => {
      if (health > 0) health--;
      if (health === 0) isSunk = true;
    },
    getLength: () => length,
    getHealth: () => health,
    getIsSunk: () => isSunk,
  };
}

export default Ship;
