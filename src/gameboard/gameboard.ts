import type { IShip } from "../ship/ship.ts";

interface IGameboard {
  placeShip: (
    x: number,
    y: number,
    horizontal: boolean,
    ship: IShip
  ) => boolean;
  receiveAttack: (x: number, y: number) => boolean;
  printMap: () => void;
}

export function gameBoard(): IGameboard {
  const map = new Map<string, IShip>();
  const shots = new Set<string>();

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
    return true;
  }

  function getShipName(length: number): string {
    if (length === 5) return "Carrier";
    if (length === 4) return "Battleship";
    if (length === 2) return "Patrol Boat";
    if (map.has("Destroyer")) return "Submarine";
    return "Destroyer";
  }

  return {
    placeShip(x: number, y: number, horizontal: boolean, ship: IShip): boolean {
      if (x < 1 || x > 10 || y > 10 || y < 1) return false;
      let value: Set<string>;
      let name: string;

      //? Vertical
      if (!horizontal) {
        if (y - ship.getLength() < 0) return false;
        value = placeShipVertically(x, y, ship.getLength());
      } else {
        if (x - ship.getLength() < 0) return false;
        value = placeShipHorizontally(x, y, ship.getLength());
      }
      if (!registerShip(value, ship)) return false;

      name = getShipName(ship.getLength());
      return true;
    },

    receiveAttack(x: number, y: number): boolean {
      const coordinate = formatCoord(x, y);

      // It's a hit
      if (map.has(coordinate)) {
        const ship = map.get(coordinate) as IShip;
        ship.hit();
        map.delete(coordinate);
        shots.add(coordinate);
        return true;
      }

      shots.add(coordinate);
      // It's a miss
      return false;
    },

    printMap(): void {
      console.log("Map: ", map);
    },
  };
}
