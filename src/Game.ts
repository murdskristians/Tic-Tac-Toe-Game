export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  turn: XO = "X";

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.turn;
  }
  isWinningCombination(x:number, y:number, z:number): boolean{
    return this.cells[x] === this.cells[y] && this.cells[y] === this.cells[z] && this.cells[z] !== "-"
  }
  getWinner(): XO {
    //ROWS
    if ( this.isWinningCombination(0, 1, 2) ) return this.cells[0];
    if ( this.isWinningCombination(3, 4, 5) ) return this.cells[3];
    if ( this.isWinningCombination(6, 7, 8) ) return this.cells[6];
    //Columns
    if ( this.isWinningCombination(0, 3, 6) ) return this.cells[0];
    if ( this.isWinningCombination(1, 4, 7) ) return this.cells[1];
    if ( this.isWinningCombination(2, 5, 8) ) return this.cells[2];
    //Diagonals
    if ( this.isWinningCombination(0, 4, 8) ) return this.cells[0];
    if ( this.isWinningCombination(2, 4, 6) ) return this.cells[2];
    //No Winner
    return '-'
  }

  isTie(): boolean {
    if ( !this.cells.includes('-') && this.getWinner() === '-'  ) {
      return true
    }
    else return false;
  }

  onClick(i: number): void {
    if ( this.cells[i] === '-' && this.getWinner() === '-') {
      this.cells[i] = this.getTurn()
      this.turn = this.turn === 'X' ? 'O' : 'X';
    }
  }

  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.turn = "X";
  }
}
