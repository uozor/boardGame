import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  generateBoard() {
    const tiles = [];
    for (let i = 0; i < 20; i++) {
      tiles.push({
        x: Math.floor(Math.random() * 15), // Random x position
        y: Math.floor(Math.random() * 15), // Random y position
      });
    }
    return tiles;
  }

  board = this.generateBoard();
  render() {
    return (
      <div class="container">
              <div class="board">
          {this.board.map(tile => (
            <game-tile x={tile.x} y={tile.y}></game-tile>
          ))}
        
      </div>
        <aside class="player-avatar-container">
          <player-avatar ></player-avatar>
        </aside>
      
      </div>
    
  
    
    );
  }
}
