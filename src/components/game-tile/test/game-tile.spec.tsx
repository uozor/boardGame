import { newSpecPage } from '@stencil/core/testing';
import { GameTile } from '../game-tile';

describe('game-tile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GameTile],
      html: `<game-tile></game-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <game-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </game-tile>
    `);
  });
});
