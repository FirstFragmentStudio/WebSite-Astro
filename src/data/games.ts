export const games = [
	{
		slug: 'fossil-in-the-sand',
		title: 'Fossil in the Sand',
		shortDescription:
			'Uncover the secrets of a lost world in Fossil in the Sand, an archaeological adventure where every brushstroke reveals another piece of history. Explore ancient dig sites, discover incredible fossils, and piece together the story of creatures that vanished millions of years ago.',
		storeDescription:
			'Fossil in the Sand is an archaeology-focused adventure game where discovery lies beneath every grain of sand. Journey across remote excavation sites, carefully uncover fossils, identify ancient species, and reveal the mysteries of forgotten worlds. Combining exploration, puzzle-solving, and authentic archaeological processes, each discovery brings you closer to unlocking the secrets hidden beneath the desert.',
		titleImage: null,
	},
	{
		slug: 'henry-the-digger',
		title: 'Henry the Digger',
		shortDescription:
			'Grab your shovel and join Henry on a light-hearted digging adventure filled with hidden treasures, ancient mysteries, and exciting discoveries beneath the surface.',
		storeDescription:
			'Henry the Digger is a family-friendly archaeological adventure starring an enthusiastic explorer with a passion for uncovering the past. Dig through fascinating locations, discover long-buried artifacts, upgrade your tools, and solve mysteries that have been hidden for centuries. Every excavation uncovers a new story, making each journey a fun and rewarding adventure for explorers of all ages.',
		titleImage: {
			src: 'HenryTheDigger/HTDTitle.png',
			width: 427,
			height: 233,
		},
	},
] as const;

export type Game = (typeof games)[number];
