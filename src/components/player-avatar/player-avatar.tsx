import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'player-avatar',
  styleUrl: 'player-avatar.css',
  shadow: true,
})
export class PlayerAvatar {
  render() {
    return (
      <Host class="player">
        <slot>
          <img alt="Player Avatar" src="player-avatar.png" />
          <div class="health">{ }</div>
          <button>Items</button>
        </slot>
      </Host>
    );
  }
}
