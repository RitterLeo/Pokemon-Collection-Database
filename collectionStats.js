let activityOffset = 0;

// get different forms of the pokemon from pokemon-data.js
// get different forms of the pokemon from pokemon-data.js
function getFormDexEntries() {

    const entries = [];

    // Bereits erzeugte Form-Dex-Einträge merken.
    // Wichtig:
    // - Bei group werden mehrere Formen zu einem Eintrag.
    // - genderSplit erzeugt trotzdem zwei Einträge.
    const createdEntries = new Set();

    pokemonListe.forEach(pokemon => {

        if (!pokemon.forms) return;

        Object.entries(pokemon.forms).forEach(
            ([formKey, form]) => {

                if (!form || !form.id) return;

                // =============================================
                // Form-Dex-Gruppe
                // =============================================

                const formDexGroup =
                    form.formDex?.group ?? null;

                // =============================================
                // Formname
                // =============================================

                const formName =
                    form.displayname ?? formKey;

                // =============================================
                // Anzeigename
                // =============================================

                const displayName =
                    formName === "Standard"
                        ? pokemon.name
                        : `${formName} ${pokemon.name}`;

                // =============================================
                // Sprite-ID
                // =============================================

                const spriteId =
                    form.spriteId ?? pokemon.nummer;

                // =============================================
                // Geschlechtssplit
                // =============================================

                const genderSplit =
                    form.formDex?.genderSplit === true;

                // =============================================
                // Basis-Key
                // =============================================

                const baseDexKey =
                    formDexGroup
                        ? `${pokemon.nummer}-group-${formDexGroup}`
                        : `${pokemon.nummer}-${form.id}`;

                // =============================================
                // Form-Dex-Key für die Erzeugung
                // =============================================

                // Ohne genderSplit:
                //     1 Eintrag
                //
                // Mit genderSplit:
                //     1 männlicher + 1 weiblicher Eintrag

                if (genderSplit) {

                    // =========================================
                    // Männlich
                    // =========================================

                    const maleKey =
                        `${baseDexKey}-Männlich`;

                    if (!createdEntries.has(maleKey)) {

                        createdEntries.add(maleKey);

                        entries.push({

                            dexKey:
                                maleKey,

                            formId:
                                String(form.id),

                            formKey,
                            formName,

                            displayName:
                                `${displayName} ♂`,

                            gender:
                                "Männlich",

                            pokemonName:
                                pokemon.name,

                            pokemonNumber:
                                pokemon.nummer,

                            spriteId

                        });

                    }

                    // =========================================
                    // Weiblich
                    // =========================================

                    const femaleKey =
                        `${baseDexKey}-Weiblich`;

                    if (!createdEntries.has(femaleKey)) {

                        createdEntries.add(femaleKey);

                        entries.push({

                            dexKey:
                                femaleKey,

                            formId:
                                String(form.id),

                            formKey,
                            formName,

                            displayName:
                                `${displayName} ♀`,

                            gender:
                                "Weiblich",

                            pokemonName:
                                pokemon.name,

                            pokemonNumber:
                                pokemon.nummer,

                            spriteId

                        });

                    }

                    return;
                }

                // =============================================
                // Ohne Geschlechtssplit
                // =============================================

                if (createdEntries.has(baseDexKey)) {
                    return;
                }

                createdEntries.add(baseDexKey);

                entries.push({

                    dexKey:
                        baseDexKey,

                    formId:
                        String(form.id),

                    formKey,
                    formName,

                    displayName,

                    gender:
                        null,

                    pokemonName:
                        pokemon.name,

                    pokemonNumber:
                        pokemon.nummer,

                    spriteId

                });

            }
        );

    });

    return entries;
}

function getFormDexKey(pokemon) {

    if (!pokemon) return null;

    // =============================================
    // Pokémon aus pokemon-data.js finden
    // =============================================

    const pokemonData = pokemonListe.find(
        p =>
            Number(p.nummer) ===
            Number(pokemon.nummer)
    );

    if (!pokemonData || !pokemonData.forms) {
        return null;
    }

    // =============================================
    // Form bestimmen
    // =============================================

    const formEntry =
        Object.entries(pokemonData.forms)
            .find(([formKey, form]) =>
                String(form.id) ===
                String(pokemon.pokemonId)
            );

    if (!formEntry) {
        return null;
    }

    const [formKey, form] = formEntry;

    // =============================================
    // Form-Dex-Einstellungen
    // =============================================

    const genderSplit =
        form.formDex?.genderSplit === true;

    const formDexGroup =
        form.formDex?.group ?? null;

    // =============================================
    // Basis-Key
    // =============================================

    const baseDexKey =
        formDexGroup
            ? `${pokemon.nummer}-group-${formDexGroup}`
            : `${pokemon.nummer}-${form.id}`;

    // =============================================
    // Geschlecht
    // =============================================

    let dexKey = baseDexKey;

    if (genderSplit) {

        if (
            pokemon.geschlecht !== "Männlich" &&
            pokemon.geschlecht !== "Weiblich"
        ) {
            return null;
        }

        dexKey =
            `${dexKey}-${pokemon.geschlecht}`;
    }

    return dexKey;
}

// ============================================
// Get the Key of each Pokemon for each Pokedex
// ============================================

function getLivingDexKey(pokemon) {

    if (!pokemon) return null;

    return String(pokemon.nummer);
}


function getLivingFormDexKey(pokemon) {

    return getFormDexKey(pokemon);
}


function getShinyLivingFormDexKey(pokemon) {

    return getFormDexKey(pokemon);
}

function getIcognitoDexKey(pokemon) {

	if (!pokemon) return null;

	// Nur Icognito (#201)
	if (Number(pokemon.nummer) !== 201) {
		return null;
	}

	// Die Form-ID identifiziert die Icognito-Form
	if (!pokemon.pokemonId) {
		return null;
	}

	return String(pokemon.pokemonId);

}

function calculateCollectionStats(collection) {

	const stats = {

		// =========================
		// Kopfbereich
		// =========================

		overview: {
			totalPokemon: 0,
			shinyPokemon: 0,
			uniqueLocations: 0
		},
		
		captureStats: {
			averageCatchLevel: 0,
			topBalls: [],
			topNatures: [],
			topPersonalities: []
		},

		// =========================
		// Pokedex
		// =========================

		pokedexes: {},
		generationProgress: {},

		// =========================
		// Formen
		// =========================

		livingDex: {
			owned: 0,
			total: 0,
			percent: 0,
			entries: []
		},
		
		forms: {
			owned: 0,
			total: 0,
			percent: 0,
			entries: []
		},

		shinyLivingFormDex: {
			owned: 0,
			total: 0,
			percent: 0,
			entries: []
		},
		
		icognitoDex: {
			owned: 0,
			total: 0,
			percent: 0,
			entries: []
		},

		// =========================
		// Bänder
		// =========================

		ribbons: {
			owned: 0,
			total: 0,
			percent: 0,
			collected: {}
		},

		// =========================
		// Typen
		// =========================

		types: {
			distribution: []
		},

		// =========================
		// Orte
		// =========================

		locations: {
			mostVisited: null
		},

		// =========================
		// Aktivität
		// =========================

		activity: {},
		shinyActivity: {},

		// =========================
		// Highlights
		// =========================

		highlights: {
			oldestPokemon: null
		},

		// =========================
		// Geschlecht
		// =========================

		genders: {
			male: 0,
			female: 0,
			unknown: 0,
			distribution: []
		}

	};


	// =====================================================
	// Übersicht
	// =====================================================

	stats.overview.totalPokemon = collection.length;

	stats.overview.shinyPokemon = collection.filter(
		p => p.shiny === true
	).length;

	stats.overview.uniqueLocations = new Set(
		collection
			.map(p => p.location)
			.filter(Boolean)
	).size;
	
	// =====================================================
	// Fangstatistiken
	// =====================================================

	// Nur Pokémon berücksichtigen,
	// bei denen ein gültiges Fanglevel vorhanden ist.

	const catchLevels =
		collection
			.map(pokemon =>
				Number(pokemon.catchlevel)
			)
			.filter(level =>
				Number.isFinite(level) &&
				level > 0
			);


	// Durchschnittliches Fanglevel

	stats.captureStats.averageCatchLevel =
		catchLevels.length === 0
			? 0
			: Math.round(
				(
					catchLevels.reduce(
						(sum, level) =>
							sum + level,
						0
					)
					/
					catchLevels.length
				) * 10
			) / 10;


		// =====================================================
		// Verwendete Bälle
		// =====================================================

		const ballCounts = {};

		collection.forEach(pokemon => {

			const ball =
				pokemon.ball;

			if (!ball) {
				return;
			}

			ballCounts[ball] =
				(ballCounts[ball] || 0) + 1;

		});


		// Nach Häufigkeit sortieren
		// und auf die Top 10 begrenzen.

		stats.captureStats.topBalls =
			Object.entries(ballCounts)
				.sort(
					([, countA], [, countB]) =>
						countB - countA
				)
				.slice(0, 10)
				.map(
					([ball, count]) => ({

						ball,
						count

					})
				);
				
	// =====================================================
// Wesen
// =====================================================

const natureCounts = {};

collection.forEach(pokemon => {

	const nature =
		pokemon.wesen;

	if (!nature) {
		return;
	}

	natureCounts[nature] =
		(natureCounts[nature] || 0) + 1;

});


stats.captureStats.topNatures =
	Object.entries(natureCounts)

		.sort(
			([, countA], [, countB]) =>
				countB - countA
		)

		.slice(0, 10)

		.map(
			([nature, count]) => ({

				name: nature,
				count

			})
		);


	// =====================================================
	// Persönlichkeiten
	// =====================================================

	const personalityCounts = {};

	collection.forEach(pokemon => {

		const personality =
			pokemon.persoenlichkeit;

		if (!personality) {
			return;
		}

		personalityCounts[personality] =
			(personalityCounts[personality] || 0) + 1;

	});


	stats.captureStats.topPersonalities =
		Object.entries(personalityCounts)

			.sort(
				([, countA], [, countB]) =>
					countB - countA
			)

			.slice(0, 10)

			.map(
				([personality, count]) => ({

					name: personality,
					count

				})
			);

	// =====================================================
	// Pokédexe
	// =====================================================

	const pokedexData = calculatePokedexProgress(
		collection,
		shinyMode,
		pokedexMode
	);

	stats.pokedexes = pokedexData.regions;
	stats.generationProgress = pokedexData.generations;


	// =====================================================
	// Living-Dex / Living-Form-Dex / Shiny Living-Form-Dex
	// =====================================================

	const formDexEntries =
		getFormDexEntries();


	// =====================================================
	// BESITZENE FORM-KEYS BESTIMMEN
	// =====================================================

	const ownedFormKeys = new Set();
	const ownedNormalFormKeys = new Set();
	const ownedShinyFormKeys = new Set();

	getCustom().forEach(pokemon => {

		if (pokemon.gefangen !== true) return;

		const key = getFormDexKey(pokemon);

		if (!key) return;

		// Für den normalen Living-Form-Dex:
		// Shiny und Normal zählen gleichermaßen.
		ownedFormKeys.add(key);

		// Für den Shiny Living-Form-Dex:
		// Normal und Shiny getrennt erfassen.
		if (pokemon.shiny === true) {

			ownedShinyFormKeys.add(key);

		} else {

			ownedNormalFormKeys.add(key);

		}

	});

	// =====================================================
	// LIVING-DEX
	// =====================================================
	//
	// Regeln:
	//
	// - Jede Pokédex-Nummer nur einmal
	// - Formen werden ignoriert
	// - Geschlecht wird ignoriert
	// - Shiny zählt NICHT
	//
	// Beispiel:
	//
	// Pikachu Standard       -> zählt
	// Pikachu Alola          -> zählt als Pikachu
	// Pikachu weiblich       -> zählt als Pikachu
	// Pikachu männlich       -> zählt als Pikachu
	// Pikachu shiny          -> zählt NICHT
	//
	// =====================================================


	// -----------------------------------------------------
	// Soll-Einträge des Living-Dex bestimmen
	// -----------------------------------------------------

	const livingDexEntries = [];

	const livingDexNumbers = new Set();

	pokemonListe.forEach(pokemon => {

		const livingDexKey =
			getLivingDexKey(pokemon);

		if (!livingDexKey) return;

		// Jede Pokédex-Nummer nur einmal
		if (livingDexNumbers.has(livingDexKey)) {
			return;
		}

		livingDexNumbers.add(livingDexKey);

		livingDexEntries.push({

			dexKey:
				`living-${livingDexKey}`,

			pokemonNumber:
				pokemon.nummer,

			pokemonName:
				pokemon.name,

			displayName:
				pokemon.name,

			spriteId:
				pokemon.nummer

		});

	});


	// -----------------------------------------------------
	// Besessene Pokémon bestimmen
	// -----------------------------------------------------

	const ownedLivingDexKeys = new Set();

	collection.forEach(pokemon => {

		// Muss gefangen sein
		if (pokemon.gefangen !== true) {
			return;
		}

		// Shiny zählt nicht für den normalen Living-Dex
		if (pokemon.shiny === true) {
			return;
		}

		const livingDexKey =
			getLivingDexKey(pokemon);

		if (!livingDexKey) {
			return;
		}

		ownedLivingDexKeys.add(
			`living-${livingDexKey}`
		);

	});

	// -----------------------------------------------------
	// Living-Dex Werte
	// -----------------------------------------------------

	stats.livingDex.entries =
		livingDexEntries.map(entry => ({

			...entry,

			owned:
				ownedLivingDexKeys.has(entry.dexKey)

		}));

	stats.livingDex.total =
		stats.livingDex.entries.length;

	stats.livingDex.owned =
		stats.livingDex.entries.filter(
			entry => entry.owned
		).length;

	stats.livingDex.percent =
		stats.livingDex.total === 0
			? 0
			: Math.round(
				stats.livingDex.owned /
				stats.livingDex.total *
				100
			);


	// =====================================================
	// LIVING-FORM-DEX
	// =====================================================

	stats.forms.total =
		formDexEntries.length;

	stats.forms.entries =
		formDexEntries.map(entry => ({

			...entry,

			owned:
				ownedFormKeys.has(entry.dexKey)

		}));

	stats.forms.owned =
		stats.forms.entries.filter(
			entry => entry.owned
		).length;

	stats.forms.percent =
		stats.forms.total === 0
			? 0
			: Math.round(
				stats.forms.owned /
				stats.forms.total *
				100
			);


	// =====================================================
	// SHINY LIVING-FORM-DEX
	// =====================================================
	//
	// Jede Form benötigt:
	// - 1× normal
	// - 1× shiny
	//
	// Geschlechtliche Form-Dex-Einträge bleiben dabei
	// weiterhin getrennt, sofern formDex.genderSplit = true.
	//
	// =====================================================

	stats.shinyLivingFormDex.total =
		formDexEntries.length * 2;


	stats.shinyLivingFormDex.entries = [];

	formDexEntries.forEach(entry => {

		// -------------------------------------------------
		// Normal
		// -------------------------------------------------

		stats.shinyLivingFormDex.entries.push({

			...entry,

			dexKey:
				`${entry.dexKey}-normal`,

			shiny: false,

			owned:
				ownedNormalFormKeys.has(entry.dexKey)

		});


		// -------------------------------------------------
		// Shiny
		// -------------------------------------------------

		stats.shinyLivingFormDex.entries.push({

			...entry,

			dexKey:
				`${entry.dexKey}-shiny`,

			shiny: true,

			owned:
				ownedShinyFormKeys.has(entry.dexKey)

		});

	});


	// -----------------------------------------------------
	// Shiny Living-Form-Dex Fortschritt
	// -----------------------------------------------------

	stats.shinyLivingFormDex.owned =
		stats.shinyLivingFormDex.entries.filter(
			entry => entry.owned
		).length;


	stats.shinyLivingFormDex.percent =
		stats.shinyLivingFormDex.total === 0
			? 0
			: Math.round(
				stats.shinyLivingFormDex.owned /
				stats.shinyLivingFormDex.total *
				100
			);
			
	// =====================================================
	// ICONOGITO-DEX
	// =====================================================
	//
	// Regeln:
	//
	// - Nur Icognito (#201)
	// - Jede Form genau einmal
	// - Insgesamt 28 Formen
	// - Geschlecht wird ignoriert
	// - Shiny wird ignoriert
	// - Andere Pokémon werden ignoriert
	//
	// =====================================================


	// -----------------------------------------------------
	// Soll-Einträge bestimmen
	// -----------------------------------------------------

	const icognitoDexEntries = [];

	const icognitoDexKeys = new Set();

	const icognito =
		pokemonListe.find(
			pokemon =>
				Number(pokemon.nummer) === 201
		);


	if (icognito && icognito.forms) {

		Object.entries(icognito.forms).forEach(
			([formKey, form]) => {

				if (!form || !form.id) {
					return;
				}

				const dexKey =
					getIcognitoDexKey({

						nummer: 201,

						pokemonId:
							form.id

					});

				if (!dexKey) {
					return;
				}

				if (icognitoDexKeys.has(dexKey)) {
					return;
				}

				icognitoDexKeys.add(dexKey);

				icognitoDexEntries.push({

					dexKey,

					formId:
						String(form.id),

					formKey,

					formName:
						form.displayname ?? formKey,

					displayName:
						form.displayname ?? formKey,

					pokemonName:
						icognito.name,

					pokemonNumber:
						201,

					spriteId:
						form.spriteId ?? form.id

				});

			}
		);

	}


	// -----------------------------------------------------
	// Besessene Icognito-Formen bestimmen
	// -----------------------------------------------------

	const ownedIcognitoDexKeys = new Set();

	collection.forEach(pokemon => {

		// Nur Icognito
		if (Number(pokemon.nummer) !== 201) {
			return;
		}

		// Muss gefangen sein
		if (pokemon.gefangen !== true) {
			return;
		}

		const dexKey =
			getIcognitoDexKey(pokemon);

		if (!dexKey) {
			return;
		}

		ownedIcognitoDexKeys.add(dexKey);

	});


	// -----------------------------------------------------
	// Icognito-Dex Werte
	// -----------------------------------------------------

	stats.icognitoDex.entries =
		icognitoDexEntries.map(entry => ({

			...entry,

			owned:
				ownedIcognitoDexKeys.has(
					entry.dexKey
				)

		}));

	stats.icognitoDex.total =
		stats.icognitoDex.entries.length;

	stats.icognitoDex.owned =
		stats.icognitoDex.entries.filter(
			entry => entry.owned
		).length;

	stats.icognitoDex.percent =
		stats.icognitoDex.total === 0
			? 0
			: Math.round(
				stats.icognitoDex.owned /
				stats.icognitoDex.total *
				100
			);

	// =====================================================
	// Typen
	// =====================================================

	const typeCounts = {};

	collection.forEach(pokemon => {

		[pokemon.typ1, pokemon.typ2]
			.filter(type => type && type !== "-")
			.forEach(type => {

				typeCounts[type] =
					(typeCounts[type] || 0) + 1;

			});

	});

	const totalTypes = Object.values(typeCounts)
		.reduce((sum, value) => sum + value, 0);

	stats.types.distribution = Object.entries(typeCounts)

		.map(([type, count]) => ({

			type,

			count,

			ratio:
				totalTypes === 0
					? 0
					: count / totalTypes,

			percent:
				totalTypes === 0
					? 0
					: Math.round(
						count / totalTypes * 100
					)

		}))

		.sort((a, b) =>
			TYPE_ORDER.indexOf(a.type) -
			TYPE_ORDER.indexOf(b.type)
		);


	// =====================================================
	// Bänder
	// =====================================================

	const collectedRibbons = new Set();

	collection.forEach(pokemon => {

		if (!Array.isArray(pokemon.bands)) return;

		pokemon.bands.forEach(band => {

			if (band.active) {
				collectedRibbons.add(band.name);
			}

		});

	});

	stats.ribbons.owned = collectedRibbons.size;

	stats.ribbons.total = baender.length;

	stats.ribbons.percent =
		baender.length === 0
			? 0
			: Math.round(
				collectedRibbons.size /
				baender.length *
				100
			);

	stats.ribbons.collected = [...collectedRibbons];


	// =====================================================
	// Orte
	// =====================================================

	const locationCounts = {};

	collection.forEach(pokemon => {

		if (!pokemon.location) return;

		locationCounts[pokemon.location] =
			(locationCounts[pokemon.location] || 0) + 1;

	});

	let mostVisited = null;

	Object.entries(locationCounts).forEach(
		([location, count]) => {

			if (
				!mostVisited ||
				count > mostVisited.count
			) {

				mostVisited = {
					name: location,
					count
				};

			}

		}
	);

	stats.locations.mostVisited = mostVisited;


	// =====================================================
	// Highlights
	// =====================================================

	const datedPokemon = collection.filter(
		p => p.datum
	);

	if (datedPokemon.length > 0) {

		const oldest = datedPokemon.reduce(
			(oldest, current) => {

				return new Date(current.datum) <
					new Date(oldest.datum)
					? current
					: oldest;

			}
		);

		stats.highlights.oldestPokemon = oldest;

	}

	// =====================================================
	// Aktivität
	// =====================================================

	const activity = {};
	const shinyActivity = {};

	collection.forEach(pokemon => {

		// Nur tatsächlich gefangene Pokémon zählen
		if (pokemon.gefangen !== true) {
			return;
		}

		if (!pokemon.datum) {
			return;
		}

		const month =
			pokemon.datum.substring(0, 7);


		// ---------------------------------------------
		// Alle gefangenen Pokémon
		// ---------------------------------------------

		activity[month] =
			(activity[month] || 0) + 1;


		// ---------------------------------------------
		// Davon schillernde Pokémon
		// ---------------------------------------------

		if (pokemon.shiny === true) {

			shinyActivity[month] =
				(shinyActivity[month] || 0) + 1;

		}

	});


	if (Object.keys(activity).length === 0) {

		stats.activity = {};
		stats.shinyActivity = {};

	} else {

		const firstMonth =
			Object.keys(activity)
				.sort()[0];

		const start =
			new Date(firstMonth + "-01");

		const end =
			new Date();

		const monthlyActivity = {};
		const monthlyShinyActivity = {};

		const current =
			new Date(start);


		while (current <= end) {

			const key =
				`${current.getFullYear()}-${String(
					current.getMonth() + 1
				).padStart(2, "0")}`;


			monthlyActivity[key] =
				activity[key] || 0;


			monthlyShinyActivity[key] =
				shinyActivity[key] || 0;


			current.setMonth(
				current.getMonth() + 1
			);

		}


		stats.activity =
			monthlyActivity;

		stats.shinyActivity =
			monthlyShinyActivity;

	}

	// =====================================================
	// Geschlechter
	// =====================================================

	collection.forEach(pokemon => {

		switch (pokemon.geschlecht) {

			case "Männlich":
				stats.genders.male++;
				break;

			case "Weiblich":
				stats.genders.female++;
				break;

			default:
				stats.genders.unknown++;
				break;

		}

	});

	const total =
		stats.genders.male +
		stats.genders.female +
		stats.genders.unknown;

	stats.genders.distribution = [

		{
			label: "Männlich",
			count: stats.genders.male,

			ratio:
				total === 0
					? 0
					: stats.genders.male / total,

			percent:
				total === 0
					? 0
					: Math.round(
						stats.genders.male /
						total *
						100
					),

			color: "#4A90E2"
		},

		{
			label: "Weiblich",
			count: stats.genders.female,

			ratio:
				total === 0
					? 0
					: stats.genders.female / total,

			percent:
				total === 0
					? 0
					: Math.round(
						stats.genders.female /
						total *
						100
					),

			color: "#FF6FAE"
		},

		{
			label: "Unbekannt",
			count: stats.genders.unknown,

			ratio:
				total === 0
					? 0
					: stats.genders.unknown / total,

			percent:
				total === 0
					? 0
					: Math.round(
						stats.genders.unknown /
						total *
						100
					),

			color: "#A0A0A0"
		}

	];


	// =====================================================
	// ENDE
	// =====================================================

	stats.summary = {

		completion:
			pokemonListe?.length
				? Math.round(
					stats.overview.totalPokemon /
					pokemonListe.length *
					100
				)
				: 0

	};

	return stats;

}

function calculatePokedexProgress(collection, shinyFilter = "all", pokedexMode = "new") {

	const regions = {};
	const generations = {};


	// =====================================================
	// Hilfsfunktionen
	// =====================================================

	function matchesShinyFilter(pokemon){

		if(shinyFilter === "shiny")
			return pokemon.shiny === true;

		if(shinyFilter === "normal")
			return pokemon.shiny !== true;

		return true;

	}

	function getDex(game){

		const dex = pokedexMode === "new"
			? game.newPokemon
			: game.regionalDex;

		return new Set(

			(Array.isArray(dex) ? dex : [])
				.map(id => String(id))

		);

	}

	function normalizeGameName(name){

		return String(name ?? "")
			.trim()
			.toLowerCase();

	}


	// Sammlung einmal filtern
	const filteredCollection = collection.filter(pokemon =>
		matchesShinyFilter(pokemon)
	);

	// =====================================================
	// SPIELE
	// =====================================================

	Object.entries(POKEDEXES).forEach(([regionKey, region]) => {


		regions[regionKey] = {

			name: region.name,
			games: {}

		};

		Object.entries(region.games).forEach(([gameKey, game]) => {


			const dex = getDex(game);

			const ownedIds = new Set(

				filteredCollection

					.filter(pokemon =>
						normalizeGameName(pokemon.game) === normalizeGameName(game.name)
					)

					.map(pokemon =>
						String(pokemon.nummer)
					)

			);

			let owned = 0;

			dex.forEach(id => {

				if (ownedIds.has(id)) {
					owned++;
				}

			});

			regions[regionKey].games[gameKey] = {

				name: game.name,

				generation: game.generation,

				region: game.region,

				owned,

				total: dex.size,

				percent:
					dex.size > 0
						? Math.round((owned / dex.size) * 1000) / 10
						: 0

			};

		});

	});

	// =====================================================
	// GENERATIONEN
	// =====================================================

	const generationDex = {};

	Object.values(POKEDEXES).forEach(region => {

		Object.values(region.games).forEach(game => {

			const generation = Number(game.generation);

			if (!generationDex[generation]) {
				generationDex[generation] = new Set();
			}

			getDex(game).forEach(id =>
				generationDex[generation].add(String(id))
			);

		});

	});

	Object.entries(generationDex).forEach(([generation, dexSet]) => {

		const ownedIds = new Set(

			filteredCollection

				.filter(pokemon =>
					Number(pokemon.generation) === Number(generation)
				)

				.map(pokemon =>
					String(pokemon.nummer)
				)

		);

		let owned = 0;

		dexSet.forEach(id => {

			if (ownedIds.has(id)) {
				owned++;
			}

		});

		generations[generation] = {

			name: `Generation ${generation}`,

			owned,

			total: dexSet.size,

			percent:
				dexSet.size > 0
					? Math.round((owned / dexSet.size) * 1000) / 10
					: 0

		};

	});

	return {

		regions,

		generations

	};

}

const GENERATION_TOTALS = {

    1:151,
    2:100,
    3:135,
    4:107,
    5:156,
    6:72,
    7:88,
    8:96,
    9:120

};

const TYPE_ORDER = [

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
    "Fee"

];

const TYPE_COLORS = {
    Normal: "#BBBBAA",
    Feuer: "#FF421C",
    Wasser: "#2C9BE3",
    Pflanze: "#62BC5A",
    Elektro: "#FFDC00",
    Eis: "#74CFC0",
    Kampf: "#BB5544",
    Gift: "#9553CD",
    Boden: "#A67439",
    Flug: "#96CAFF",
    Psycho: "#FF6380",
    Käfer: "#92C12A",
    Gestein: "#B6A136",
    Geist: "#6E4370",
    Drache: "#5670BE",
    Unlicht: "#4E4545",
    Stahl: "#AAAABB",
    Fee: "#EC8FE6"
};

/* console.table(
    pokemonListe.map(pokemon => ({
        name: pokemon.name,
        nummer: pokemon.nummer,
        geschlecht: pokemon.geschlecht,
        formId: pokemon.formId,
        spriteId: pokemon.spriteId,
        formDexKey: getFormDexKey(pokemon)
    }))
); */