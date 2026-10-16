export const games = [
	{
		slug: 'fossil-in-the-sand',
		title: 'Fossil in the Sand',
	},
	{
		slug: 'henry-the-digger',
		title: 'Henry the Digger',
	},
] as const;

export type Game = (typeof games)[number];
