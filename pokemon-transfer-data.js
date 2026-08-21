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

	1: {
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
	
	302: {
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
	
	511: {
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
	
	512: {
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
	
	515: {
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
	
	516: {
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
	
	515: {
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
	
	516: {
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
	
	794: {
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
	
	999: {
		name: "Gierspenst",

		origin: {
			generation: 9,

			games: [
				"Scarlet",
				"Violet"
			]
		}
	},
	
	1000: {
		name: "Monetigo",

		origin: {
			generation: 9,

			games: [
				"Scarlet",
				"Violet"
			]
		}
	},
	
	1020: {
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


// Rules for transfering a pokemon
const POKEMON_TRANSFER_RULES = {

	302: {
		exclude: [
			"FireRed",
			"LeafGreen",
			"LetsGoPikachu",
			"LetsGoEvoli",
			"LegendsArceus"
		]
	},

	511: {
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
	
	512: {
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
	
	513: {
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
	
	514: {
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

	515: {
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
	
	516: {
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
	
	794: {
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
	
	999: {
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
	
	1000: {
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
	
	1020: {
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

const GAME_NAME_TO_NODE = {

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

    if (!pokemon.gefangen) {
        return [];
    }

    const originNode = GAME_NAME_TO_NODE[pokemon.game];

    if (!originNode) {
        return [];
    }

    // ab hier Transfergraph auswerten
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

console.log(getAllPokemonTransferData());