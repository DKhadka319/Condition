// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: `
    <div id="statusArea" className="status">Next player: <span>{{currentPlayer}}</span></div>
    <div id="winnerArea" className="winner">Winner: <span>{{winnerText}}</span></div>
    <button (click)="onReset()">Reset</button>
    <section>
      <div class="row" *ngFor="let row of grid; let x = index">
      <ng-container *ngFor="let col of row; let y = index">
        <button (click)="makeMove(x, y)" class="square" style="width:40px;height:40px;">{{col}}</button>
      </ng-container>
      </div>
    </section>
  `,
  styles: []
})

export class MainAppComponent implements OnInit {

  readonly GRID_CELL_COUNT = 9;
  readonly GRID_ROW_AND_COL_SIZE = 3;
  currentPlayer = 'X';
  winnerText = '';
  grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  moveCount = 0;
  gameEnded = false;

  ngOnInit() { 
    
  }

  makeMove(row, col) {
    if(this.grid[row][col] === '') {
      this.grid[row][col] = this.currentPlayer;
      this.moveCount += 1;
      this.finishGameWhenWinnerFound();
      if(!this.gameEnded) {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  onReset() {
    this.grid = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winnerText = '';
    this.gameEnded = false;
  }

  private finishGameWhenWinnerFound() {
    for(let row of this.grid) {
      if(row[0] === this.currentPlayer && row[1] === this.currentPlayer && row[2] === this.currentPlayer) {
        this.winnerText = this.currentPlayer;
        this.currentPlayer = '';
        this.gameEnded = true;
        break;
      }
    }

    for(let i = 0; i < this.GRID_ROW_AND_COL_SIZE; i++) {
      if(this.grid[0][i] === this.currentPlayer && this.grid[1][i] === this.currentPlayer && this.grid[2][i] === this.currentPlayer) {
        this.winnerText = this.currentPlayer;
        this.currentPlayer = '';
        this.gameEnded = true;
        break;
      }
    }

    if(
      (this.grid[0][0] === this.currentPlayer && this.grid[1][1] === this.currentPlayer && this.grid[2][2] === this.currentPlayer)
      ||
      (this.grid[2][0] === this.currentPlayer && this.grid[1][1] === this.currentPlayer && this.grid[0][2] === this.currentPlayer)
    ) {
      this.winnerText = this.currentPlayer;
      this.currentPlayer = '';
      this.gameEnded = true;
    }

    if(this.moveCount === this.GRID_CELL_COUNT) {
      this.winnerText = 'DRAW';
      this.currentPlayer = '';
      this.gameEnded = true;
    }
  }
}
