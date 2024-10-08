import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'game-tile',
  styleUrl: 'game-tile.css',
  shadow: true,
})
export class GameTile {
  @Prop() x: number;
  @Prop() y: number;
  @Prop() isPlayerOnTile: boolean;
  @Prop() onTileEnter: () => void;

  @Watch('isPlayerOnTile')
  watchHandler(newValue: boolean) {
    if (newValue) {
      this.onTileEnter(); // Trigger event when player moves onto this tile
    }
  }

  componentDidUpdate() {
    if (this.isPlayerOnTile) {
      this.onTileEnter(); // Trigger event when player moves onto this tile
    }
  }
  render() {
    return (
      <div
        class="tile"
        style={{
          left: `${this.x * 50}px`,
          top: `${this.y * 50}px`,
        }}
      >E</div>
    );
  }
}
