import { newE2EPage } from '@stencil/core/testing';

describe('game-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<game-tile></game-tile>');

    const element = await page.find('game-tile');
    expect(element).toHaveClass('hydrated');
  });
});
