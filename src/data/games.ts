export const games = [
	{
		slug: 'fossil-in-the-sand',
		title: 'Fossil in the Sand',
		titleImage: null,
	},
	{
		slug: 'henry-the-digger',
		title: 'Henry the Digger',
		titleImage: {
			src: 'HenryTheDigger/HTDTitle.png',
			width: 427,
			height: 233,
		},
	},
] as const;

export type Game = (typeof games)[number];
