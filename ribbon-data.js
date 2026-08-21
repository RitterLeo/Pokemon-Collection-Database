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
    { name: "Welt-Band der Fähigkeit", title: "", image: "ribbonabilityworld" },

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
	
	"Band des Kalos-Champs": generation => {

        // Noch keine Generation festgelegt?
        if (!generation) return true;

        return generation >= 1 && generation <= 6;
    },

    "Band des Alola-Champs": generation => {

        if (!generation) return true;

        return generation >= 1 && generation <= 7;
    },
	
	// ZEICHEN NUR FÜR POKEMON AB GENERATION 8
	"Mittags-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Mitternachts-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Abenddämmerungs-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Morgendämmerungs-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Wolken-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Regen-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Gewitter-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Schneefall-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Schneesturm-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Dürre-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Sandsturm-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Nebel-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },

	"Schicksals-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Angel-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Curry-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },

	"Gängigkeits-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Raufbold-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Sorglos-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },

	"Spannungs-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Vorfreude-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Charisma-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Gelassenheits-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },

	"Hitzkopf-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Achtlos-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Glücklichkeits-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Wut-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Lächel-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Trübsal-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Heiterkeits-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Missmut-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Verstands-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Impulsiv-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Listigkeits-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Grimmig-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Sanftmut-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Panik-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Ansporn-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Lustlos-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Selbstvertrauens-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Selbstzweifel-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Arglos-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Scheinheilig-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Elan-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Formtief-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Raritäts-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },

	"Elite-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Titanen-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
	
	"Herrscher-Zeichen": generation => {

        if (!generation) return true;

        return generation >= 8;
    },
};