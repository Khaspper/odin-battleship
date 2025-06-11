import type { IShip } from "../ship/ship.ts";

export interface IGameboard {
  placeShip: (
    x: number,
    y: number,
    horizontal: boolean,
    ship: IShip
  ) => boolean;
  receiveAttack: (x: number, y: number) => boolean;
  allShipsSunken: () => boolean;
  getRemainingShips: () => Set<IShip>;
  buildBoard: () => HTMLElement;
  renderShips: () => void;
  printMap: () => void;
}

export function gameBoard(board: HTMLElement): IGameboard {
  const map = new Map<string, IShip>();
  const shots = new Set<string>();
  const remainingShips = new Set<IShip>();

  function formatCoord(x: number, y: number): string {
    return `${x},${y}`;
  }

  function placeShipVertically(
    startingX: number,
    startingY: number,
    shipLength: number
  ): Set<string> {
    const mySet = new Set<string>();
    for (let i = startingY; i > startingY - shipLength; i--) {
      mySet.add(`${startingX},${i}`);
    }
    return mySet;
  }

  function placeShipHorizontally(
    startingX: number,
    startingY: number,
    shipLength: number
  ): Set<string> {
    const mySet = new Set<string>();
    for (let i = startingX; i > startingX - shipLength; i--) {
      mySet.add(`${i},${startingY}`);
    }
    return mySet;
  }

  function freeSpace(coords: Set<string>): boolean {
    for (const c of coords) {
      if (map.has(c)) return false;
    }
    return true;
  }

  function registerShip(coords: Set<string>, ship: IShip): boolean {
    if (!freeSpace(coords)) return false;
    for (const c of coords) {
      map.set(c, ship);
    }
    remainingShips.add(ship);
    return true;
  }

  //TODO: Hello future Mark! All you have to do right now is
  //TODO: Implement an attackShip function that hits the ship
  //TODO: checks if the ship sunken
  function attackShip(ship: IShip, coordinate: string): void {
    ship.hit();
    map.delete(coordinate);
    if (ship.getIsSunk()) {
      console.log("Ship is sunken");
      remainingShips.delete(ship);
    }
  }

  return {
    placeShip(x: number, y: number, horizontal: boolean, ship: IShip): boolean {
      if (x < 1 || x > 10 || y > 10 || y < 1) return false;
      let value: Set<string>;

      //? Vertical
      if (!horizontal) {
        if (y - ship.getLength() < 0) return false;
        value = placeShipVertically(x, y, ship.getLength());
      } else {
        if (x - ship.getLength() < 0) return false;
        value = placeShipHorizontally(x, y, ship.getLength());
      }
      if (!registerShip(value, ship)) return false;
      return true;
    },

    receiveAttack(x: number, y: number): boolean {
      const coordinate = formatCoord(x, y);

      // It's a hit
      if (map.has(coordinate)) {
        const ship = map.get(coordinate) as IShip;
        attackShip(ship, coordinate);
        shots.add(coordinate);
        return true;
      }

      shots.add(coordinate);
      // It's a miss
      return false;
    },

    //TODO: You also should implement a function that reports
    //TODO: whether or not all of their ships have been sunken
    allShipsSunken(): boolean {
      //! Do not delete this
      // I do not know if this function should be private or not...
      // Kanye: "I guess we'll never know"
      //! Do not delete this

      if (remainingShips.size === 0) {
        console.log("All ships have been sunk");
        return true;
      }
      return false;
    },

    renderShips(): void {
      this.printMap();
      for (const c of map.keys()) {
        const coord = c.split(",");
        console.log(coord[0], coord[1]);
        const cell = document.getElementById(`col-${coord[1]} row-${coord[0]}`);
        cell?.classList.add("ship");
      }
    },

    buildBoard(): HTMLElement {
      for (let i = 1; i <= 10; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 1; j <= 10; j++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.id = `col-${i} row-${j}`;
          row.appendChild(cell);
        }
        board.appendChild(row);
      }
      return board;
    },

    printMap(): void {
      console.log("Map: ", map);
    },

    getRemainingShips(): Set<IShip> {
      return remainingShips;
    },
  };
}
