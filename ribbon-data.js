const baender = [
    { name: "Band des Champs", title: "Champ", image: "ribbonchampiong3" },
    { name: "Band des Sinnoh-Champs", title: "Sinnoh-Champ", image: "ribbonchampionsinnoh" },
    { name: "Band des Kalos-Champs", title: "Kalos-Champ", image: "ribbonchampionkalos" },
    { name: "Band des Hoenn-Champs", title: "Hoenn-Champ", image: "ribbonchampiong6hoenn" },
    { name: "Band des Alola-Champs", title: "Alola-Champ", image: "ribbonchampionalola" },
    { name: "Band des Galar-Champs", title: "Galar-Champ", image: "ribbonchampiongalar" },
    { name: "Band des Paldea-Champs", title: "Paldea-Champ", image: "ribbonchampionpaldea" },

    { name: "Band der Coolness", title: "", image: "ribbong3cool" },
    { name: "Band der Coolness Super", title: "", image: "ribbong3coolsuper" },
    { name: "Band der Coolness Hyper", title: "", image: "ribbong3coolhyper" },
    { name: "Band der Coolness Master", title: "", image: "ribbong3coolmaster" },

    { name: "Band der Schönheit", title: "", image: "ribbong3beauty" },
    { name: "Band der Schönheit Super", title: "", image: "ribbong3beautysuper" },
    { name: "Band der Schönheit Hyper", title: "", image: "ribbong3beautyhyper" },
    { name: "Band der Schönheit Master", title: "", image: "ribbong3beautymaster" },

    { name: "Band der Anmut", title: "", image: "ribbong3cute" },
    { name: "Band der Anmut Super", title: "", image: "ribbong3cutesuper" },
    { name: "Band der Anmut Hyper", title: "", image: "ribbong3cutehyper" },
    { name: "Band der Anmut Master", title: "", image: "ribbong3cutemaster" },

    { name: "Band der Klugheit", title: "", image: "ribbong3smart" },
    { name: "Band der Klugheit Super", title: "", image: "ribbong3smartsuper" },
    { name: "Band der Klugheit Hyper", title: "", image: "ribbong3smarthyper" },
    { name: "Band der Klugheit Master", title: "", image: "ribbong3smartmaster" },

    { name: "Band der Stärke", title: "", image: "ribbong3tough" },
    { name: "Band der Stärke Super", title: "", image: "ribbong3toughsuper" },
    { name: "Band der Stärke Hyper", title: "", image: "ribbong3toughhyper" },
    { name: "Band der Stärke Master", title: "", image: "ribbong3toughmaster" },

    { name: "Coolnessmeisterband", title: "Star", image: "ribbonmastercoolness" },
    { name: "Schönheitsmeisterband", title: "Schönheit", image: "ribbonmasterbeauty" },
    { name: "Putzigkeitsmeisterband", title: "Sternchen", image: "ribbonmastercuteness" },
    { name: "Klugheitsmeisterband", title: "Genie", image: "ribbonmastercleverness" },
    { name: "Stärkemeisterband", title: "Kraftprotz", image: "ribbonmastertoughness" },

    { name: "Band des Wettbewerbsstars", title: "Starlegende", image: "ribbonconteststar" },
    { name: "Glitzersternband", title: "Glitzerstern", image: "ribbontwinklingstar" },
    { name: "Wettbewerbsgedenkband", title: "Wettbewerbsglanz", image: "ribboncountmemorycontest2" },

    { name: "Band des Gewinners", title: "", image: "ribbonwinning" },
    { name: "Band des Sieges", title: "", image: "ribbonvictory" },

    { name: "Band der Fähigkeit", title: "", image: "ribbonability" },
    { name: "Großes Band der Fähigkeit", title: "", image: "ribbonabilitygreat" },
    { name: "Doppel-Band der Fähigkeit", title: "", image: "ribbonabilitydouble" },
    { name: "Multi-Band der Fähigkeit", title: "", image: "ribbonabilitymulti" },
    { name: "Paar-Band der Fähigkeit", title: "", image: "ribbonabilitypair" },
    //{ name: "Welt-Band der Fähigkeit", title: "", image: "ribbonabilityworld" }, -- not available anymore

    { name: "Profikampfband", title: "Kampfveteran", image: "ribbonbattlerskillful" },
    { name: "Meisterkampfband", title: "Kampfgenie", image: "ribbonbattlerexpert" },
    { name: "Profibaumband", title: "Baumsieger", image: "ribbonbattletreegreat" },
    { name: "Meisterbaumband", title: "Baummeister", image: "ribbonbattletreemaster" },
    { name: "Meisterturmband", title: "Turmmeister", image: "ribbontowermaster" },
    { name: "Meisterrangband", title: "Rangmeister", image: "ribbonmasterrank" },
	
	{ name: "Kampfgedenkband", title: "Kämpfernatur", image: "ribboncountmemorybattle2" },
    { name: "Band des Künstlers", title: "Künstlermuse", image: "ribbonartist" },
    { name: "Fleißband", title: "Ranklotzer", image: "ribboneffort" },
	// daily
    { name: "Band der Wachsamkeit", title: "Argusauge", image: "ribbonalert" },
    { name: "Band des Schocks", title: "Hasenfuß", image: "ribbonshock" },
    { name: "Band der Traurigkeit", title: "Trauerkloß", image: "ribbondowncast" },
    { name: "Band der Sorglosigkeit", title: "Schlendrian", image: "ribboncareless" },
    { name: "Band der Entspannung", title: "Meister der Entspannung", image: "ribbonrelax" },
    { name: "Band des Schlafens", title: "Tiefschläfer", image: "ribbonsnooze" },
    { name: "Band des Lächelns", title: "Frohnatur", image: "ribbonsmile" },
	// Buyable
    { name: "Hinreißendes Band", title: "Blickfang", image: "ribbongorgeous" },
    { name: "Königliches Band", title: "Blaublut", image: "ribbonroyal" },
    { name: "Hinreißendes Königliches Band", title: "Blaublütiger Blickfang", image: "ribbongorgeousroyal" },

    { name: "Fußabdruckband", title: "Wegbegleiter", image: "ribbonfootprint" },
    { name: "Band der Legende", title: "Lebende Legende", image: "ribbonlegend" },
    { name: "Zutraulichkeitsband", title: "Herzensfreund", image: "ribbonbestfriends" },
    { name: "Trainingsband", title: "Trainingspartner", image: "ribbontraining" },

    { name: "Battle-Royale-Meisterband", title: "Battle-Royale-Meister", image: "ribbonbattleroyale" },
    { name: "Hisui-Band", title: "Zeitzeuge", image: "ribbonhisui" },
    { name: "Partnerband", title: "von <Trainername>", image: "ribbonpartner" },

    { name: "Band der Nation", title: "Triumphator", image: "ribbonnational" },
    { name: "Band der Erde", title: "Hundertsassa", image: "ribbonearth" },
    { name: "Klassisches Band", title: "Pokémon-Fan", image: "ribbonclassic" },
    { name: "Premierband", title: "Jubilar", image: "ribbonpremier" },
	// Daytime
	{ name: "Mittags-Zeichen", title: "Magenknurrer", image: "ribbonmarklunchtime" },
    { name: "Mitternachts-Zeichen", title: "Schlafmütze", image: "ribbonmarksleepytime" },
    { name: "Abenddämmerungs-Zeichen", title: "Gähner", image: "ribbonmarkdusk" },
    { name: "Morgendämmerungs-Zeichen", title: "Frühaufsteher", image: "ribbonmarkdawn" },
	// Weather
    { name: "Wolken-Zeichen", title: "Wolkengucker", image: "ribbonmarkcloudy" },
    { name: "Regen-Zeichen", title: "Regenplanscher", image: "ribbonmarkrainy" },
    { name: "Gewitter-Zeichen", title: "Krachmacher", image: "ribbonmarkstormy" },
    { name: "Schneefall-Zeichen", title: "Schneetänzer", image: "ribbonmarksnowy" },
    { name: "Schneesturm-Zeichen", title: "Frostbeule", image: "ribbonmarkblizzard" },
    { name: "Dürre-Zeichen", title: "Trockenkehle", image: "ribbonmarkdry" },
    { name: "Sandsturm-Zeichen", title: "Sandwühler", image: "ribbonmarksandstorm" },
    { name: "Nebel-Zeichen", title: "Nebelwanderer", image: "ribbonmarkmisty" },

    { name: "Schicksals-Zeichen", title: "Schicksalsbote", image: "ribbonmarkdestiny" },
    { name: "Angel-Zeichen", title: "Fang des Tages", image: "ribbonmarkfishing" },
    { name: "Curry-Zeichen", title: "Currykenner", image: "ribbonmarkcurry" },
	// Personality
	{ name: "Gängigkeits-Zeichen", title: "Menschenfreund", image: "ribbonmarkuncommon" },
    { name: "Raufbold-Zeichen", title: "Rowdy", image: "ribbonmarkrowdy" },
    { name: "Sorglos-Zeichen", title: "Luftikus", image: "ribbonmarkabsentminded" },
    { name: "Spannungs-Zeichen", title: "Nervenbündel", image: "ribbonmarkjittery" },
    { name: "Vorfreude-Zeichen", title: "Flitzebogen", image: "ribbonmarkexcited" },
    { name: "Charisma-Zeichen", title: "Charismatiker", image: "ribbonmarkcharismatic" },
    { name: "Gelassenheits-Zeichen", title: "Ruhepol", image: "ribbonmarkcalmness" },
    { name: "Hitzkopf-Zeichen", title: "Heißsporn", image: "ribbonmarkintense" },
    { name: "Achtlos-Zeichen", title: "Tagträumer", image: "ribbonmarkzonedout" },
    { name: "Glücklichkeits-Zeichen", title: "Grinsebacke", image: "ribbonmarkjoyful" },
    { name: "Wut-Zeichen", title: "Choleriker", image: "ribbonmarkangry" },
    { name: "Lächel-Zeichen", title: "Sonnenschein", image: "ribbonmarksmiley" },
    { name: "Trübsal-Zeichen", title: "Heulsuse", image: "ribbonmarkteary" },
    { name: "Heiterkeits-Zeichen", title: "Optimist", image: "ribbonmarkupbeat" },
    { name: "Missmut-Zeichen", title: "Muffel", image: "ribbonmarkpeeved" },
    { name: "Verstands-Zeichen", title: "Schlaukopf", image: "ribbonmarkintellectual" },
    { name: "Impulsiv-Zeichen", title: "Krawallbürste", image: "ribbonmarkferocious" },
    { name: "Listigkeits-Zeichen", title: "Schlitzohr", image: "ribbonmarkcrafty" },
    { name: "Grimmig-Zeichen", title: "Griesgram", image: "ribbonmarkscowling" },
    { name: "Sanftmut-Zeichen", title: "Gute Seele", image: "ribbonmarkkindly" },
    { name: "Panik-Zeichen", title: "Hektiker", image: "ribbonmarkflustered" },
    { name: "Ansporn-Zeichen", title: "Enthusiast", image: "ribbonmarkpumpedup" },
    { name: "Lustlos-Zeichen", title: "Faulpelz", image: "ribbonmarkzeroenergy" },
    { name: "Selbstvertrauens-Zeichen", title: "Angeber", image: "ribbonmarkprideful" },
    { name: "Selbstzweifel-Zeichen", title: "Selbstzweifler", image: "ribbonmarkunsure" },
    { name: "Arglos-Zeichen", title: "Schussel", image: "ribbonmarkhumble" },
    { name: "Scheinheilig-Zeichen", title: "Wichtigtuer", image: "ribbonmarkthorny" },
    { name: "Elan-Zeichen", title: "Energiebündel", image: "ribbonmarkvigor" },
    { name: "Formtief-Zeichen", title: "Durchhänger", image: "ribbonmarkslump" },
	// Obtainable
    { name: "Aufsammler-Zeichen", title: "Schatzsucher", image: "ribbonmarkitemfinder" },
    { name: "Partner-Zeichen", title: "Herzenspartner", image: "ribbonmarkpartner" },
    { name: "Gourmet-Zeichen", title: "Gourmet", image: "ribbonmarkgourmand" },
	// Height (obtainable)
    { name: "Riesen-Zeichen", title: "Riese", image: "ribbonmarkjumbo" },
    { name: "Winzlings-Zeichen", title: "Winzling", image: "ribbonmarkmini" },
	// Special
	{ name: "Raritäts-Zeichen", title: "Eremit", image: "ribbonmarkrare" },
    { name: "Elite-Zeichen", title: "Ex-Elite", image: "ribbonmarkalpha" },
    { name: "Titanen-Zeichen", title: "Titan", image: "ribbonmarkmightiest" },
    { name: "Herrscher-Zeichen", title: "Ex-Herrscher", image: "ribbonmarktitan" }
];

/* RULES TO GIVE POKEMON BANDS */

const BAND_RULES = {

	"Band des Champs": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"FireRed",
			"LeafGreen",
		]
	},
	
	"Band des Sinnoh-Champs": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band des Hoenn-Champs": {
		games: [
			"OmegaRuby",
			"AlphaSapphire"
		]
	},

	"Band des Kalos-Champs": {
		games: [
			"X",
			"Y"
		]
	},

	"Band des Alola-Champs": {
		games: [
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon"
		]
	},
	
	"Band des Galar-Champs": {
		games: [
			"Sword",
			"Shield"
		]
	},
	
	"Band des Paldea-Champs": {
		games: [
			"Scarlet",
			"Violet"
		]
	},
	
	// Contests
	"Band des Künstlers": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald"
		]
	},
	
	"Band der Coolness": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Coolness Super": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Coolness Hyper": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Coolness Master": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Schönheit": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Schönheit Super": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Schönheit Hyper": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Schönheit Master": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Anmut": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Anmut Super": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Anmut Hyper": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Anmut Master": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Klugheit": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Klugheit Super": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Klugheit Hyper": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Klugheit Master": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Stärke": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Stärke Super": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Stärke Hyper": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Stärke Master": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Coolnessmeisterband": {
		games: [
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Schönheitsmeisterband": {
		games: [
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Putzigkeitsmeisterband": {
		games: [
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Klugheitsmeisterband": {
		games: [
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Stärkemeisterband": {
		games: [
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Band des Wettbewerbsstars": {
		games: [
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Glitzersternband": {
		games: [
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	/*"Wettbewerbsgedenkband": {
		games: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire"
		]
	},*/
	
	"Wettbewerbsgedenkband": {
		games: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire"
		]
	},
	
	"Kampfgedenkband": {
		games: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire"
		]
	},
	
	//Tower
	"": {
		games: [
			"",
			""
		]
	},
	
	"Profikampfband": {
		games: [
			"X",
			"Y"
		]
	},
	
	"Meisterkampfband": {
		games: [
			"X",
			"Y"
		]
	},
	
	"Profibaumband": {
		games: [
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon"
		]
	},
	
	"Meisterbaumband": {
		games: [
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon"
		]
	},
	
	"Meisterturmband": {
		games: [
			"Sword",
			"Shield"
		]
	},
	
	"Meisterrangband": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		]
	},
	
	"Battle-Royale-Meisterband": {
		games: [
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon"
		]
	},
	
	//Daily
	"Band der Wachsamkeit": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Band des Schocks": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Band der Traurigkeit": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Band der Sorglosigkeit": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Band der Entspannung": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Band des Schlafens": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Band des Lächelns": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	//Buying
	"Hinreißendes Band": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},	
	
	"Königliches Band": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Hinreißendes Königliches Band": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"OmegaRuby",
			"AlphaSapphire",
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	//Other
	"Fleißband": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald",
			"Diamond",
			"Pearl",
			"Platinum",
			"HeartGold",
			"SoulSilver",
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
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet"
		]
	},
	
	"Fußabdruckband": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"HeartGold",
			"SoulSilver",
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
			"BrilliantDiamond",
			"ShiningPearl"
		]
	},
	
	"Band der Legende": {
		games: [
			"HeartGold",
			"SoulSilver"
		]
	},
	
	"Zutraulichkeitsband": {
		games: [
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
			"BrilliantDiamond",
			"ShiningPearl",
			"Scarlet",
			"Violet"
		]
	},
	
	"Trainingsband": {
		games: [
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire"
		]
	},
	
	"Hisui-Band": {
		games: [
			"LegendsArceus"
		]
	},
	
	"Band des Gewinners": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald"
		]
	},
	
	"Band des Sieges": {
		games: [
			"Ruby",
			"Sapphire",
			"Emerald"
		]
	},
	
	"Band der Fähigkeit": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Großes Band der Fähigkeit": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Doppel-Band der Fähigkeit": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Multi-Band der Fähigkeit": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Paar-Band der Fähigkeit": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Nation": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},
	
	"Band der Erde": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum"
		]
	},


	//Pokémon can only have one personality or weather mark or time of day mark. They can only get it at time of capture.



	// Marks
	//Daytime
	"Mittags-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},

	"Mitternachts-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},

	"Abenddämmerungs-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Morgendämmerungs-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	// Weather Marks
	"Wolken-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Regen-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Gewitter-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Schneefall-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Schneesturm-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Dürre-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Sandsturm-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Nebel-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	//Personality
	"Gängigkeits-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Raufbold-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Sorglos-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Spannungs-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Vorfreude-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Charisma-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Gelassenheits-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Hitzkopf-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Achtlos-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Glücklichkeits-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Wut-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Lächel-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Trübsal-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Heiterkeits-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Missmut-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Verstands-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Impulsiv-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Listigkeits-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Grimmig-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Sanftmut-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Panik-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Ansporn-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Lustlos-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Selbstvertrauens-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Selbstzweifel-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Arglos-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Scheinheilig-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Elan-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Formtief-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	// Height
	"Riesen-Zeichen": {
		games: [
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Winzlings-Zeichen"
		]
	},
	
	"Winzlings-Zeichen": {
		games: [
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Riesen-Zeichen"
		]
	},
	
	//Other
	"Angel-Zeichen": {
		games: [
			"Sword",
			"Shield"
		],
		
		originGames: [
			"Sword",
			"Shield"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Raritäts-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Schicksals-Zeichen": {
		games: [
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Raritäts-Zeichen",
		]
	},
	
	"Curry-Zeichen": {
		games: [
			"Sword",
			"Shield"
		],
		
		originGames: [
			"Sword",
			"Shield"
		]
	},
	
	"Raritäts-Zeichen": {
		games: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Sword",
			"Shield",
			"Scarlet",
			"Violet"
		],
		
		conflictsWith: [
			"Mittags-Zeichen",
			"Mitternachts-Zeichen",
			"Abenddämmerungs-Zeichen",
			"Morgendämmerungs-Zeichen",
			"Wolken-Zeichen",
			"Regen-Zeichen",
			"Gewitter-Zeichen",
			"Schneefall-Zeichen",
			"Schneesturm-Zeichen",
			"Dürre-Zeichen",
			"Sandsturm-Zeichen",
			"Nebel-Zeichen",
			"Gängigkeits-Zeichen",
			"Raufbold-Zeichen",
			"Sorglos-Zeichen",
			"Spannungs-Zeichen",
			"Vorfreude-Zeichen",
			"Charisma-Zeichen",
			"Gelassenheits-Zeichen",
			"Hitzkopf-Zeichen",
			"Achtlos-Zeichen",
			"Glücklichkeits-Zeichen",
			"Wut-Zeichen",
			"Lächel-Zeichen",
			"Trübsal-Zeichen",
			"Heiterkeits-Zeichen",
			"Missmut-Zeichen",
			"Verstands-Zeichen",
			"Impulsiv-Zeichen",
			"Listigkeits-Zeichen",
			"Grimmig-Zeichen",
			"Sanftmut-Zeichen",
			"Panik-Zeichen",
			"Ansporn-Zeichen",
			"Lustlos-Zeichen",
			"Selbstvertrauens-Zeichen",
			"Selbstzweifel-Zeichen",
			"Arglos-Zeichen",
			"Scheinheilig-Zeichen",
			"Elan-Zeichen",
			"Formtief-Zeichen",
			"Angel-Zeichen",
			"Schicksals-Zeichen"
		]
	},
	
	"Aufsammler-Zeichen": {
		games: [
			"Scarlet",
			"Violet"
		],
	},
	
	"Partner-Zeichen": {
		games: [
			"Scarlet",
			"Violet"
		],
	},
	
	"Gourmet-Zeichen": {
		games: [
			"Scarlet",
			"Violet"
		],
	},
	
	// SV
	
	"Elite-Zeichen": {
		games: [
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"LegendsArceus"
		]
	},
	
	"Titanen-Zeichen": {
		games: [
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Scarlet",
			"Violet"
		]
	},
	
	"Herrscher-Zeichen": {
		games: [
			"Scarlet",
			"Violet"
		],
		
		originGames: [
			"Scarlet",
			"Violet"
		]
	},
	
	// Events
	"Klassisches Band": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"Black",
			"White",
			"Black2",
			"White2",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
		],
		
		balls: [
			"Jubelball"
		]
	},
	
	"Premierband": {
		games: [
			"Diamond",
			"Pearl",
			"Platinum",
			"Black",
			"White",
			"Black2",
			"White2",
			"X",
			"Y",
			"OmegaRuby",
			"AlphaSapphire",
			"Sun",
			"Moon",
			"UltraSun",
			"UltraMoon",
		],
		
		balls: [
			"Jubelball"
		]
	},
	
	"Partnerband": {
		games: [
			"Scarlet",
			"Violet"
		],
		
		balls: [
			"Jubelball"
		]
	},
	
};
