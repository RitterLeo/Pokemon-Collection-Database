const editorData = {

	nature: [
		"Robust",
		"Kühn",
		"Mäßig",
		"Still",
		"Scheu",
		"Solo",
		"Sanft",
		"Mild",
		"Zart",
		"Hastig",
		"Hart",
		"Pfiffig",
		"Zaghaft",
		"Sacht",
		"Froh",
		"Frech",
		"Lasch",
		"Hitzig",
		"Kauzig",
		"Naiv",
		"Mutig",
		"Locker",
		"Ruhig",
		"Forsch",
		"Ernst"
	],
	
	natureModifiers: {
		
		"Solo":		{ up: "atk", down: "def" },
		"Hart":		{ up: "atk", down: "spatk" },
		"Frech":	{ up: "atk", down: "spdef" },
		"Mutig":	{ up: "atk", down: "init" },

		"Kühn":		{ up: "def", down: "atk" },
		"Pfiffig":	{ up: "def", down: "spatk" },
		"Lasch":	{ up: "def", down: "spdef" },
		"Locker":	{ up: "def", down: "init" },

		"Mäßig":	{ up: "spatk", down: "atk" },
		"Mild":		{ up: "spatk", down: "def" },
		"Hitzig":	{ up: "spatk", down: "spdef" },
		"Ruhig":	{ up: "spatk", down: "init" },

		"Still":	{ up: "spdef", down: "atk" },
		"Zart":		{ up: "spdef", down: "def" },
		"Sacht":	{ up: "spdef", down: "spatk" },
		"Forsch":	{ up: "spdef", down: "init" },

		"Scheu":	{ up: "init", down: "atk" },
		"Hastig":	{ up: "init", down: "def" },
		"Froh":		{ up: "init", down: "spatk" },
		"Naiv":		{ up: "init", down: "spdef" },

		"Robust":	{ up: null, down: null },
		"Sanft":	{ up: null, down: null },
		"Zaghaft":	{ up: null, down: null },
		"Kauzig":	{ up: null, down: null },
		"Ernst":	{ up: null, down: null }

    },

	personality: [
		"Liebt es zu essen.",
		"Nickt oft ein.",
		"Schläft gern.",
		"Macht oft Unordnung.",
		"Mag es, sich zu entspannen.",
		"Ist stolz auf seine Stärke.",
		"Prügelt sich gern.",
		"Besitzt Temperament.",
		"Liebt Kämpfe.",
		"Ist Impulsiv.",
		"Hat einen robusten Körper.",
		"Kann Treffer gut verkraften.",
		"Ist äußerst zäh.",
		"Hat eine gute Ausdauer.",
		"Ist beharrlich.",
		"Ist sehr neugierig.",
		"Ist hinterhältig.",
		"Ist äußerst gerissen.",
		"Ist oft in Gedanken.",
		"Ist sehr pedantisch.",
		"Besitzt einen starken Willen.",
		"Ist etwas Eitel.",
		"Ist sehr aufsässig.",
		"Hasst Niederlagen.",
		"Ist dickköpfig.",
		"Ist gerne schnell unterwegs.",
		"Achtet auf Geräusche.",
		"Ist ungestüm und einfältig.",
		"Ist ein bisschen albern.",
		"Flüchtet schnell."
	],
	
	pokeballs: [
	
		 { value: "Pokeball", name: "Pokeball", sprite: "poke-ball.png" },
		 { value: "Superball", name: "Superball", sprite: "great-ball.png" },
		 { value: "Hyperball", name: "Hyperball", sprite: "ultra-ball.png" },
		 { value: "Heilball", name: "Heilball", sprite: "heal-ball.png" },
		 { value: "Nestball", name: "Nestball", sprite: "nest-ball.png" },
		 { value: "Luxusball", name: "Luxusball", sprite: "luxury-ball.png" },
		 { value: "Netzball", name: "Netzball", sprite: "net-ball.png" },
		 { value: "Flottball", name: "Flottball", sprite: "quick-ball.png" },
		 { value: "Finsterball", name: "Finsterball", sprite: "dusk-ball.png" },
		 { value: "Premierball", name: "Premierball", sprite: "premier-ball.png" },
		 { value: "Safariball", name: "Safariball", sprite: "safari-ball.png" },
		 { value: "Tauchball", name: "Tauchball", sprite: "dive-ball.png" },
		 { value: "Timerball", name: "Timerball", sprite: "timer-ball.png" },
		 { value: "Wiederball", name: "Wiederball", sprite: "repeat-ball.png" },
		 { value: "Freundesball", name: "Freundesball", sprite: "friend-ball.png" },
		 { value: "Köderball", name: "Köderball", sprite: "lure-ball.png" },
		 { value: "Levelball", name: "Levelball", sprite: "level-ball.png" },
		 { value: "Schwerball", name: "Schwerball", sprite: "heavy-ball.png" },
		 { value: "Sympaball", name: "Sympaball", sprite: "love-ball.png" },
		 { value: "Traumball", name: "Traumball", sprite: "dream-ball.png" },
		 { value: "Turboball", name: "Turboball", sprite: "fast-ball.png" },
		 { value: "Turnierball", name: "Turnierball", sprite: "sport-ball.png" },
		 { value: "Meisterball", name: "Meisterball", sprite: "master-ball.png" },
		 { value: "Ultraball", name: "Ultraball", sprite: "beast-ball.png" },
		 { value: "Parkball", name: "Parkball", sprite: "park-ball.png" },
		 // Hisui
		 { value: "Pokeball-Hisui", name: "Pokeball-Hisui", sprite: "lapoke-ball.png" },
		 { value: "Superball-Hisui", name: "Superball-Hisui", sprite: "lagreat-ball.png" },
		 { value: "Hyperball-Hisui", name: "Hyperball-Hisui", sprite: "laultra-ball.png" },
		 { value: "Schwerball-Hisui", name: "Schwerball-Hisui", sprite: "laheavy-ball.png" },
		 { value: "Zentnerball", name: "Zentnerball", sprite: "laleaden-ball.png" },
		 { value: "Tonnenball", name: "Tonnenball", sprite: "lagigaton-ball.png" },
		 { value: "Federball", name: "Federball", sprite: "lafeather-ball.png" },
		 { value: "Flügelball", name: "Flügelball", sprite: "lawing-ball.png" },
		 { value: "Düsenball", name: "Düsenball", sprite: "lajet-ball.png" },
		 { value: "Urball", name: "Urball", sprite: "laorigin-ball.png" },
		 // special
		 { value: "Jubelball", name: "Jubelball", sprite: "cherish-ball.png" },
		 { value: "Rätselball", name: "Rätselball", sprite: "lastrange-ball.png" }
	
	],
	
	height: [
		"XXXL",
		"XXL",
		"XL",
		"L",
		"M",
		"S",
		"XS",
		"XXS",
		"XXXS"
	],
	
	symbols: [
        "●",
        "▲",
        "■",
        "♥",
        "★",
        "◆"
    ],

    colors: [
        "black",
        "blue",
        "red"
    ],
	
	teraTypes: [
		"Normal",
		"Feuer",
		"Wasser",
		"Pflanze",
		"Elektro",
		"Eis",
		"Kampf",
		"Gift",
		"Boden",
		"Flug",
		"Psycho",
		"Käfer",
		"Gestein",
		"Geist",
		"Drache",
		"Unlicht",
		"Stahl",
		"Fee",
		"Stellar"
	],
	
};