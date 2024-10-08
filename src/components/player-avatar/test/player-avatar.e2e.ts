import { newE2EPage } from '@stencil/core/testing';

describe('player-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<player-avatar></player-avatar>');

    const element = await page.find('player-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
