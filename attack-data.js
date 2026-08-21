const ATTACKS = [
	{
        "id": 1,
        "name": "Klaps",
        "type": "Normal",
        "power": 40,
        "accuracy": 100,
        "category": "physisch",
		"description": "Fügt dem Ziel Schaden zu."  
	},
    {
        "id": 2,
        "name": "Karateschlag",
        "type": "Kampf",
        "power": 50,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Fügt dem Ziel Schaden zu und besitzt eine erhöhte Volltrefferquote." 
	},
    {
        "id": 3,
        "name": "Duplexhieb",
        "type": "Normal",
        "power": 15,
        "accuracy": 85,
        "category": "physisch",
    	"description": "Fügt dem Ziel 2 bis 5 mal hintereinander Schaden zu."  
	},
    {
        "id": 4,
        "name": "Kometenhieb",
        "type": "Normal",
        "power": 18,
        "accuracy": 85,
        "category": "physisch",
    	"description": "Fügt dem Ziel 2 bis 5 mal hintereinander Schaden zu."  
	},
    {
        "id": 5,
        "name": "Megahieb",
        "type": "Normal",
        "power": 85,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Fügt dem Ziel Schaden zu."  
	},
    {
        "id": 6,
        "name": "Zahltag",
        "type": "Normal",
        "power": 40,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Fügt dem Ziel Schaden zu. Nach dem Kampf erhält der Trainer die Fünffache Menge des Levels des Anwenders als zusätzliches Preisgeld."  
	},
    {
        "id": 7,
        "name": "Feuerschlag",
        "type": "Feuer",
        "power": 75,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Fügt dem Ziel Schaden zu und verbrennt es mit einer Wahrscheinlichkeit von 10%."  
	},
    {
        "id": 8,
        "name": "Eishieb",
        "type": "Eis",
        "power": 75,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Fügt dem Ziel Schaden zu und friert es mit einer Wahrscheinlichkeit von 10% ein."  
	},
    {
        "id": 9,
        "name": "Donnerschlag",
        "type": "Elektro",
        "power": 75,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Fügt dem Ziel Schaden zu und paralysiert es mit einer Wahrscheinlichkeit von 10%."  
	},
    {
        "id": 10,
        "name": "Kratzer",
        "type": "Normal",
        "power": 40,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Fügt dem Ziel Schaden zu."  
	},
    {
        "id": 11,
        "name": "Klammer",
        "type": "Normal",
        "power": 55,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Fügt dem Ziel Schaden zu."  
	},
    {
        "id": 12,
        "name": "Guillotine",
        "type": "Normal",
        "power": 0,
        "accuracy": 30,
        "category": "physisch",
    	"description": "Besiegt das Ziel bei einem Treffer sofort."  
	},
    {
        "id": 13,
        "name": "Klingensturm",
        "type": "Normal",
        "power": 80,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Anwender lädt sich in der ersten Runde auf und greift in der zweiten mit höherer Volltrefferquote an."  
	},
    {
        "id": 14,
        "name": "Schwerttanz",
        "type": "Normal",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Erhöht den Angriff des Anwenders um 2 Stufen."  
	},
    {
        "id": 15,
        "name": "Zerschneider",
        "type": "Normal",
        "power": 50,
        "accuracy": 95,
        "category": "physisch",
    	"description": "Fügt dem Ziel Schaden zu. Erlaubt dem Anwender außerhalb des Kampfes Büsche zu zerschneiden."  
	},
    {
        "id": 16,
        "name": "Windstoß",
        "type": "Flug",
        "power": 40,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Richtet doppelten Schaden gegen Gegner in der Luft an."  
	},
    {
        "id": 17,
        "name": "Flügelschlag",
        "type": "Flug",
        "power": 60,
        "accuracy": 100,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 18,
        "name": "Wirbelwind",
        "type": "Normal",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Das Ziel wird ausgewechselt und wilde Pokemon-Kämpfe werden sofort beendet. Besitzt eine niedrige Priorität."  
	},
    {
        "id": 19,
        "name": "Fliegen",
        "type": "Flug",
        "power": 90,
        "accuracy": 95,
        "category": "physisch",
    	"description": "Anwender fliegt hoch in die Luft und greift in der nächsten Runde an."  
	},
    {
        "id": 20,
        "name": "Klammergriff",
        "type": "Normal",
        "power": 15,
        "accuracy": 85,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 21,
        "name": "Slam",
        "type": "Normal",
        "power": 80,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 22,
        "name": "Rankenhieb",
        "type": "Pflanze",
        "power": 45,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 23,
        "name": "Stampfer",
        "type": "Normal",
        "power": 65,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 24,
        "name": "Doppelkick",
        "type": "Kampf",
        "power": 30,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 25,
        "name": "Megakick",
        "type": "Normal",
        "power": 120,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 26,
        "name": "Sprungkick",
        "type": "Kampf",
        "power": 100,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 27,
        "name": "Fegekick",
        "type": "Kampf",
        "power": 60,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 28,
        "name": "Sandwirbel",
        "type": "Boden",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Senkt die Genauigkeit des Zieles um 1 Stufe. Trifft auch Ziele mit einer Immunität gegenüber Boden-Attacken."  
	},
    {
        "id": 29,
        "name": "Kopfnuss",
        "type": "Normal",
        "power": 70,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 30,
        "name": "Hornattacke",
        "type": "Normal",
        "power": 65,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 31,
        "name": "Furienschlag",
        "type": "Normal",
        "power": 15,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 32,
        "name": "Hornbohrer",
        "type": "Normal",
        "power": 1000,
        "accuracy": 30,
        "category": "physisch",
    	"description": "Besiegt das Ziel bei einem Treffer sofort."  
	},
    {
        "id": 33,
        "name": "Tackle",
        "type": "Normal",
        "power": 40,
        "accuracy": 100,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 34,
        "name": "Bodyslam",
        "type": "Normal",
        "power": 85,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 35,
        "name": "Wickel",
        "type": "Normal",
        "power": 15,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 36,
        "name": "Bodycheck",
        "type": "Normal",
        "power": 90,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 37,
        "name": "Fuchtler",
        "type": "Normal",
        "power": 120,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 38,
        "name": "Risikotackle",
        "type": "Normal",
        "power": 120,
        "accuracy": 100,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 39,
        "name": "Rutenschlag",
        "type": "Normal",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Senkt die Verteidigung des Zieles um 1 Stufe."  
	},
    {
        "id": 40,
        "name": "Giftstachel",
        "type": "Gift",
        "power": 15,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 41,
        "name": "Duonadel",
        "type": "Käfer",
        "power": 25,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Diese Attacke trifft 2 mal. Vergiftet das Ziel mit einer Wahrscheinlichkeit von 20% bei jedem Treffer."  
	},
    {
        "id": 42,
        "name": "Nadelrakete",
        "type": "Käfer",
        "power": 25,
        "accuracy": 95,
        "category": "physisch",
    	"description": "Trifft das Ziel 2 bis 5 mal."  
	},
    {
        "id": 43,
        "name": "Silberblick",
        "type": "Normal",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Senkt die Verteidigung des Zieles um 1 Stufe."  
	},
    {
        "id": 44,
        "name": "Biss",
        "type": "Unlicht",
        "power": 60,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 45,
        "name": "Heuler",
        "type": "Normal",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Senkt den Angriff des Zieles um 1 Stufe."  
	},
    {
        "id": 46,
        "name": "Brüller",
        "type": "Normal",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Das Ziel wird ausgewechselt. Wilde Pokemon-Kämpfe werden sofort beendet, sofern das eigene Level höher ist. Besitzt eine niedrige Priorität."  
	},
    {
        "id": 47,
        "name": "Gesang",
        "type": "Normal",
        "power": 0,
        "accuracy": 55,
        "category": "status",
    	"description": "Lässt das Ziel einschlafen."  
	},
    {
        "id": 48,
        "name": "Superschall",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Verwirrt das Ziel."  
	},
    {
        "id": 49,
        "name": "Ultraschall",
        "type": "Normal",
        "power": 20,
        "accuracy": 90,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 50,
        "name": "Aussetzer",
        "type": "Normal",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Blockiert die zuletzt angewendete Attacke des Zieles für 4 Runden solange der Anwender am Kampf teilnimmt."  
	},
    {
        "id": 51,
        "name": "Säure",
        "type": "Gift",
        "power": 40,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 52,
        "name": "Glut",
        "type": "Feuer",
        "power": 40,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 53,
        "name": "Flammenwurf",
        "type": "Feuer",
        "power": 90,
        "accuracy": 100,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 54,
        "name": "Weißnebel",
        "type": "Eis",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Verhindert das aktive senken von Statuswerten des Gegners bei dem Anwender und seinen Partnern."  
	},
    {
        "id": 55,
        "name": "Aquaknarre",
        "type": "Wasser",
        "power": 40,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 56,
        "name": "Hydropumpe",
        "type": "Wasser",
        "power": 110,
        "accuracy": 80,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 57,
        "name": "Surfer",
        "type": "Wasser",
        "power": 90,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 58,
        "name": "Eisstrahl",
        "type": "Eis",
        "power": 90,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 59,
        "name": "Blizzard",
        "type": "Eis",
        "power": 110,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 60,
        "name": "Psystrahl",
        "type": "Psycho",
        "power": 65,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 61,
        "name": "Blubbstrahl",
        "type": "Wasser",
        "power": 65,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 62,
        "name": "Aurorastrahl",
        "type": "Eis",
        "power": 65,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 63,
        "name": "Hyperstrahl",
        "type": "Normal",
        "power": 150,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 64,
        "name": "Pikser",
        "type": "Flug",
        "power": 35,
        "accuracy": 100,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 65,
        "name": "Bohrschnabel",
        "type": "Flug",
        "power": 80,
        "accuracy": 100,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 66,
        "name": "Überroller",
        "type": "Kampf",
        "power": 80,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 67,
        "name": "Fußkick",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 68,
        "name": "Konter",
        "type": "Kampf",
        "power": 0,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Besitzt eine niedrige Priorität. Fügt dem Gegner doppelt so viel Schaden zu wie der Anwender erlitten hat, wenn er von einer physischen Attacke getroffen wurde."  
	},
    {
        "id": 69,
        "name": "Geowurf",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 70,
        "name": "Stärke",
        "type": "Normal",
        "power": 80,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 71,
        "name": "Absorber",
        "type": "Pflanze",
        "power": 20,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 72,
        "name": "Megasauger",
        "type": "Pflanze",
        "power": 40,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 73,
        "name": "Egelsamen",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 90,
        "category": "status",
    	"description": "Bepflanzt den Gegner und fügt dem Ziel 1/8 seiner KP am Ende jeder Runde als Schaden zu. Der Anwender heilt sich anschließend um die selbe Menge."  
	},
    {
        "id": 74,
        "name": "Wachstum",
        "type": "Normal",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Erhöht Angriff und Spezial-Angriff um 1 Stufe. Im Sonnenschein verdoppelt sich der Effekt."  
	},
    {
        "id": 75,
        "name": "Rasierblatt",
        "type": "Pflanze",
        "power": 55,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 76,
        "name": "Solarstrahl",
        "type": "Pflanze",
        "power": 120,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 77,
        "name": "Giftpuder",
        "type": "Gift",
        "power": 0,
        "accuracy": 75,
        "category": "status",
    	"description": "Das Ziel wird vergiftet."  
	},
    {
        "id": 78,
        "name": "Stachelspore",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 75,
        "category": "status",
    	"description": "Das Ziel wird paralysiert."  
	},
    {
        "id": 79,
        "name": "Schlafpuder",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 75,
        "category": "status",
    	"description": "Lässt das Ziel einschlafen."  
	},
    {
        "id": 80,
        "name": "Blättertanz",
        "type": "Pflanze",
        "power": 120,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 81,
        "name": "Fadenschuss",
        "type": "Käfer",
        "power": 0,
        "accuracy": 95,
        "category": "status",
    	"description": "Senkt die Initiative des Zieles um 2 Stufen."  
	},
    {
        "id": 82,
        "name": "Drachenwut",
        "type": "Drache",
        "power": 40,
        "accuracy": 0,
        "category": "speziell",
    	"description": "Diese Attacke fügt immer 40 KP Schaden zu."  
	},
    {
        "id": 83,
        "name": "Feuerwirbel",
        "type": "Feuer",
        "power": 30,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 84,
        "name": "Donnerschock",
        "type": "Elektro",
        "power": 40,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 85,
        "name": "Donnerblitz",
        "type": "Elektro",
        "power": 90,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 86,
        "name": "Donnerwelle",
        "type": "Elektro",
        "power": 0,
        "accuracy": 90,
        "category": "status",
    	"description": "Das Ziel wird paralysiert."  
	},
    {
        "id": 87,
        "name": "Donner",
        "type": "Elektro",
        "power": 110,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 88,
        "name": "Steinwurf",
        "type": "Gestein",
        "power": 50,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 89,
        "name": "Erdbeben",
        "type": "Boden",
        "power": 100,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Trifft alle im Kampf befindlichen Pokemon. Verursacht doppelten Schaden gegen Ziele unter der Erde."  
	},
    {
        "id": 90,
        "name": "Geofissur",
        "type": "Boden",
        "power": 0,
        "accuracy": 30,
        "category": "physisch",
    	"description": "Besiegt das Ziel bei einem Treffer sofort."  
	},
    {
        "id": 91,
        "name": "Schaufler",
        "type": "Boden",
        "power": 80,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Anwender gräbt sich in Runde 1 ein und greift in Runde 2 an."  
	},
    {
        "id": 92,
        "name": "Toxin",
        "type": "Gift",
        "power": 0,
        "accuracy": 90,
        "category": "status",
    	"description": "Vergiftet das Ziel schwer wodurch es kontinuierlich mehr Schaden erhält. Ist der Anwender ein Pokemon vom Typ Gift trifft die Attacke immer."  
	},
    {
        "id": 93,
        "name": "Konfusion",
        "type": "Psycho",
        "power": 50,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 94,
        "name": "Psychokinese",
        "type": "Psycho",
        "power": 90,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 95,
        "name": "Hypnose",
        "type": "Psycho",
        "power": 0,
        "accuracy": 60,
        "category": "status",
    	"description": "Lässt das Ziel einschlafen."  
	},
    {
        "id": 96,
        "name": "Meditation",
        "type": "Psycho",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Erhöht den Angriff des Anwenders um 1 Stufe."  
	},
    {
        "id": 97,
        "name": "Agilität",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Erhöht die Initiative des Anwenders um 2 Stufen."  
	},
    {
        "id": 98,
        "name": "Ruckzuckhieb",
        "type": "Normal",
        "power": 40,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 99,
        "name": "Raserei",
        "type": "Normal",
        "power": 20,	
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 100,
        "name": "Teleport",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Der Anwender wird ausgewechselt und wilde Pokemon-Kämpfe werden sofort beendet. Besitzt eine niedrige Priorität."  
	},
    {
        "id": 101,
        "name": "Nachtnebel",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 102,
        "name": "Mimikry",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 103,
        "name": "Kreideschrei",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 104,
        "name": "Doppelteam",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 105,
        "name": "Genesung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 106,
        "name": "Härtner",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 107,
        "name": "Komprimator",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 108,
        "name": "Rauchwolke",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 109,
        "name": "Konfusstrahl",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 110,
        "name": "Panzerschutz",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 111,
        "name": "Einigler",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 112,
        "name": "Barriere",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 113,
        "name": "Lichtschild",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 114,
        "name": "Dunkelnebel",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 115,
        "name": "Reflektor",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 116,
        "name": "Energiefokus",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 117,
        "name": "Geduld",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 118,
        "name": "Metronom",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 119,
        "name": "Spiegeltrick",
        "type": "Flug",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Setzt die vom Gegner zuletzt eingesetzte Attacke ein."  
	},
    {
        "id": 120,
        "name": "Finale",
        "type": "Normal",
        "power": 200,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 121,
        "name": "Eierbombe",
        "type": "Normal",
        "power": 100,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 122,
        "name": "Schlecker",
        "type": "Geist",
        "power": 30,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 123,
        "name": "Smog",
        "type": "Gift",
        "power": 30,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 124,
        "name": "Schlammbad",
        "type": "Gift",
        "power": 65,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 125,
        "name": "Knochenkeule",
        "type": "Boden",
        "power": 65,
        "accuracy": 85,
        "category": "physisch",
    	"description": "Das Ziel schreckt mit einer Wahrscheinlichkeit von 10% zurück."  
	},
    {
        "id": 126,
        "name": "Feuersturm",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 127,
        "name": "Kaskade",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 128,
        "name": "Schnapper",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 129,
        "name": "Sternschauer",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 130,
        "name": "Schädelwumme",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 131,
        "name": "Dornkanone",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 132,
        "name": "Umklammerung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 133,
        "name": "Amnesie",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 134,
        "name": "Psykraft",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 135,
        "name": "Weichei",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 136,
        "name": "Turmkick",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 137,
        "name": "Schlangenblick",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 138,
        "name": "Traumfresser",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 139,
        "name": "Giftwolke",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 140,
        "name": "Stakkato",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 141,
        "name": "Blutsauger",
        "type": "Käfer",
        "power": 80,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Heilt 50% des angerichteten Schadens."  
	},
    {
        "id": 142,
        "name": "Todeskuss",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 143,
        "name": "Himmelsfeger",
        "type": "Flug",
        "power": 140,
        "accuracy": 90,
        "category": "physisch",
    	"description": "Anwender lädt sich auf und greift in der nächsten Runde an. Besitzt eine erhöhte Volltrefferquote. Lässt den Gegner mit einer Wahrscheinlichkeit von 30% zurückschrecken."  
	},
    {
        "id": 144,
        "name": "Wandler",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 145,
        "name": "Blubber",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 146,
        "name": "Irrschlag",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 147,
        "name": "Pilzspore",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 148,
        "name": "Blitz",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 149,
        "name": "Psywelle",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 150,
        "name": "Platscher",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 151,
        "name": "Säurepanzer",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 152,
        "name": "Krabbhammer",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 153,
        "name": "Explosion",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 154,
        "name": "Kratzfurie",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 155,
        "name": "Knochmerang",
        "type": "Boden",
        "power": 50,
        "accuracy": 90,
        "category": "physisch",
    	"description": "Das Ziel wird 2 mal getroffen."  
	},
    {
        "id": 156,
        "name": "Erholung",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 157,
        "name": "Steinhagel",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 158,
        "name": "Hyperzahn",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 159,
        "name": "Schärfer",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 160,
        "name": "Umwandlung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 161,
        "name": "Triplette",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 162,
        "name": "Superzahn",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 163,
        "name": "Schlitzer",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 164,
        "name": "Delegator",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 165,
        "name": "Verzweifler",
        "type": "Normal",
        "power": 50,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 166,
        "name": "Nachahmer",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 167,
        "name": "Dreifachkick",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 168,
        "name": "Raub",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 169,
        "name": "Spinnennetz",
        "type": "Käfer",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Verhindert Austausch des Zieles solange der Anwender aktiv am Kampf beteiligt ist."  
	},
    {
        "id": 170,
        "name": "Willensleser",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 171,
        "name": "Nachtmahr",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 172,
        "name": "Flammenrad",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 173,
        "name": "Schnarcher",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 174,
        "name": "Fluch",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 175,
        "name": "Dreschflegel",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 176,
        "name": "Umwandlung 2",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 177,
        "name": "Luftstoß",
        "type": "Flug",
        "power": 100,
        "accuracy": 95,
        "category": "speziell",
    	"description": "Besitzt eine erhöhte Volltrefferquote"  
	},
    {
        "id": 178,
        "name": "Baumwollsaat",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 179,
        "name": "Gegenschlag",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 180,
        "name": "Groll",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 181,
        "name": "Pulverschnee",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 182,
        "name": "Schutzschild",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 183,
        "name": "Tempohieb",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 184,
        "name": "Grimasse",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 185,
        "name": "Finte",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 186,
        "name": "Bitterkuss",
        "type": "Fee",
        "power": 0,
        "accuracy": 75,
        "category": "status",
    	"description": "Verwirrt das Ziel."  
	},
    {
        "id": 187,
        "name": "Bauchtrommel",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 188,
        "name": "Matschbombe",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 189,
        "name": "Lehmschelle",
        "type": "Boden",
        "power": 20,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Senkt die Genauigkeit des Zieles um 1 Stufe."  
	},
    {
        "id": 190,
        "name": "Octazooka",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 191,
        "name": "Stachler",
        "type": "Boden",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Kann bis zu dreimal hintereinander eingesetzt werden. Schädigt das Ziel nach jedem Wechsel. Hat keinen Effekt auf Flug-Pokemon oder mit der Fähigkeit Schwebe."  
	},
    {
        "id": 192,
        "name": "Blitzkanone",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 193,
        "name": "Scharfblick",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 194,
        "name": "Abgangsbund",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 195,
        "name": "Abgesang",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 196,
        "name": "Eissturm",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 197,
        "name": "Scanner",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 198,
        "name": "Knochenhatz",
        "type": "Boden",
        "power": 25,
        "accuracy": 90,
        "category": "physisch",
    	"description": "Trifft das Ziel 2 bis 5 mal."  
	},
    {
        "id": 199,
        "name": "Zielschuss",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 200,
        "name": "Wutanfall",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 201,
        "name": "Sandsturm",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 202,
        "name": "Gigasauger",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 203,
        "name": "Ausdauer",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 204,
        "name": "Charme",
        "type": "Fee",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Senkt den Angriff des Zieles um 2 Stufen."  
	},
    {
        "id": 205,
        "name": "Walzer",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 206,
        "name": "Trugschlag",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 207,
        "name": "Angeberei",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 208,
        "name": "Milchgetränk",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 209,
        "name": "Funkensprung",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 210,
        "name": "Zornklinge",
        "type": "Käfer",
        "power": 40,
        "accuracy": 95,
        "category": "physisch",
    	"description": "Verdoppelt die Stärke der Attacke nach jedem Einsatz bis zu viermal."  
	},
    {
        "id": 211,
        "name": "Stahlflügel",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 212,
        "name": "Horrorblick",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 213,
        "name": "Anziehung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 214,
        "name": "Schlafrede",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 215,
        "name": "Vitalglocke",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 216,
        "name": "Rückkehr",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 217,
        "name": "Geschenk",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 218,
        "name": "Frustration",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 219,
        "name": "Bodyguard",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 220,
        "name": "Leidteiler",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 221,
        "name": "Läuterfeuer",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 222,
        "name": "Intensität",
        "type": "Boden",
        "power": 0,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Die Stärke der Attacke wird zufällig bestimmt. Richtet doppelten Schaden gegen Ziele unter der Erde an."  
	},
    {
        "id": 223,
        "name": "Wuchtschlag",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 224,
        "name": "Vielender",
        "type": "Käfer",
        "power": 120,
        "accuracy": 85,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 225,
        "name": "Feuerodem",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 226,
        "name": "Stafette",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 227,
        "name": "Zugabe",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 228,
        "name": "Verfolgung",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 229,
        "name": "Turbodreher",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 230,
        "name": "Lockduft",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 231,
        "name": "Eisenschweif",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 232,
        "name": "Metallklaue",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 233,
        "name": "Überwurf",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 234,
        "name": "Morgengrauen",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 235,
        "name": "Synthese",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 236,
        "name": "Mondschein",
        "type": "Fee",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Füllt die KP des Anwender auf. Bei Sonnenschein 66%. Bei Regen, Schnee und Sandsturm 25%. Bei normalem Wetter 50%"  
	},
    {
        "id": 237,
        "name": "Kraftreserve",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 238,
        "name": "Kreuzhieb",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 239,
        "name": "Windhose",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 240,
        "name": "Regentanz",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 241,
        "name": "Sonnentag",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 242,
        "name": "Knirscher",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 243,
        "name": "Spiegelcape",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 244,
        "name": "Psycho-Plus",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 245,
        "name": "Turbotempo",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 246,
        "name": "Antik-Kraft",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 247,
        "name": "Spukball",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 248,
        "name": "Seher",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 249,
        "name": "Zertrümmerer",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 250,
        "name": "Whirlpool",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 251,
        "name": "Prügler",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 252,
        "name": "Mogelhieb",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 253,
        "name": "Aufruhr",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 254,
        "name": "Horter",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 255,
        "name": "Entfessler",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 256,
        "name": "Verzehrer",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 257,
        "name": "Hitzewelle",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 258,
        "name": "Hagelsturm",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 259,
        "name": "Folterknecht",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 260,
        "name": "Schmeichler",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 261,
        "name": "Irrlicht",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 262,
        "name": "Memento-Mori",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 263,
        "name": "Fassade",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 264,
        "name": "Power-Punch",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 265,
        "name": "Riechsalz",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 266,
        "name": "Spotlight",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 267,
        "name": "Natur-Kraft",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 268,
        "name": "Ladevorgang",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 269,
        "name": "Verhöhner",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 270,
        "name": "Rechte Hand",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 271,
        "name": "Trickbetrug",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 272,
        "name": "Rollenspiel",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 273,
        "name": "Wunschtraum",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 274,
        "name": "Zuschuss",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 275,
        "name": "Verwurzler",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 276,
        "name": "Kraftkoloss",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 277,
        "name": "Magiemantel",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 278,
        "name": "Aufbereitung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 279,
        "name": "Vergeltung",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 280,
        "name": "Durchbruch",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 281,
        "name": "Gähner",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 282,
        "name": "Abschlag",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 283,
        "name": "Notsituation",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 284,
        "name": "Eruption",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 285,
        "name": "Fähigkeitstausch",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 286,
        "name": "Begrenzer",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 287,
        "name": "Heilung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 288,
        "name": "Nachspiel",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 289,
        "name": "Übernahme",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 290,
        "name": "Geheimpower",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 291,
        "name": "Taucher",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 292,
        "name": "Armstoß",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 293,
        "name": "Tarnung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 294,
        "name": "Schweifglanz",
        "type": "Käfer",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Erhöht den Spezial-Angriff des Anwenders um 3 Stufen."  
	},
    {
        "id": 295,
        "name": "Scheinwerfer",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 296,
        "name": "Nebelball",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 297,
        "name": "Daunenreigen",
        "type": "Flug",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Senkt den Angriff des Zieles um 2 Stufen."  
	},
    {
        "id": 298,
        "name": "Taumeltanz",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 299,
        "name": "Feuerfeger",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 300,
        "name": "Lehmsuhler",
        "type": "Boden",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Halbiert die Stärke von Elektro-Attacken solange der Anwender am Kampf teilnimmt."  
	},
    {
        "id": 301,
        "name": "Frostbeule",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 302,
        "name": "Nietenranke",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 303,
        "name": "Tagedieb",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 304,
        "name": "Schallwelle",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 305,
        "name": "Giftzahn",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 306,
        "name": "Zermalmklaue",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 307,
        "name": "Lohekanonade",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 308,
        "name": "Aquahaubitze",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 309,
        "name": "Sternenhieb",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 310,
        "name": "Erstauner",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 311,
        "name": "Meteorologe",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 312,
        "name": "Aromakur",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 313,
        "name": "Trugträne",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 314,
        "name": "Windschnitt",
        "type": "Flug",
        "power": 60,
        "accuracy": 95,
        "category": "speziell",
    	"description": "Besitzt eine erhöhte Volltrefferquote."  
	},
    {
        "id": 315,
        "name": "Hitzekoller",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 316,
        "name": "Schnüffler",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 317,
        "name": "Felsgrab",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 318,
        "name": "Silberhauch",
        "type": "Käfer",
        "power": 60,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Erhöht mit einer Wahrscheinlichkeit von 10% Angriff, Verteidigung, Spezial-Angriff, Spezial-Verteidigung und Initiative des Anwenders um 1 Stufe."  
	},
    {
        "id": 319,
        "name": "Metallsound",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 320,
        "name": "Grasflöte",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 321,
        "name": "Spaßkanone",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 322,
        "name": "Kosmik-Kraft",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 323,
        "name": "Fontränen",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 324,
        "name": "Ampelleuchte",
        "type": "Käfer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": "Verwirrt das Ziel mit einer Wahrscheinlichkeit von 10%."  
	},
    {
        "id": 325,
        "name": "Finsterfaust",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 326,
        "name": "Sondersensor",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 327,
        "name": "Himmelhieb",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 328,
        "name": "Sandgrab",
        "type": "Boden",
        "power": 35,
        "accuracy": 85,
        "category": "physisch",
    	"description": "Das Ziel kann für 4 bis 5 Runden lang nicht fliehen und erhält kontinuierlich Schaden."  
	},
    {
        "id": 329,
        "name": "Eiseskälte",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": "Besiegt das Ziel bei einem Treffer sofort."  
	},
    {
        "id": 330,
        "name": "Lehmbrühe",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 331,
        "name": "Kugelsaat",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 332,
        "name": "Aero-Ass",
        "type": "Flug",
        "power": 60,
        "accuracy": 0,
        "category": "physisch",
    	"description": "Diese Attacke trifft immer."  
	},
    {
        "id": 333,
        "name": "Eisspeer",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 334,
        "name": "Eisenabwehr",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 335,
        "name": "Rückentzug",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 336,
        "name": "Jauler",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 337,
        "name": "Drachenklaue",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 338,
        "name": "Flora-Statue",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 339,
        "name": "Protzer",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 340,
        "name": "Sprungfeder",
        "type": "Flug",
        "power": 85,
        "accuracy": 85,
        "category": "physisch",
    	"description": "Anwender springt in der ersten Runde in die Luft und schädigt das Ziel in der nächsten. Paralysiert den Gegner mit einer Wahrscheinlichkeit von 30%."  
	},
    {
        "id": 341,
        "name": "Lehmschuss",
        "type": "Boden",
        "power": 55,
        "accuracy": 95,
        "category": "speziell",
    	"description": "Verringert die Initiative des Zieles um 1 Stufe."  
	},
    {
        "id": 342,
        "name": "Giftschweif",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 343,
        "name": "Bezirzer",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 344,
        "name": "Volttackle",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 345,
        "name": "Zauberblatt",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 346,
        "name": "Nassmacher",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 347,
        "name": "Gedankengut",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 348,
        "name": "Laubklinge",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 349,
        "name": "Drachentanz",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 350,
        "name": "Felswurf",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 351,
        "name": "Schockwelle",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 352,
        "name": "Aquawelle",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 353,
        "name": "Kismetwunsch",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 354,
        "name": "Psyschub",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 355,
        "name": "Ruheort",
        "type": "Flug",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Füllt die KP um 50% auf. Anwender verliert den Flug-Typen für den Rest der Runde und wird zum Normal-Typen."  
	},
    {
        "id": 356,
        "name": "Erdanziehung",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 357,
        "name": "Wunderauge",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 358,
        "name": "Weckruf",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 359,
        "name": "Hammerarm",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 360,
        "name": "Gyroball",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 361,
        "name": "Heilopfer",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 362,
        "name": "Lake",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 363,
        "name": "Beerenkräfte",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 364,
        "name": "Offenlegung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 365,
        "name": "Pflücker",
        "type": "Flug",
        "power": 60,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Anwender isst die Beere des Gegners wenn dieser eine trägt."  
	},
    {
        "id": 366,
        "name": "Rückenwind",
        "type": "Flug",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Verdoppelt die Initiative auf der Seite des Anwenders für 4 Runden."  
	},
    {
        "id": 367,
        "name": "Akupressur",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 368,
        "name": "Metallstoß",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 369,
        "name": "Kehrtwende",
        "type": "Käfer",
        "power": 70,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Anwender wird, nachdem er Schaden angerichtet hat, ausgewechselt."  
	},
    {
        "id": 370,
        "name": "Nahkampf",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 371,
        "name": "Gegenstoß",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 372,
        "name": "Gewissheit",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 373,
        "name": "Itemsperre",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 374,
        "name": "Schleuder",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 375,
        "name": "Psybann",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 376,
        "name": "Trumpfkarte",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 377,
        "name": "Heilblockade",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 378,
        "name": "Auswringen",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 379,
        "name": "Krafttrick",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 380,
        "name": "Magensäfte",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 381,
        "name": "Beschwörung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 382,
        "name": "Egotrip",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 383,
        "name": "Imitator",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 384,
        "name": "Krafttausch",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 385,
        "name": "Schutztausch",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 386,
        "name": "Strafattacke",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 387,
        "name": "Zuflucht",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 388,
        "name": "Sorgensamen",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 389,
        "name": "Tiefschlag",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 390,
        "name": "Giftspitzen",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 391,
        "name": "Statustausch",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 392,
        "name": "Wasserring",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 393,
        "name": "Magnetflug",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 394,
        "name": "Flammenblitz",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 395,
        "name": "Kraftwelle",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 396,
        "name": "Aurasphäre",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 397,
        "name": "Steinpolitur",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 398,
        "name": "Gifthieb",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 399,
        "name": "Finsteraura",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 400,
        "name": "Nachthieb",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 401,
        "name": "Nassschweif",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 402,
        "name": "Samenbomben",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 403,
        "name": "Luftschnitt",
        "type": "Flug",
        "power": 75,
        "accuracy": 95,
        "category": "speziell",
    	"description": "Besitzt eine Wahrscheinlichkeit von 30% den Gegner zurückschrecken zu lassen."  
	},
    {
        "id": 404,
        "name": "Kreuzschere",
        "type": "Käfer",
        "power": 80,
        "accuracy": 100,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 405,
        "name": "Käfergebrumm",
        "type": "Käfer",
        "power": 90,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Senkt mit einer Wahrscheinlichkeit von 10% die Spezial-Verteidigung des Zieles. Umgeht Delegator."  
	},
    {
        "id": 406,
        "name": "Drachenpuls",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 407,
        "name": "Drachenstoß",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 408,
        "name": "Juwelenkraft",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 409,
        "name": "Ableithieb",
        "type": "Kampf",
        "power": 75,
        "accuracy": 100,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 410,
        "name": "Vakuumwelle",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 411,
        "name": "Fokusstoß",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 412,
        "name": "Energieball",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 413,
        "name": "Sturzflug",
        "type": "Flug",
        "power": 120,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Anwender erhält 33% Rückstoßschaden."  
	},
    {
        "id": 414,
        "name": "Erdkräfte",
        "type": "Boden",
        "power": 90,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Verringert die Spezial-Verteidigung des Zieles um 1 Stufe mit einer Wahrscheinlichkeit von 10%."  
	},
    {
        "id": 415,
        "name": "Wechseldich",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 416,
        "name": "Gigastoß",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 417,
        "name": "Ränkeschmied",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 418,
        "name": "Patronenhieb",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 419,
        "name": "Lawine",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 420,
        "name": "Eissplitter",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 421,
        "name": "Dunkelklaue",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 422,
        "name": "Donnerzahn",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 423,
        "name": "Eiszahn",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 424,
        "name": "Feuerzahn",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 425,
        "name": "Schattenstoß",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 426,
        "name": "Schlammbombe",
        "type": "Boden",
        "power": 65,
        "accuracy": 85,
        "category": "speziell",
    	"description": "Senkt die Genauigkeit des Zieles um 1 Stufe mit einer Wahrscheinlichkeit von 30%."  
	},
    {
        "id": 427,
        "name": "Psychoklinge",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 428,
        "name": "Zen-Kopfstoß",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 429,
        "name": "Spiegelsalve",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 430,
        "name": "Lichtkanone",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 431,
        "name": "Kraxler",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 432,
        "name": "Auflockern",
        "type": "Flug",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Senkt den Fluchtwert des Gegners um 1 Stufe. Entfernt sämtliche Feldeffekte und Schilde auf beiden Seiten."  
	},
    {
        "id": 433,
        "name": "Bizarroraum",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 434,
        "name": "Draco Meteor",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 435,
        "name": "Ladungsstoß",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 436,
        "name": "Flammensturm",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 437,
        "name": "Blättersturm",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 438,
        "name": "Blattgeißel",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 439,
        "name": "Felswurf",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 440,
        "name": "Giftstreich",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 441,
        "name": "Mülltreffer",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 442,
        "name": "Eisenschädel",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 443,
        "name": "Magnetbombe",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 444,
        "name": "Steinkante",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 445,
        "name": "Liebreiz",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 446,
        "name": "Tarnsteine",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 447,
        "name": "Strauchler",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 448,
        "name": "Geschwätz",
        "type": "Flug",
        "power": 65,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Umgeht Delegator und verwirrt das Ziel."  
	},
    {
        "id": 449,
        "name": "Urteilskraft",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 450,
        "name": "Käferbiss",
        "type": "Käfer",
        "power": 60,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Anwender isst die Beere des Zieles wenn dieses eine trägt."  
	},
    {
        "id": 451,
        "name": "Ladestrahl",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 452,
        "name": "Holzhammer",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 453,
        "name": "Wasserdüse",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 454,
        "name": "Schlagbefehl",
        "type": "Käfer",
        "power": 90,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Besitzt eine erhöhte Volltrefferquote."  
	},
    {
        "id": 455,
        "name": "Blockbefehl",
        "type": "Käfer",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Erhöht Verteidigung und Spezial-Verteidigung des Anwenders um 1 Stufe."  
	},
    {
        "id": 456,
        "name": "Heilbefehl",
        "type": "Käfer",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Heilt 50% der KP des Anwenders."  
	},
    {
        "id": 457,
        "name": "Kopfstoß",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 458,
        "name": "Doppelschlag",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 459,
        "name": "Zeitenlärm",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 460,
        "name": "Raumschlag",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 461,
        "name": "Lunartanz",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 462,
        "name": "Quetschgriff",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 463,
        "name": "Lavasturm",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 464,
        "name": "Schlummerort",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 465,
        "name": "Schocksamen",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 466,
        "name": "Unheilböen",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 467,
        "name": "Schemenkraft",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 468,
        "name": "Klauenwetzer",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 469,
        "name": "Rundumschutz",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 470,
        "name": "Schutzteiler",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 471,
        "name": "Kraftteiler",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 472,
        "name": "Wunderraum",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 473,
        "name": "Psychoschock",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 474,
        "name": "Giftschock",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 475,
        "name": "Autotomie",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 476,
        "name": "Wutpulver",
        "type": "Käfer",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Besitzt eine erhöhte Priorität. Alle Attacken der Gegner werden auf das Ziel gerichtet."  
	},
    {
        "id": 477,
        "name": "Telekinese",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 478,
        "name": "Magieraum",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 479,
        "name": "Katapult",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 480,
        "name": "Bergsturm",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 481,
        "name": "Funkenflug",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 482,
        "name": "Schlammwoge",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 483,
        "name": "Falterreigen",
        "type": "Käfer",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Erhöht Spezial-Angriff, Spezial-Verteidigung und Initiative des Anwenders um 1 Stufe."  
	},
    {
        "id": 484,
        "name": "Rammboss",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 485,
        "name": "Synchrolärm",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 486,
        "name": "Elektroball",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 487,
        "name": "Überflutung",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 488,
        "name": "Nitroladung",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 489,
        "name": "Einrollen",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 490,
        "name": "Fußtritt",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 491,
        "name": "Säurespeier",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 492,
        "name": "Schmarotzer",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 493,
        "name": "Wankelstrahl",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 494,
        "name": "Zwango",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 495,
        "name": "Galanterie",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 496,
        "name": "Kanon",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 497,
        "name": "Widerhall",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 498,
        "name": "Zermürben",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 499,
        "name": "Klärsmog",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 500,
        "name": "Kraftvorrat",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 501,
        "name": "Rapidschutz",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 502,
        "name": "Seitentausch",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 503,
        "name": "Siedewasser",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 504,
        "name": "Hausbruch",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 505,
        "name": "Heilwoge",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 506,
        "name": "Bürde",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 507,
        "name": "Freier Fall",
        "type": "Flug",
        "power": 60,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Anwender und Ziel steigen in Runde 1 in die Luft und in Runde 2 wird Schaden zugefügt. Hat keinen Effekt auf Flug-Pokemon."  
	},
    {
        "id": 508,
        "name": "Gangwechsel",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 509,
        "name": "Überkopfwurf",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 510,
        "name": "Einäschern",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 511,
        "name": "Verzögerung",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 512,
        "name": "Akrobatik",
        "type": "Flug",
        "power": 55,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Verdoppelt den Schaden wenn der Anwender kein Item trägt."  
	},
    {
        "id": 513,
        "name": "Typenspiegel",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 514,
        "name": "Heimzahlung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 515,
        "name": "Wagemut",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 516,
        "name": "Offerte",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 517,
        "name": "Inferno",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 518,
        "name": "Wassersäulen",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 519,
        "name": "Feuersäulen",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 520,
        "name": "Pflanzensäulen",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 521,
        "name": "Voltwechsel",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 522,
        "name": "Käfertrutz",
        "type": "Käfer",
        "power": 50,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Senkt den Spezial-Angriff des Zieles um 1 Stufe."  
	},
    {
        "id": 523,
        "name": "Dampfwalze",
        "type": "Boden",
        "power": 60,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Fügt allen im Kampf befindlichen Pokemon Schaden zu und senkt ihre Initiative um 1 Stufe."  
	},
    {
        "id": 524,
        "name": "Eisesodem",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 525,
        "name": "Drachenrute",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 526,
        "name": "Kraftschub",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 527,
        "name": "Elektronetz",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 528,
        "name": "Stromstoß",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 529,
        "name": "Schlagbohrer",
        "type": "Boden",
        "power": 80,
        "accuracy": 95,
        "category": "physisch",
    	"description": "Besitzt eine erhöhte Volltrefferquote."  
	},
    {
        "id": 530,
        "name": "Doppelhieb",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 531,
        "name": "Herzstempel",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 532,
        "name": "Holzgeweih",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 533,
        "name": "Sanctoklinge",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 534,
        "name": "Kalkklinge",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 535,
        "name": "Brandstempel",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 536,
        "name": "Grasmixer",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 537,
        "name": "Quetschwalze",
        "type": "Käfer",
        "power": 65,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Das Zielt schreckt mit einer Wahrscheinlichkeit von 30% zurück."  
	},
    {
        "id": 538,
        "name": "Watteschild",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 539,
        "name": "Nachtflut",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 540,
        "name": "Psychostoß",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 541,
        "name": "Kehrschelle",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 542,
        "name": "Orkan",
        "type": "Flug",
        "power": 110,
        "accuracy": 70,
        "category": "speziell",
    	"description": "Verwirrt das Ziel mit einer Wahrscheinlichkeit von 30% Trifft im Regen immer. Trifft im Sonnenschein zu 50%. Trifft Ziele in der Luft."  
	},
    {
        "id": 543,
        "name": "Steinschädel",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 544,
        "name": "Klikkdiskus",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 545,
        "name": "Flammenball",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 546,
        "name": "Techblaster",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 547,
        "name": "Urgesang",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 548,
        "name": "Mystoschwert",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 549,
        "name": "Eiszeit",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 550,
        "name": "Blitzschlag",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 551,
        "name": "Blauflammen",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 552,
        "name": "Feuerreigen",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 553,
        "name": "Frostvolt",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 554,
        "name": "Frosthauch",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 555,
        "name": "Standpauke",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 556,
        "name": "Eiszapfhagel",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 557,
        "name": "V-Generator",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 558,
        "name": "Kreuzflamme",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 559,
        "name": "Kreuzdonner",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 560,
        "name": "Flying Press",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 561,
        "name": "Tatami-Schild",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 562,
        "name": "Rülpser",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 563,
        "name": "Pflüger",
        "type": "Boden",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Erhöht Angriff und Spezial-Angriff aller Pflanzen-Pokemon um 1 Stufe wenn sie die Erde berühren."  
	},
    {
        "id": 564,
        "name": "Klebenetz",
        "type": "Käfer",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Senkt die Initiative neu eingewechselter Pokemon um 1 Stufe."  
	},
    {
        "id": 565,
        "name": "Stachelfinale",
        "type": "Käfer",
        "power": 50,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Wird der Gegner mit dieser Attacke besiegt erhöht sich der Angriff des Anwenders um 3 Stufen."  
	},
    {
        "id": 566,
        "name": "Phantomkraft",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 567,
        "name": "Halloween",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 568,
        "name": "Kampfgebrüll",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 569,
        "name": "Plasmaschauer",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 570,
        "name": "Parabolladung",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 571,
        "name": "Waldesfluch",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 572,
        "name": "Blütenwirbel",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 573,
        "name": "Gefriertrockner",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 574,
        "name": "Säuselstimme",
        "type": "Fee",
        "power": 40,
        "accuracy": 0,
        "category": "speziell",
    	"description": "Diese Attacke trifft immer."  
	},
    {
        "id": 575,
        "name": "Abgangstirade",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 576,
        "name": "Invertigo",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 577,
        "name": "Diebeskuss",
        "type": "Fee",
        "power": 50,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Heilt 75% des angerichteten Schadens."  
	},
    {
        "id": 578,
        "name": "Trickschutz",
        "type": "Fee",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Schützt den Anwender und seine Mitstreiter vor Statusattacken."  
	},
    {
        "id": 579,
        "name": "Floraschutz",
        "type": "Fee",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Erhöht die Verteidigung aller Pflanzen-Pokemon um 1 Stufe."  
	},
    {
        "id": 580,
        "name": "Grasfeld",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 581,
        "name": "Nebelfeld",
        "type": "Fee",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Erzeugt für 5 Runden ein Nebelfeld dass den Boden berührende Pokemon vor Status-Attacken schützt. Reduziert den Schaden von Drachen-Attacken um 50%."  
	},
    {
        "id": 582,
        "name": "Elektrifizierung",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 583,
        "name": "Knuddler",
        "type": "Fee",
        "power": 90,
        "accuracy": 90,
        "category": "physisch",
    	"description": "Senkt den Angriff des Zieles mit einer Wahrscheinlichkeit von 10% um 1 Stufe."  
	},
    {
        "id": 584,
        "name": "Feenbrise",
        "type": "Fee",
        "power": 40,
        "accuracy": 100,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 585,
        "name": "Mondgewalt",
        "type": "Fee",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": "Senkt den Spezial-Angriff des Zieles mit einer Wahrscheinlichkeit von 30% um 1 Stufe."  
	},
    {
        "id": 586,
        "name": "Überschallknall",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 587,
        "name": "Feenschloss",
        "type": "Fee",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Das Ziel kann die nächste Runde nicht ausgetauscht werden oder fliehen."  
	},
    {
        "id": 588,
        "name": "Königsschild",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 589,
        "name": "Kameradschaft",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 590,
        "name": "Vertrauenssache",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 591,
        "name": "Diamantsturm",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 592,
        "name": "Dampfschwall",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 593,
        "name": "Dimensionsloch",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 594,
        "name": "Wasser-Shuriken",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 595,
        "name": "Magieflamme",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 596,
        "name": "Schutzstacheln",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 597,
        "name": "Duftwolke",
        "type": "Fee",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Diese Attacke trifft immer. Erhöht die Spezial-Verteidigung des Partners um 1 Stufe."  
	},
    {
        "id": 598,
        "name": "Mystowellen",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 599,
        "name": "Giftfalle",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 600,
        "name": "Pulverschleuder",
        "type": "Käfer",
        "power": 0,
        "accuracy": 100,
        "category": "status",
    	"description": "Besitzt eine erhöhte Priorität. Setzt das Ziel in der selben Runde eine Feuer-Attacke ein wird dies verhindert und er schadet sich selbst."  
	},
    {
        "id": 601,
        "name": "Geokontrolle",
        "type": "Fee",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Anwender lädt sich in Runde 1 auf. Erhöht in Runde 2 den Spezial-Angriff, die Spezial-Verteidigung und die Initiative um 2 Stufen."  
	},
    {
        "id": 602,
        "name": "Magnetregler",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 603,
        "name": "Goldene Zeiten",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 604,
        "name": "Elektrofeld",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 605,
        "name": "Zauberschein",
        "type": "Fee",
        "power": 80,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Trifft alle gegnerischen Pokemon."  
	},
    {
        "id": 606,
        "name": "Ehrentag",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 607,
        "name": "Händchenhalten",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 608,
        "name": "Kulleraugen",
        "type": "Fee",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Besitzt eine erhöhte Priorität. Senkt Angriff des Zieles um 1 Stufe."  
	},
    {
        "id": 609,
        "name": "Wangenrubbler",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 610,
        "name": "Zurückhaltung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 611,
        "name": "Plage",
        "type": "Käfer",
        "power": 20,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Das Ziel kann für 4 bis 5 Runden nicht fliehen und erhält kontinuierlich Schaden."  
	},
    {
        "id": 612,
        "name": "Steigerungshieb",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 613,
        "name": "Unheilsschwingen",
        "type": "Flug",
        "power": 80,
        "accuracy": 100,
        "category": "speziell",
    	"description": "Heilt 75% des angerichteten Schadens."  
	},
    {
        "id": 614,
        "name": "Tausend Pfeile",
        "type": "Boden",
        "power": 90,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Trifft alle gegnerischen Pokemon, auch mit einer Immunität gegenüber Boden-Attacken, und hebt diese Immunität auf."  
	},
    {
        "id": 615,
        "name": "Tausend Wellen",
        "type": "Boden",
        "power": 90,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Trifft alle gegnerischen Pokemon und verhindert deren Austausch."  
	},
    {
        "id": 616,
        "name": "Bodengewalt",
        "type": "Boden",
        "power": 90,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Trifft alle gegnerischen Pokemon."  
	},
    {
        "id": 617,
        "name": "Lux Calamitatis",
        "type": "Fee",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": "Anwender erhält 50% des angerichteten Schadens als Rückstoß."  
	},
    {
        "id": 618,
        "name": "Ursprungswoge",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 619,
        "name": "Abgrundsklinge",
        "type": "Boden",
        "power": 120,
        "accuracy": 85,
        "category": "physisch",
    	"description": "Trifft alle gegnerischen Pokemon."  
	},
    {
        "id": 620,
        "name": "Zenitstürmer",
        "type": "Flug",
        "power": 120,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Senkt Verteidigung und Spezial-Verteidigung des Anwenders um 1 Stufe."  
	},
    {
        "id": 621,
        "name": "Dimensionswahn",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
/* -- Z-Moves
    {
        "id": 622,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 623,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 624,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 625,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 626,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 627,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 628,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 629,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 630,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 631,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 632,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 633,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 634,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 635,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 636,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 637,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 638,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 639,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 640,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 641,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 642,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 643,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 644,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 645,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 646,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 647,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 648,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 649,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 650,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 651,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 652,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 653,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 654,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 655,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 656,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 657,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 658,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
*/
    {
        "id": 659,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 660,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 661,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 662,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 663,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 664,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 665,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 666,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 667,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 668,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 669,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 670,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 671,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 672,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 673,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 674,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 675,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 676,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 677,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 678,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 679,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 680,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 681,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 682,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 683,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 684,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 685,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 686,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 687,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 688,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 689,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 690,
        "name": "Schnabelkanone",
        "type": "Flug",
        "power": 100,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Besitzt eine niedrige Priorität. Anwender lädt sich zu Beginn auf, verbrennt alle Pokemon die währenddessen Kontakt herstellen, und greift am Ende der Runde an."  
	},
    {
        "id": 691,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 692,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 693,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 694,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 695,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 696,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 697,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 698,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 699,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 700,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 701,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 702,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 703,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 704,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 705,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 706,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 707,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 708,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 709,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 710,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 711,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 712,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 713,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 714,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 715,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 716,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 717,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 718,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 719,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 720,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 721,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 722,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 723,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 724,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 725,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 726,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 727,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 728,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 729,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 730,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 731,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 732,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 733,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 734,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 735,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 736,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 737,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 738,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 739,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 740,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 741,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 742,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 743,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 744,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 745,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 746,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 747,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 748,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 749,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 750,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 751,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 752,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 753,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 754,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 755,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 756,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 757,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 758,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 759,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 760,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 761,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 762,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 763,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 764,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 765,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 766,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 767,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 768,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 769,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 770,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 771,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 772,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 773,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 774,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 775,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 776,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 777,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 778,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 779,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 780,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 781,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 782,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 783,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 784,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 785,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 786,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 787,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 788,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 789,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 790,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 791,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 792,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 793,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 794,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 795,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 796,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 797,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 798,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 799,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 800,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 801,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 802,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 803,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 804,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 805,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 806,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 807,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 808,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 809,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 810,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 811,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 812,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 813,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 814,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 815,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 816,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 817,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 818,
        "name": "",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "",
    	"description": ""  
	},
    {
        "id": 819,
        "name": "Blitzgefängnis",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 820,
        "name": "Drachenkräfte",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 821,
        "name": "Eisiger Blick",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 822,
        "name": "Brennender Zorn",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 823,
        "name": "Donnernder Tritt",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 824,
        "name": "Blizzardlanze",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 825,
        "name": "Astralfragmente",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 826,
        "name": "Schauderspruch",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 827,
        "name": "Unheilsklauen",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 828,
        "name": "Barrierenstoß",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 829,
        "name": "Kraftwechsel",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 830,
        "name": "Felsaxt",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 831,
        "name": "Frühlingsorkan",
        "type": "Fee",
        "power": 100,
        "accuracy": 80,
        "category": "speziell",
    	"description": "Greift alle Gegner an. Senkt mit einer Wahrscheinlichkeit von 30% deren Angriff."  
	},
    {
        "id": 832,
        "name": "Mythenkraft",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 833,
        "name": "Flammenwut",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 834,
        "name": "Wellentackle",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 835,
        "name": "Chlorostrahl",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 836,
        "name": "Frostfallwind",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 837,
        "name": "Siegestanz",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 838,
        "name": "Schmetterramme",
        "type": "Boden",
        "power": 120,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Senkt Verteidigung und Spezial-Verteidigung des Anwenders um 1 Stufe."  
	},
    {
        "id": 839,
        "name": "Giftstachelregen",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 840,
        "name": "Auraschwingen",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 841,
        "name": "Niedertracht",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 842,
        "name": "Refugium",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 843,
        "name": "Drillingspfeile",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 844,
        "name": "Phantomparade",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 845,
        "name": "Klingenschwall",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 846,
        "name": "Polarorkan",
        "type": "Flug",
        "power": 100,
        "accuracy": 80,
        "category": "speziell",
    	"description": "Initiative des Zieles wird mit einer Wahrscheinlichkeit von 30% gesenkt. Trifft im Regen immer."  
	},
    {
        "id": 847,
        "name": "Donnerorkan",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 848,
        "name": "Wüstenorkan",
        "type": "Boden",
        "power": 100,
        "accuracy": 80,
        "category": "speziell",
    	"description": "Trifft alle Gegner und verbrennt diese mit einer Wahrscheinlichkeit von 30%. Trifft im Regen immer."  
	},
    {
        "id": 849,
        "name": "Lunargebet",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 850,
        "name": "Mutschub",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 851,
        "name": "Tera-Ausbruch",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 852,
        "name": "Fadenfalle",
        "type": "Käfer",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": "Besitzt eine erhöhte Priorität. Schützt den Anwender vor allen physischen und speziellen Attacken. Stellt der Gegner Kontakt her wird seine Initiative um 1 Stufe gesenkt."  
	},
    {
        "id": 853,
        "name": "Fersenkick",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 854,
        "name": "Letzte Ehre",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 855,
        "name": "Lichteinschlag",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 856,
        "name": "Auftischen",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 857,
        "name": "Düsenhieb",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 858,
        "name": "Chili-Essenz",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 859,
        "name": "Reifendrehung",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 860,
        "name": "Mäuseplage",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 861,
        "name": "Eiskreisel",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 862,
        "name": "Großklingenstoß",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 863,
        "name": "Vitalsegen",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 864,
        "name": "Pökelsalz",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 865,
        "name": "Tauchtriade",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 866,
        "name": "Letalwirbler",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 867,
        "name": "Abpausen",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 868,
        "name": "Abspaltung",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 869,
        "name": "Kniefallspalter",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 870,
        "name": "Blumentrick",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 871,
        "name": "Loderlied",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 872,
        "name": "Wogentanz",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 873,
        "name": "Rasender Stier",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 874,
        "name": "Goldrausch",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 875,
        "name": "Psychoschneide",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 876,
        "name": "Hydrodampf",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 877,
        "name": "Verderben",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 878,
        "name": "Kollisionskurs",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 879,
        "name": "Blitztour",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 880,
        "name": "Schwanzabwurf",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 881,
        "name": "Eisige Stimmung",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 882,
        "name": "Aufräumen",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 883,
        "name": "Schneelandschaft",
        "type": "Eis",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 884,
        "name": "Anspringen",
        "type": "",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 885,
        "name": "Wegbereiter",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 886,
        "name": "Kalte Dusche",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 887,
        "name": "Hyperbohrer",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 888,
        "name": "Doppelstrahl",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 889,
        "name": "Zornesfaust",
        "type": "Geist",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 890,
        "name": "Rüstungskanone",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 891,
        "name": "Reueschwert",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 892,
        "name": "Zweifachladung",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 893,
        "name": "Riesenhammer",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 894,
        "name": "Vendetta",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 895,
        "name": "Aquaschnitt",
        "type": "Wasser",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 896,
        "name": "Hitzeturbo",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 897,
        "name": "Finsterturbo",
        "type": "Unlicht",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 898,
        "name": "Toxiturbo",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 899,
        "name": "Raufturbo",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 900,
        "name": "Zauberturbo",
        "type": "Fee",
        "power": 100,
        "accuracy": 100,
        "category": "physisch",
    	"description": "Verwirrt das Ziel mit einer Wahrscheinlichkeit von 30%"  
	},
    {
        "id": 901,
        "name": "Blutmond",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 902,
        "name": "Quirlschuss",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 903,
        "name": "Sirupbombe",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 904,
        "name": "Rankenkeule",
        "type": "Pflanze",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 905,
        "name": "Stromstrahl",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 906,
        "name": "Tera-Sternhagel",
        "type": "Normal",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 907,
        "name": "Launenlaser",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 908,
        "name": "Flammenschild",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 909,
        "name": "Sturmblitz",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 910,
        "name": "Wuchtklinge",
        "type": "Gestein",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 911,
        "name": "Tachyon-Schnitt",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 912,
        "name": "Stahlpresse",
        "type": "Stahl",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 913,
        "name": "Drachenschrei",
        "type": "Drache",
        "power": 0,
        "accuracy": 0,
        "category": "status",
    	"description": ""  
	},
    {
        "id": 914,
        "name": "Lockstimme",
        "type": "Fee",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": "Verwirrt Ziele, die in der selben Runde 1 Statuserhöhung erhalten haben."  
	},
    {
        "id": 915,
        "name": "Frustflamme",
        "type": "Feuer",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 916,
        "name": "Donnerstoß",
        "type": "Elektro",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 917,
        "name": "Psycholärm",
        "type": "Psycho",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 918,
        "name": "Schnellkonter",
        "type": "Kampf",
        "power": 0,
        "accuracy": 0,
        "category": "physisch",
    	"description": ""  
	},
    {
        "id": 919,
        "name": "Giftkettung",
        "type": "Gift",
        "power": 0,
        "accuracy": 0,
        "category": "speziell",
    	"description": ""  
	},
    {
        "id": 920,
        "name": "Tilgungslicht",
        "type": "Drache",
        "power": 100,
        "accuracy": 100,
        "category": "speziell",
		"description": "Ignoriert Statusveränderungen des Zieles. Trifft auch Pokemon vom Typ Fee."
    }
]