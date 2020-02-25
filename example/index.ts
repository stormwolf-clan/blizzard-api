import { BlizzardClient } from '../src';
import { WorldOfWarcraftClient } from '../src/wow';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
  try {
    const blizzard = await BlizzardClient.create({
      region: 'eu',
      locale: 'en_GB',
      id: process.env.CLIENT_ID,
      secret: process.env.CLIENT_SECRET,
    });

    const wow = new WorldOfWarcraftClient(blizzard);
    console.log(await wow.characterProfileSummary('the-maelstrom', 'cellinda'));
  } catch (e) {
    console.error(e);
  }
})();
