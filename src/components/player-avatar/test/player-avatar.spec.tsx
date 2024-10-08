import { newSpecPage } from '@stencil/core/testing';
import { PlayerAvatar } from '../player-avatar';

describe('player-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlayerAvatar],
      html: `<player-avatar></player-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <player-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </player-avatar>
    `);
  });
});
