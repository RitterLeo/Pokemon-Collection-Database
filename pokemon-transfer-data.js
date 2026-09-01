// Stations the Pokemon can enter
const TRANSFER_NODES = {

	// ---------------------------------------------
	// Generation 1
	// ---------------------------------------------

	RedVC: {
		name: "Pokémon Rot",
		generation: 1,
		type: "game"
	},

	BlueVC: {
		name: "Pokémon Blau",
		generation: 1,
		type: "game"
	},

	YellowVC: {
		name: "Pokémon Gelb",
		generation: 1,
		type: "game"
	},


	// ---------------------------------------------
	// Generation 2
	// ---------------------------------------------

	GoldVC: {
		name: "Pokémon Gold",
		generation: 2,
		type: "game"
	},

	SilverVC: {
		name: "Pokémon Silber",
		generation: 2,
		type: "game"
	},

	CrystalVC: {
		name: "Pokémon Kristall",
		generation: 2,
		type: "game"
	},


	// ---------------------------------------------
	// Generation 3
	// ---------------------------------------------

	Ruby: {
		name: "Pokémon Rubin",
		generation: 3,
		type: "game"
	},

	Sapphire: {
		name: "Pokémon Saphir",
		generation: 3,
		type: "game"
	},

	Emerald: {
		name: "Pokémon Smaragd",
		generation: 3,
		type: "game"
	},

	FireRed: {
		name: "Pokémon Feuerrot",
		generation: 3,
		type: "game"
	},

	LeafGreen: {
		name: "Pokémon Blattgrün",
		generation: 3,
		type: "game"
	},


	// ---------------------------------------------
	// Generation 4
	// ---------------------------------------------

	Diamond: {
		name: "Pokémon Diamant",
		generation: 4,
		type: "game"
	},
	
	Pearl: {
		name: "Pokémon Perle",
		generation: 4,
		type: "game"
	},
	
	Platinum: {
		name: "Pokémon Platin",
		generation: 4,
		type: "game"
	},
	
	HeartGold: {
		name: "Pokémon HeartGold",
		generation: 4,
		type: "game"
	},
	
	SoulSilver: {
		name: "Pokémon SoulSilver",
		generation: 4,
		type: "game"
	},

	// ---------------------------------------------
	// Generation 5
	// ---------------------------------------------
	
	Black: {
		name: "Pokémon Schwarz",
		generation: 5,
		type: "game"
	},
	
	White: {
		name: "Pokémon Weiß",
		generation: 5,
		type: "game"
	},
	
	Black2: {
		name: "Pokémon Schwarz 2",
		generation: 5,
		type: "game"
	},
	
	White2: {
		name: "Pokémon Weiß 2",
		generation: 5,
		type: "game"
	},
	
	// ---------------------------------------------
	// Generation 6
	// ---------------------------------------------
	
	X: {
		name: "Pokémon X",
		generation: 6,
		type: "game"
	},
	
	Y: {
		name: "Pokémon Y",
		generation: 6,
		type: "game"
	},
	
	OmegaRuby: {
		name: "Pokémon Omega Rubin",
		generation: 6,
		type: "game"
	},
	
	AlphaSapphire: {
		name: "Pokémon Alpha Saphir",
		generation: 6,
		type: "game"
	},
	
	// ---------------------------------------------
	// Generation 7
	// ---------------------------------------------
	
	Sun: {
		name: "Pokémon Sonne",
		generation: 7,
		type: "game"
	},
	
	Moon: {
		name: "Pokémon Mond",
		generation: 7,
		type: "game"
	},
	
	UltraSun: {
		name: "Pokémon Ultramond",
		generation: 7,
		type: "game"
	},
	
	UltraMoon: {
		name: "Pokémon Ultrasonne",
		generation: 7,
		type: "game"
	},
	
	LetsGoPikachu: {
		name: "Pokémon Lets Go, Pikachu",
		generation: 7,
		type: "game"
	},
	
	LetsGoEvoli: {
		name: "Pokémon Lets Go, Evoli",
		generation: 7,
		type: "game"
	},
	
	// ---------------------------------------------
	// Generation 8
	// ---------------------------------------------

	Sword: {
		name: "Pokémon Schwert",
		generation: 8,
		type: "game"
	},
	
	Shield: {
		name: "Pokémon Schild",
		generation: 8,
		type: "game"
	},
	
	LegendsArceus: {
		name: "Pokémon-Legenden: Arceus",
		generation: 8,
		type: "game"
	},
	
	BrilliantDiamond: {
		name: "Pokémon Strahlender Diamant",
		generation: 8,
		type: "game"
	},
	
	ShiningPearl: {
		name: "Pokémon Leuchtende Perle",
		generation: 8,
		type: "game"
	},

	// ---------------------------------------------
	// Generation 9
	// ---------------------------------------------

	Scarlet: {
		name: "Pokémon Karmesin",
		generation: 9,
		type: "game"
	},
	
	Violet: {
		name: "Pokémon Purpur",
		generation: 9,
		type: "game"
	},
	
	LegendsZA: {
		name: "Pokémon-Legenden: Z-A",
		generation: 9,
		type: "game"
	},

	// ---------------------------------------------
	// Transfer-Dienste
	// ---------------------------------------------

	bank: {
		name: "Pokémon Bank",
		generation: null,
		type: "service"
	},

	home: {
		name: "Pokémon HOME",
		generation: null,
		type: "service"
	}

};

// connections between stations
const TRANSFER_CONNECTIONS = [

	// Gen 1 to Pokemon Bank
	{
		from: "RedVC",
		to: "bank",
		method: "poke-transporter"
	},

	{
		from: "BlueVC",
		to: "bank",
		method: "poke-transporter"
	},

	{
		from: "YellowVC",
		to: "bank",
		method: "poke-transporter"
	},
	
	// Gen 2 to Pokemon Mover
	{
		from: "GoldVC",
		to: "bank",
		method: "poke-transporter"
	},

	{
		from: "SilverVC",
		to: "bank",
		method: "poke-transporter"
	},

	{
		from: "CrystalVC",
		to: "bank",
		method: "poke-transporter"
	},
	
	// ---------------------------------------------
	// Gen 3 → Gen 4
	// Pal Park
	// ---------------------------------------------

	{
		from: "Ruby",
		to: "Diamond",
		method: "pal-park"
	},

	{
		from: "Ruby",
		to: "Pearl",
		method: "pal-park"
	},

	{
		from: "Ruby",
		to: "Platinum",
		method: "pal-park"
	},

	{
		from: "Ruby",
		to: "HeartGold",
		method: "pal-park"
	},

	{
		from: "Ruby",
		to: "SoulSilver",
		method: "pal-park"
	},


	{
		from: "Sapphire",
		to: "Diamond",
		method: "pal-park"
	},

	{
		from: "Sapphire",
		to: "Pearl",
		method: "pal-park"
	},

	{
		from: "Sapphire",
		to: "Platinum",
		method: "pal-park"
	},

	{
		from: "Sapphire",
		to: "HeartGold",
		method: "pal-park"
	},

	{
		from: "Sapphire",
		to: "SoulSilver",
		method: "pal-park"
	},


	{
		from: "Emerald",
		to: "Diamond",
		method: "pal-park"
	},

	{
		from: "Emerald",
		to: "Pearl",
		method: "pal-park"
	},

	{
		from: "Emerald",
		to: "Platinum",
		method: "pal-park"
	},

	{
		from: "Emerald",
		to: "HeartGold",
		method: "pal-park"
	},

	{
		from: "Emerald",
		to: "SoulSilver",
		method: "pal-park"
	},


	{
		from: "FireRed",
		to: "Diamond",
		method: "pal-park"
	},

	{
		from: "FireRed",
		to: "Pearl",
		method: "pal-park"
	},

	{
		from: "FireRed",
		to: "Platinum",
		method: "pal-park"
	},

	{
		from: "FireRed",
		to: "HeartGold",
		method: "pal-park"
	},

	{
		from: "FireRed",
		to: "SoulSilver",
		method: "pal-park"
	},


	{
		from: "LeafGreen",
		to: "Diamond",
		method: "pal-park"
	},

	{
		from: "LeafGreen",
		to: "Pearl",
		method: "pal-park"
	},

	{
		from: "LeafGreen",
		to: "Platinum",
		method: "pal-park"
	},

	{
		from: "LeafGreen",
		to: "HeartGold",
		method: "pal-park"
	},

	{
		from: "LeafGreen",
		to: "SoulSilver",
		method: "pal-park"
	},

	// Gen 4 to 5
	
	{
	from: "Diamond",
		to: "Black",
		method: "poke-transfer"
	},

	{
		from: "Diamond",
		to: "White",
		method: "poke-transfer"
	},

	{
		from: "Diamond",
		to: "Black2",
		method: "poke-transfer"
	},

	{
		from: "Diamond",
		to: "White2",
		method: "poke-transfer"
	},
	
	{
	from: "Pearl",
		to: "Black",
		method: "poke-transfer"
	},

	{
		from: "Pearl",
		to: "White",
		method: "poke-transfer"
	},

	{
		from: "Pearl",
		to: "Black2",
		method: "poke-transfer"
	},

	{
		from: "Pearl",
		to: "White2",
		method: "poke-transfer"
	},
	
	{
	from: "Platinum",
		to: "Black",
		method: "poke-transfer"
	},

	{
		from: "Platinum",
		to: "White",
		method: "poke-transfer"
	},

	{
		from: "Platinum",
		to: "Black2",
		method: "poke-transfer"
	},

	{
		from: "Platinum",
		to: "White2",
		method: "poke-transfer"
	},
	
	{
	from: "HeartGold",
		to: "Black",
		method: "poke-transfer"
	},

	{
		from: "HeartGold",
		to: "White",
		method: "poke-transfer"
	},

	{
		from: "HeartGold",
		to: "Black2",
		method: "poke-transfer"
	},

	{
		from: "HeartGold",
		to: "White2",
		method: "poke-transfer"
	},
	
	{
	from: "SoulSilver",
		to: "Black",
		method: "poke-transfer"
	},

	{
		from: "SoulSilver",
		to: "White",
		method: "poke-transfer"
	},

	{
		from: "SoulSilver",
		to: "Black2",
		method: "poke-transfer"
	},

	{
		from: "SoulSilver",
		to: "White2",
		method: "poke-transfer"
	},
	
	// Gen 5 to bank
	{
	from: "Black",
		to: "bank",
		method: "poke-transporter"
	},

	{
		from: "White",
		to: "bank",
		method: "poke-transporter"
	},

	{
		from: "Black2",
		to: "bank",
		method: "poke-transporter"
	},

	{
		from: "White2",
		to: "bank",
		method: "poke-transporter"
	},
	
	// Bank to Gen 6
	{
	from: "bank",
		to: "X",
		method: "pokemon-bank"
	},

	{
		from: "bank",
		to: "Y",
		method: "pokemon-bank"
	},

	{
		from: "bank",
		to: "OmegaRuby",
		method: "pokemon-bank"
	},

	{
		from: "bank",
		to: "AlphaSapphire",
		method: "pokemon-bank"
	},
	
	// Gen 6 to bank
	{
		from: "X",
		to: "bank",
		method: "pokemon-bank"
	},

	{
		from: "Y",
		to: "bank",
		method: "pokemon-bank"
	},

	{
		from: "OmegaRuby",
		to: "bank",
		method: "pokemon-bank"
	},

	{
		from: "AlphaSapphire",
		to: "bank",
		method: "pokemon-bank"
	},
	
	// Bank to Gen 7_1
	{
	from: "bank",
		to: "Sun",
		method: "pokemon-bank"
	},

	{
		from: "bank",
		to: "Moon",
		method: "pokemon-bank"
	},

	{
		from: "bank",
		to: "UltraSun",
		method: "pokemon-bank"
	},

	{
		from: "bank",
		to: "UltraMoon",
		method: "pokemon-bank"
	},
	
	// Gen 7_1 to Bank
	{
	from: "Sun",
		to: "bank",
		method: "pokemon-bank"
	},

	{
		from: "Moon",
		to: "bank",
		method: "pokemon-bank"
	},

	{
		from: "UltraSun",
		to: "bank",
		method: "pokemon-bank"
	},

	{
		from: "UltraMoon",
		to: "bank",
		method: "pokemon-bank"
	},
	
	// Bank to HOME
	{
		from: "bank",
		to: "home",
		method: "pokemon-home"
	},
	
	// HOME to Lets Go
	{
		from: "home",
		to: "LetsGoPikachu",
		method: "pokemon-home"
	},

	{
		from: "home",
		to: "LetsGoEvoli",
		method: "pokemon-home"
	},
	
	// Lets Go to HOME
	{
		from: "LetsGoPikachu",
		to: "home",
		method: "pokemon-home"
	},

	{
		from: "LetsGoEvoli",
		to: "home",
		method: "pokemon-home"
	},
	
	// HOME to SwSh
	{
		from: "home",
		to: "Sword",
		method: "pokemon-home"
	},

	{
		from: "home",
		to: "Shield",
		method: "pokemon-home"
	},
	
	// SwSh to HOME
	{
		from: "Sword",
		to: "home",
		method: "pokemon-home"
	},

	{
		from: "Shield",
		to: "home",
		method: "pokemon-home"
	},

	// HOME to BDSP
	{
		from: "home",
		to: "BrilliantDiamond",
		method: "pokemon-home"
	},

	{
		from: "home",
		to: "ShiningPearl",
		method: "pokemon-home"
	},
	
	// BDSP to HOME
	{
		from: "BrilliantDiamond",
		to: "home",
		method: "pokemon-home"
	},

	{
		from: "ShiningPearl",
		to: "home",
		method: "pokemon-home"
	},

	// HOME to PLA
	{
		from: "home",
		to: "LegendsArceus",
		method: "pokemon-home"
	},
	
	// PLA to HOME
	{
		from: "LegendsArceus",
		to: "home",
		method: "pokemon-home"
	},
	
	// HOME to SV
	{
		from: "home",
		to: "Scarlet",
		method: "pokemon-home"
	},
	
	{
		from: "home",
		to: "Violet",
		method: "pokemon-home"
	},
	
	// SV to HOME
	{
		from: "Scarlet",
		to: "home",
		method: "pokemon-home"
	},
	
	{
		from: "Violet",
		to: "home",
		method: "pokemon-home"
	},
	
	//HOME to LegendsZA
	{
		from: "home",
		to: "LegendsZA",
		method: "pokemon-home"
	},
	
	// LegendsZA to HOME
	{
		from: "LegendsZA",
		to: "home",
		method: "pokemon-home"
	},
	
];

// how to transfer them to other stations
const TRANSFER_METHODS = {
	
	"trade": {
		name: "Tausch"
	},

	"pokemon-bank": {
		name: "Pokémon Bank"
	},

	"pokemon-home": {
		name: "Pokémon HOME"
	},

	// Gen 3 to 4
	"pal-park": {
		name: "Pal Park"
	},

	// Gen 4 to 5
	"poke-transfer": {
		name: "PokéTransfer"
	},

	// Gen 1,2 and 5 to bank
	"poke-transporter": {
		name: "PokéMover"
	},
/*
	"pokemon-go": {
		name: "Pokémon GO"
	},

	"lets-go-transfer": {
		name: "Pokémon: Let's Go"
	}*/

};

const TRANSFER_TRADE_GROUPS = {

	gen1: [
		"RedVC",
		"BlueVC",
		"YellowVC"
	],
	
	gen2: [
		"GoldVC",
		"SilverVC",
		"CrystalVC"
	],
	
	gen3: [
		"Ruby",
		"Sapphire",
		"Emerald",
		"FireRed",
		"LeafGreen"
	],
	
	gen4: [
		"Diamond",
		"Pearl",
		"Platinum",
		"HeartGold",
		"SoulSilver"
	],
	
	gen5: [
		"White",
		"Black",
		"White2",
		"Black2"
	],

	gen6: [
		"X",
		"Y",
		"OmegaRuby",
		"AlphaSapphire"
	],

	gen7_1: [
		"Sun",
		"Moon",
		"UltraSun",
		"UltraMoon"
	],
	
	gen7_2: [
		"LetsGoPikachu",
		"LetsGoEvoli"
	],

	gen8_1: [
		"Sword",
		"Shield"
	],
	
	gen8_2: [
		"BrilliantDiamond",
		"ShiningPearl"
	],
	
	gen9: [
		"Scarlet",
		"Violet"
	]

};


// TEST TRANSFER DEFINITIONS
const POKEMON_TRANSFER_DATA = {

	"1": {
		name: "Bisasam",

		origin: {
			generation: 1,

			games: [
				"RedVC",
				"BlueVC",
				"YellowVC"
			]
		}
	},
	
	"19-alola": {
		name: "Rattfratz",

		origin: {
			generation: 7,

			games: [
				"Sun",
				"Moon",
				"UltraSun",
				"UltraMoon"
			]
		}
	},
	
	"302": {
		name: "Zobiris",

		origin: {
			generation: 3,

			games: [
				"Ruby",
				"Sapphire",
				"Emerald"
			]
		}
	},
	
	"511": {
		name: "Vegimak",

		origin: {
			generation: 5,

			games: [
				"Black",
				"White",
				"Black2",
				"White2"
			]
		}
	},
	
	"512": {
		name: "Vegichita",

		origin: {
			generation: 5,

			games: [
				"Black",
				"White",
				"Black2",
				"White2"
			]
		}
	},
	
	"513": {
		name: "Grillmak",

		origin: {
			generation: 5,

			games: [
				"Black",
				"White",
				"Black2",
				"White2"
			]
		}
	},
	
	"514": {
		name: "Grillchita",

		origin: {
			generation: 5,

			games: [
				"Black",
				"White",
				"Black2",
				"White2"
			]
		}
	},
	
	"515": {
		name: "Sodamak",

		origin: {
			generation: 5,

			games: [
				"Black",
				"White",
				"Black2",
				"White2"
			]
		}
	},
	
	"516": {
		name: "Sodachita",

		origin: {
			generation: 5,

			games: [
				"Black",
				"White",
				"Black2",
				"White2"
			]
		}
	},
	
	"793": {
		name: "Anego",

		origin: {
			generation: 7,

			games: [
				"Sun",
				"Moon",
				"UltraSun",
				"UltraMoon"
			]
		}
	},
	
	"794": {
		name: "Masskito",

		origin: {
			generation: 7,

			games: [
				"Sun",
				"Moon",
				"UltraSun",
				"UltraMoon"
			]
		}
	},
		
	"795": {
		name: "Schabelle",

		origin: {
			generation: 7,

			games: [
				"Sun",
				"Moon",
				"UltraSun",
				"UltraMoon"
			]
		}
	},
	
		
	"796": {
		name: "Voltriant",

		origin: {
			generation: 7,

			games: [
				"Sun",
				"Moon",
				"UltraSun",
				"UltraMoon"
			]
		}
	},
		
	"797": {
		name: "Kaguron",

		origin: {
			generation: 7,

			games: [
				"Sun",
				"Moon",
				"UltraSun",
				"UltraMoon"
			]
		}
	},
		
	"798": {
		name: "Katagami",

		origin: {
			generation: 7,

			games: [
				"Sun",
				"Moon",
				"UltraSun",
				"UltraMoon"
			]
		}
	},
		
	"799": {
		name: "Schlingking",

		origin: {
			generation: 7,

			games: [
				"Sun",
				"Moon",
				"UltraSun",
				"UltraMoon"
			]
		}
	},
		
	"805": {
		name: "Muramura",

		origin: {
			generation: 7,

			games: [
				"Sun",
				"Moon",
				"UltraSun",
				"UltraMoon"
			]
		}
	},
		
	"806": {
		name: "Kopplosio",

		origin: {
			generation: 7,

			games: [
				"Sun",
				"Moon",
				"UltraSun",
				"UltraMoon"
			]
		}
	},
	
	
	"999": {
		name: "Gierspenst",

		origin: {
			generation: 9,

			games: [
				"Scarlet",
				"Violet"
			]
		}
	},
	
	"1000": {
		name: "Monetigo",

		origin: {
			generation: 9,

			games: [
				"Scarlet",
				"Violet"
			]
		}
	},
	
	"1020": {
		name: "Keilflame",

		origin: {
			generation: 9,

			games: [
				"Scarlet",
				"Violet"
			]
		}
	}

};

// Rules for pokemon that can evolve later
const POKEMON_TRANSFER_EVOLUTION_RULES = {

	"982": {
		transferAs: 360,
		availableFromGeneration: 9
	}

};

// Rules for transfering a pokemon (to which games can they go?)
const POKEMON_TRANSFER_RULES = {

	"19-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"20-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"26-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsArceus"
		]
	},
	
	"27-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"28-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"37-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"38-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"50-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"51-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"52-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"52-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"53-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"74-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"75-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"76-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"77-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"78-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"79-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"80-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"83-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet"
		]
	},
	
	"88-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"89-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"103-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"105-alola": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
		]
	},
	
	"110-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"122-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet"
		]
	},
	
	"144-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"145-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"146-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"199-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"222-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"263-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"264-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},

	"302": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus"
		]
	},
	
	"360": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli"
		]
	},

	"511": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"Scarlet",
			"Violet"
		]
	},
	
	"512": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"Scarlet",
			"Violet"
		]
	},
	
	"513"	: {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"Scarlet",
			"Violet"
		]
	},
	
	"514": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"Scarlet",
			"Violet"
		]
	},

	"515": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"Scarlet",
			"Violet"
		]
	},
	
	"516": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"Scarlet",
			"Violet"
		]
	},
	
	"554-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"555-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"555-galar-trance": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"562-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet"
		]
	},
	
	"618-galar": {
		exclude: [
			"FireRed",
			"LeafGreen",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet"
		]
	},
	
	//SM
	"722": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"793": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"794": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"795": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"796": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"797": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"798": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"799": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	"805": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
		
	"806": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet",
			"LegendsZA"
		]
	},
	
	// SV
	"906": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"907": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"908": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"909": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"910": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"911": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"912": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"913": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"914": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"915": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"916": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"917": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"918": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"919": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"920": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"921": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"922": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"923": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"924": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"925": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"926": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"927": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"928": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"929": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"930": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"931": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"932": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"933": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"934": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"935": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"936": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"937": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"938": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"939": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"940": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"941": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"942": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"943": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"944": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"945": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"946": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"947": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"948": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"949": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"950": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"951": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"952": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"953": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"954": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"955": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"956": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"957": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"958": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"959": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"960": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"961": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"962": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"963": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"964": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"965": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"966": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"967": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"968": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"969": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"970": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"971": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"972": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"973": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"974": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"975": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"976": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"977": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"978": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"979": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"980": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"981": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"982": {
		
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"983": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"984": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"985": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"986": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"987": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"988": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"989": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"990": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"991": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"992": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"993": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"994": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"995": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"996": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"997": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"998": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"999": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"1000": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"1001": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1002": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1003": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1004": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1005": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1006": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1007": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1008": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1009": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"1010": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"1011": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"1012": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"1013": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"1014": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"1015": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"1016": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"1017": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"1018": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1019": {
		exclude: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
			"Sword",
			"Shield",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1020": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1021": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1022": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1023": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1024": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},
	
	"1025": {
		exclude: [
			"LetsGoPikachu",
			"LetsGoEvoli",
			"Sword",
			"Shield",
			"LegendsArceus",
			"BrilliantDiamond",
			"ShiningPearl",
			"LegendsZA"
		]
	},

};

const TRANSFER_GAME_ALIASES = {

    "Rot": "RedVC",
    "Blau": "BlueVC",
    "Gelb": "YellowVC",

    "Gold": "GoldVC",
    "Silber": "SilverVC",
    "Kristall": "CrystalVC",

    "Rubin": "Ruby",
    "Saphir": "Sapphire",
    "Smaragd": "Emerald",
    "Feuerrot": "FireRed",
    "Blattgrün": "LeafGreen",

    "Diamant": "Diamond",
    "Perle": "Pearl",
    "Platin": "Platinum",
    "HeartGold": "HeartGold",
    "SoulSilver": "SoulSilver",

    "Schwarz": "Black",
    "Weiß": "White",
    "Schwarz 2": "Black2",
    "Weiß 2": "White2",

    "X": "X",
    "Y": "Y",
    "Omega Rubin": "OmegaRuby",
    "Alpha Saphir": "AlphaSapphire",

    "Sonne": "Sun",
    "Mond": "Moon",
    "Ultrasonne": "UltraSun",
    "Ultramond": "UltraMoon",

    "Lets Go, Pikachu": "LetsGoPikachu",
    "Lets Go, Evoli": "LetsGoEvoli",

    "Schwert": "Sword",
    "Schild": "Shield",

    "Strahlender Diamant": "BrilliantDiamond",
    "Leuchtende Perle": "ShiningPearl",
    "Legenden: Arceus": "LegendsArceus",

    "Karmesin": "Scarlet",
    "Purpur": "Violet",
    "Legenden: Z-A": "LegendsZA"
};

function getPokemonTransferGames(pokemon) {

	if (!pokemon) {
		return [];
	}

	// Nur gefangene Pokémon berücksichtigen
	if (pokemon.gefangen !== true) {
		return [];
	}

	// Ohne gespeichertes Spiel kein Transferweg
	if (!pokemon.game) {
		return [];
	}

	// -------------------------------------------------
	// Fangspiel ermitteln
	// -------------------------------------------------

	function normalizeGameName(name) {

		return String(name ?? "")
			.trim()
			.toLowerCase();

	}

	const originGame = Object.entries(TRANSFER_NODES)
		.find(([nodeKey, node]) =>
			node.type === "game" &&
			normalizeGameName(node.name) ===
			normalizeGameName(`Pokémon ${pokemon.game}`)
		);

	if (!originGame) {
		return [];
	}

	const originNode = originGame[0];

	// -------------------------------------------------
	// Transferwege berechnen
	// -------------------------------------------------

	const reachableNodes =
		findTransferPaths(originNode);

	// -------------------------------------------------
	// Nur echte Spiele zurückgeben
	// -------------------------------------------------

	return reachableNodes
		.filter(nodeKey =>
			TRANSFER_NODES[nodeKey]?.type === "game"
		)
		.filter(nodeKey =>
			nodeKey !== originNode
		);

}

function getPokemonAvailableGames(pokemon) {

    if (!pokemon || pokemon.gefangen !== true) {
        return [];
    }

    if (!pokemon.game) {
        return [];
    }

    const originKey = TRANSFER_GAME_ALIASES[pokemon.game];

    if (!originKey) {
        console.warn(
            "Kein Transfer-Node für Fangspiel gefunden:",
            pokemon.game
        );
        return [];
    }

    const reachable = new Set();

    reachable.add(originKey);

	function traverse(currentNode) {

		// ---------------------------------------------
		// 1. Normale Transferverbindungen
		// ---------------------------------------------

		for (const connection of TRANSFER_CONNECTIONS) {

			if (connection.from !== currentNode) {
				continue;
			}

			const target = connection.to;

			if (reachable.has(target)) {
				continue;
			}

			reachable.add(target);

			traverse(target);
		}


		// ---------------------------------------------
		// 2. Tausch innerhalb derselben Tauschgruppe
		// ---------------------------------------------

		const tradeGroup = getTradeGroupForGame(currentNode);

		for (const tradeTarget of tradeGroup) {

			if (tradeTarget === currentNode) {
				continue;
			}

			if (reachable.has(tradeTarget)) {
				continue;
			}

			reachable.add(tradeTarget);

			traverse(tradeTarget);
		}
	}

    traverse(originKey);

    // ---------------------------------------------
	// Transfer-Dienste aus dem Ergebnis entfernen
	// ---------------------------------------------

	reachable.delete("bank");
	reachable.delete("home");


	// ---------------------------------------------
	// Pokémon-spezifische Einschränkungen
	// ---------------------------------------------

	const rule = POKEMON_TRANSFER_RULES[pokemon.nummer];

	if (rule && Array.isArray(rule.exclude)) {

		for (const excludedGame of rule.exclude) {
			reachable.delete(excludedGame);
		}
	}


	// ---------------------------------------------
	// Ergebnis zurückgeben
	// ---------------------------------------------

	return [...reachable];
}

function getTradeGroupForGame(gameKey) {

    for (const group of Object.values(TRANSFER_TRADE_GROUPS)) {

        if (group.includes(gameKey)) {
            return group;
        }
    }

    return [];
}

// ---------------------------------------------------------
// Transferwege ermitteln
// ---------------------------------------------------------

function findTransferPaths(startNode) {

	const visited = new Set();
	const reachable = new Set();

	function walk(currentNode, path) {

		// Bereits besuchte Station nicht erneut durchlaufen
		if (visited.has(currentNode)) {
			return;
		}

		visited.add(currentNode);
		reachable.add(currentNode);

		// -------------------------------------------------
		// 1. Normale Transferverbindungen
		// -------------------------------------------------

		const connections = TRANSFER_CONNECTIONS.filter(
			connection => connection.from === currentNode
		);

		for (const connection of connections) {

			const nextNode = connection.to;

			if (path.includes(nextNode)) {
				continue;
			}

			walk(nextNode, [...path, nextNode]);
		}


		// -------------------------------------------------
		// 2. Tauschgruppen
		// -------------------------------------------------

		for (const group of Object.values(TRANSFER_TRADE_GROUPS)) {

			// Gehört die aktuelle Station zu dieser Tauschgruppe?
			if (!group.includes(currentNode)) {
				continue;
			}

			// Mit allen anderen Spielen der Gruppe tauschen
			for (const tradeNode of group) {

				if (tradeNode === currentNode) {
					continue;
				}

				if (path.includes(tradeNode)) {
					continue;
				}

				walk(tradeNode, [...path, tradeNode]);
			}
		}
	}

	walk(startNode, [startNode]);

	return [...reachable];
}

/*console.log(
	findTransferPaths("LegendsZA")
);*/

/// ---------------------------------------------------------
// Transferziele eines Pokémon ermitteln
// ---------------------------------------------------------

function getPokemonTransferDestinations(pokemonId) {

	const pokemonData = POKEMON_TRANSFER_DATA[pokemonId];

	if (!pokemonData || !pokemonData.origin) {
		return [];
	}

	const destinations = new Set();

	// Alle Ursprungsspiele des Pokémon durchgehen
	for (const originGame of pokemonData.origin.games) {

		const reachableNodes = findTransferPaths(originGame);

		for (const nodeId of reachableNodes) {

			// Ursprung selbst nicht als Transferziel aufnehmen
			if (nodeId === originGame) {
				continue;
			}

			const node = TRANSFER_NODES[nodeId];

			// Unbekannte Station ignorieren
			if (!node) {
				continue;
			}

			// Nur echte Spiele berücksichtigen
			if (node.type !== "game") {
				continue;
			}

			destinations.add(nodeId);
		}
	}

	// -----------------------------------------------------
	// Pokémon-spezifische Ausschlüsse
	// -----------------------------------------------------

	const rules = POKEMON_TRANSFER_RULES[pokemonId];

	if (rules && rules.exclude) {

		for (const excludedGame of rules.exclude) {
			destinations.delete(excludedGame);
		}
	}

	return [...destinations];
}



// ONLY FOR TEST
function getAllPokemonTransferData() {

	const result = {};

	for (const pokemonId of Object.keys(POKEMON_TRANSFER_DATA)) {

		result[pokemonId] = {
			origin: POKEMON_TRANSFER_DATA[pokemonId].origin,
			destinations: getPokemonTransferDestinations(
				Number(pokemonId)
			)
		};
	}

	return result;
}

/* console.log(getAllPokemonTransferData()); */