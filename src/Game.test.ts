import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("should be able to fill cells with correct symbols", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(1)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("should be able to click on cell only once", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(0)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("should win if whole row is filled with X", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(4)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
  it("should win if whole row is filled with O", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(4)
    game.onClick(8)
    game.onClick(5)

    expect(game.getCells()).toEqual([
      "X", "X", "-",
      "O", "O", "O",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  });
  it("should win if whole column is filled with X", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(4)
    game.onClick(3)
    game.onClick(5)
    game.onClick(6)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "X", "O", "O",
      "X", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
  it("should win if a diagonal is filled with X", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(1)
    game.onClick(4)
    game.onClick(2)
    game.onClick(8)

    expect(game.getCells()).toEqual([
      "X", "O", "O",
      "-", "X", "-",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
  it("should not allow to continue if game has finished", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(1)
    game.onClick(4)
    game.onClick(2)
    game.onClick(8)
    game.onClick(3)

    expect(game.getCells()).toEqual([
      "X", "O", "O",
      "-", "X", "-",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
  it("should not allow to continue if game has finished", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(1)
    game.onClick(4)
    game.onClick(2)
    game.onClick(8)

    game.restart()

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("should be draw if all fiends are full and no winner", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(1)
    game.onClick(2)

    game.onClick(6)
    game.onClick(7)
    game.onClick(8)

    game.onClick(3)
    game.onClick(4)
    game.onClick(5)

    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "X", "O", "X",
      "O", "X", "O"
    ]);

    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });
});
