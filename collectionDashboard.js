let pokedexMode = "new";		// "new" | "complete"
let shinyMode = "all";

let progressView = localStorage.getItem("pokedexProgressView") || "games";

let activityPage = -1;

function renderCollectionDashboard() {

    const stats = calculateCollectionStats(getCustom());

    const dashboard = document.getElementById("dashboard");

    dashboard.innerHTML = "";

	const left = document.createElement("div");
	left.className = "dashboard-column";

	const right = document.createElement("div");
	right.className = "dashboard-column";

	left.append(
		renderPokedexSection(stats),
		renderCaptureStatsSection(stats),
		renderTopBallsSection(stats)
	);

	right.append(
		renderTypeSection(stats),
		renderRibbonSection(stats),
		renderHighlightsSection(stats),
		renderGenderSection(stats),
		renderNaturePersonalitySection(stats)
	);

	dashboard.append(
		renderOverview(stats),
		left,
		right,
		renderActivitySection(stats)
	);

}

document.addEventListener("DOMContentLoaded", () => {
    renderCollectionDashboard();
});

function rerenderCollectionDashboard() {

    const scrollY = window.scrollY;

    renderCollectionDashboard();

    requestAnimationFrame(() => {

        window.scrollTo({
            top: scrollY,
            behavior: "instant"
        });

    });

}

function renderOverview(stats) {

    const section = document.createElement("section");

    section.className = "dashboard-section";

    section.innerHTML = `

        <div class="overview-grid">

            <div class="overview-card">
                <span class="value">${stats.overview.totalPokemon}</span>
                <span class="label">Pokémon</span>
            </div>

            <div class="overview-card">
                <span class="value">${stats.overview.shinyPokemon}</span>
                <span class="label">Schillernd</span>
            </div>

            <div class="overview-card">
                <span class="value">${stats.overview.uniqueLocations}</span>
                <span class="label">Orte</span>
            </div>

        </div>

    `;

    return section;
}

function polarToCartesian(cx, cy, radius, angle){

	const rad = (angle - 90) * Math.PI / 180;

	return {

		x: cx + radius * Math.cos(rad),
		y: cy + radius * Math.sin(rad)

	};

}

function createDonutSlice(

	outerRadius,
	innerRadius,
	startAngle,
	endAngle

){

	const cx = outerRadius;
	const cy = outerRadius;

	const start = polarToCartesian(
		cx,
		cy,
		outerRadius,
		endAngle
	);

	const end = polarToCartesian(
		cx,
		cy,
		outerRadius,
		startAngle
	);

	const innerStart = polarToCartesian(
		cx,
		cy,
		innerRadius,
		startAngle
	);

	const innerEnd = polarToCartesian(
		cx,
		cy,
		innerRadius,
		endAngle
	);

	const largeArc =
		endAngle - startAngle <= 180
			? 0
			: 1;

	return `

		M ${start.x} ${start.y}

		A ${outerRadius} ${outerRadius}
		0
		${largeArc}
		0
		${end.x} ${end.y}

		L ${innerStart.x} ${innerStart.y}

		A ${innerRadius} ${innerRadius}
		0
		${largeArc}
		1
		${innerEnd.x} ${innerEnd.y}

		Z

	`;

}

function renderPieSection({

	title,
	data,
	colors,
	centerContent = "",
	legendFormatter = item => item.count,

	// Einstellungen für die Farbverwaltung
	legendClass = "type-legend",
	colorStorageKey = "pieColors",
	colorKey = item => item.label ?? item.type,
	defaultColor = item => colors(item)

}) {

	const section =
		document.createElement("section");

	section.className =
		"dashboard-section";

	section.innerHTML = `

		<div class="pie-section-header">

			<h2>${title}</h2>

			<button
				type="button"
				class="pie-reset-colors">

				Farben zurücksetzen

			</button>

		</div>

		<div class="type-chart">

			<div class="type-pie">

				<svg
					class="pie-svg"
				</svg>

				<div class="type-pie-center">

					<div class="pie-title">
						${centerContent}
					</div>

					<div class="pie-value"></div>

					<div class="pie-percent"></div>

				</div>

			</div>

			<div class="${legendClass}"></div>

		</div>

	`;

	const pie =
		section.querySelector(".type-pie");

	const svg =
		section.querySelector(".pie-svg");

	svg.setAttribute(
		"viewBox",
		"0 0 180 180"
	);

	svg.setAttribute(
		"width",
		"180"
	);

	svg.setAttribute(
		"height",
		"180"
	);

	const legend =
		section.querySelector(
			`.${legendClass}`
		);

	const legendRows = [];
	
	// =====================================================
	// Farbverwaltung
	// =====================================================

	let storedColors = {};

	try {

		storedColors =
			JSON.parse(
				localStorage.getItem(
					colorStorageKey
				)
			) || {};

	} catch {

		storedColors = {};

	}


	function getItemColor(item) {

		const key =
			String(colorKey(item));

		return (
			storedColors[key]
			||
			defaultColor(item)
		);

	}


	function saveColors() {

		localStorage.setItem(
			colorStorageKey,
			JSON.stringify(storedColors)
		);

	}
	
	const resetColorsButton =
	section.querySelector(
		".pie-reset-colors"
	);


	resetColorsButton.addEventListener(
		"click",
		() => {

			storedColors = {};

			localStorage.removeItem(
				colorStorageKey
			);

			rerenderCollectionDashboard();

		}
	);

	const centerTitle =
		section.querySelector(
			".pie-title"
		);

	const centerValue =
		section.querySelector(
			".pie-value"
		);

	const centerPercent =
		section.querySelector(
			".pie-percent"
		);

	function highlightLegend(item) {

		legendRows.forEach(row => {

			row.classList.remove(
				"active"
			);

		});

		const index =
			data.indexOf(item);

		if (index >= 0) {

			legendRows[index]
				.classList.add(
					"active"
				);

		}

	}

	function clearLegend() {

		legendRows.forEach(row => {

			row.classList.remove(
				"active"
			);

		});

	}

	function showCenter(item) {

		centerTitle.textContent =
			item.label ?? item.type;

		centerValue.textContent =
			`${item.count} ${
				item.count === 1
					? "Pokémon"
					: "Pokémon"
			}`;

		centerPercent.textContent =
			`${item.percent}%`;

	}


	function resetCenter() {

		centerTitle.innerHTML =
			centerContent;

		centerValue.textContent =
			"";

		centerPercent.textContent =
			"";

	}


	function getSliceAtAngle(percent) {

		let current = 0;

		for (const item of data) {

			const next =
				current + item.percent;

			if (
				percent >= current &&
				percent < next
			) {

				return item;

			}

			current = next;

		}

		return null;

	}


	const outerRadius = 90;
	const innerRadius = 48;

	let currentAngle = 0;

	const slices = [];


	data.forEach(item => {

		const startAngle =
			currentAngle;

		const ratio =
			item.ratio ??
			(item.percent / 100);

		const endAngle =
			currentAngle +
			ratio * 360;

		const middleAngle =
			(startAngle + endAngle) / 2;


		const path =
			document.createElementNS(
				"http://www.w3.org/2000/svg",
				"path"
			);

		path.dataset.angle =
			middleAngle;

		path.setAttribute(
			"d",
			createDonutSlice(

				outerRadius,
				innerRadius,
				startAngle,
				endAngle

			)
		);

		path.setAttribute(
			"fill",
			getItemColor(item)
		);

		path.dataset.index =
			data.indexOf(item);

		svg.appendChild(path);

		slices.push(path);

		currentAngle =
			endAngle;


		// =============================================
		// Legenden-Eintrag
		// =============================================

		const row =
			document.createElement("div");

		row.className =
			"type-legend-row";

		row.dataset.index =
			data.indexOf(item);


		row.innerHTML = `

			<input
				type="color"
				class="pie-color-input"
				value="${getItemColor(item)}"
				title="Farbe ändern">

			<span>
				${item.label ?? item.type}
			</span>

			<span>
				${legendFormatter(item)}
			</span>

		`;

		const colorInput =
			row.querySelector(
				".pie-color-input"
			);


		colorInput.addEventListener(
			"input",
			(event) => {

				const key =
					String(colorKey(item));

				const color =
					event.target.value;


				storedColors[key] =
					color;

				saveColors();


				// Kreisdiagramm aktualisieren

				path.setAttribute(
					"fill",
					color
				);
				
				colorInput.style.background = color;

			}
		);

		row.addEventListener(
			"mouseenter",
			() => {

				showCenter(item);

				highlightLegend(item);

			}
		);


		row.addEventListener(
			"mouseleave",
			() => {

				resetCenter();

				clearLegend();

			}
		);

		legend.appendChild(row);

		legendRows.push(row);

	});


	let hoverTimer = null;

	let activeIndex = -1;

	slices.forEach(
		(slice, index) => {

			const row =
				legend.children[index];

			const item =
				data[index];


			function activate() {

				slices.forEach(
					(otherSlice, otherIndex) => {

						if (otherIndex === index) {
							return;
						}

						otherSlice.classList.remove(
							"active"
						);

						otherSlice.style.transform =
							"";

						legendRows[otherIndex]
							?.classList.remove(
								"active"
							);

					}
				);

				activeIndex =
					index;


				showCenter(item);


				row.classList.add(
					"active"
				);

				slice.classList.add(
					"active"
				);


				const angle =
					Number(
						slice.dataset.angle
					);

				const rad =
					(angle - 90) *
					Math.PI / 180;

				const distance =
					6;

				const x =
					Math.cos(rad) *
					distance;

				const y =
					Math.sin(rad) *
					distance;


				slice.style.transform =
					`translate(${x}px, ${y}px)`;

			}


			function deactivate() {

				if (activeIndex !== index) {
					return;
				}

				activeIndex =
					-1;

				slice.classList.remove(
					"active"
				);

				slice.style.transform =
					"";

				row.classList.remove(
					"active"
				);

				resetCenter();

			}

			slice.addEventListener(
				"mouseenter",
				() => {

					clearTimeout(
						hoverTimer
					);

					activate();

				}
			);


			slice.addEventListener(
				"mouseleave",
				() => {

					hoverTimer =
						setTimeout(
							() => {

								deactivate();

							},
							80
						);

				}
			);


			row.addEventListener(
				"mouseenter",
				() => {

					clearTimeout(
						hoverTimer
					);

					activate();

				}
			);


			row.addEventListener(
				"mouseleave",
				() => {

					hoverTimer =
						setTimeout(
							() => {

								deactivate();

							},
							80
						);

				}
			);

		}
	);


	pie.addEventListener(
		"mouseleave",
		() => {

			activeIndex = -1;

			resetCenter();

			slices.forEach(slice => {

				slice.classList.remove(
					"active"
				);

				slice.style.transform =
					"";

			});

			legendRows.forEach(row => {

				row.classList.remove(
					"active"
				);

			});

		}
	);


	return section;

}

function getCustom() {
    return JSON.parse(localStorage.getItem("customPokemon")) || [];
}

function renderPokedexSection(stats) {

    const section = document.createElement("section");

    section.className = "dashboard-section";

    section.innerHTML = `
        <h2>Pokédexe</h2>

			<div class="pokedex-controls">

				<button
					class="pokedex-btn ${pokedexMode === "new" ? "active" : ""}"
					id="toggleDexMode">

					${pokedexMode === "new"
						? "Neue Pokémon"
						: "Alle Pokémon"}

				</button>
				
				<select id="pokedexViewSelect">
					<option value="generations">Generationen-Dex</option>
					<option value="games">Regionaler Pokedex</option>
					<option value="living">Living-Dex</option>
					<option value="forms">Living-Form-Dex</option>
					<option value="shinyForms">Shiny Living-Form-Dex</option>
					<option value="origin">Origin-Dex</option>
					<option value="icognito">Icognito-Dex</option>
				</select>

				<button
					class="pokedex-btn ${shinyMode !== "all" ? "active" : ""}"
					id="toggleShinyMode">

					${
						shinyMode === "all"
							? "Alle"
							: shinyMode === "normal"
								? "Normal"
								: "Schillernd"
					}

				</button>

			</div>

        <div class="pokedex-list"></div>
    `;
	
	const dexButton = section.querySelector("#toggleDexMode");
	const shinyButton = section.querySelector("#toggleShinyMode");
	const viewSelect = section.querySelector("#pokedexViewSelect");
		
	dexButton.addEventListener("click", () => {

		pokedexMode =
			pokedexMode === "new"
				? "complete"
				: "new";

		rerenderCollectionDashboard();

	});;
	
	shinyButton.addEventListener("click", () => {

		if (shinyMode === "all") {

			shinyMode = "normal";

		} else if (shinyMode === "normal") {

			shinyMode = "shiny";

		} else {

			shinyMode = "all";

		}

		 rerenderCollectionDashboard();

	});
	
	viewSelect.value = progressView;
	
	viewSelect.addEventListener("change", () => {

		progressView = viewSelect.value;

		localStorage.setItem(
			"pokedexProgressView",
			progressView
		);

		 rerenderCollectionDashboard();

	});

	const list = section.querySelector(".pokedex-list");


	// =====================================================
	// Living-Dex
	// =====================================================

	if (progressView === "living") {

		const livingStats =
			stats.livingDex;


		// =============================================
		// Living-Dex Fortschritt
		// =============================================

		const progressRow =
			document.createElement("div");

		progressRow.className =
			"pokedex-row";

		progressRow.innerHTML = `

			<div class="generation-header">

				<span class="generation-title">
					Living-Dex
				</span>

				<span class="generation-value">
					${livingStats.owned} / ${livingStats.total}
				</span>

				<span class="generation-percent">
					${livingStats.percent} %
				</span>

			</div>

			<div class="progress-bar">

				<div
					class="progress-fill"
					style="width:${livingStats.percent}%">
				</div>

			</div>

		`;

		list.appendChild(progressRow);


		// =============================================
		// Fehlende Pokémon
		// =============================================

		const missingLivingPokemon =
			livingStats.entries
				? livingStats.entries
					.filter(entry => !entry.owned)
					.slice(0, 3)
				: [];


		const missingGrid =
			document.createElement("div");

		missingGrid.className =
			"missing-pokemon-grid";


		missingLivingPokemon.forEach(entry => {

			const card =
				document.createElement("div");

			card.className =
				"highlight-card missing-pokemon-card";


			const spriteId =
				entry.spriteId ??
				entry.pokemonNumber;

			const spriteBase =
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

			const normalSprite =
				`${spriteBase}${spriteId}.png`;


			card.innerHTML = `

				<div class="highlight-title">
					Fehlendes Pokémon
				</div>

				<div class="highlight-content">

					<div>

						<div class="highlight-value">
							${entry.displayName}
						</div>

					</div>

					<img
						class="highlight-sprite"
						src="${normalSprite}"
						alt="${entry.displayName}">

				</div>

			`;


			missingGrid.appendChild(card);

		});


		list.appendChild(missingGrid);


	// =====================================================
	// Living-Form-Dex / Shiny Living-Form-Dex
	// =====================================================

	} else if (
		progressView === "forms" ||
		progressView === "shinyForms"
	) {

		const formStats =
			progressView === "shinyForms"
				? stats.shinyLivingFormDex
				: stats.forms;


		// =============================================
		// Form-Dex Fortschritt
		// =============================================

		const progressRow =
			document.createElement("div");

		progressRow.className =
			"pokedex-row";

		progressRow.innerHTML = `

			<div class="generation-header">

				<span class="generation-title">
					${
						progressView === "shinyForms"
							? "Shiny Living-Form-Dex"
							: "Living-Form-Dex"
					}
				</span>

				<span class="generation-value">
					${formStats.owned} / ${formStats.total}
				</span>

				<span class="generation-percent">
					${formStats.percent} %
				</span>

			</div>

			<div class="progress-bar">

				<div
					class="progress-fill"
					style="width:${formStats.percent}%">
				</div>

			</div>

		`;

		list.appendChild(progressRow);


		// =============================================
		// Fehlende Form-Dex-Einträge
		// =============================================

		const missingForms =
			formStats.entries
				.filter(entry => !entry.owned)
				.slice(0, 3);


		const missingGrid =
			document.createElement("div");

		missingGrid.className =
			"missing-pokemon-grid";


		missingForms.forEach(entry => {

			const card =
				document.createElement("div");

			card.className =
				"highlight-card missing-pokemon-card";


			const spriteId =
				entry.spriteId ??
				entry.pokemonNumber;

			const spriteBase =
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

			const normalSprite =
				`${spriteBase}${spriteId}.png`;

			const shinySprite =
				`${spriteBase}shiny/${spriteId}.png`;

			const femaleSprite =
				`${spriteBase}female/${spriteId}.png`;

			const shinyFemaleSprite =
				`${spriteBase}shiny/female/${spriteId}.png`;


			let spriteUrl;

			if (entry.shiny) {

				spriteUrl =
					entry.gender === "Weiblich"
						? shinyFemaleSprite
						: shinySprite;

			} else {

				spriteUrl =
					entry.gender === "Weiblich"
						? femaleSprite
						: normalSprite;

			}


			card.innerHTML = `

				<div class="highlight-title">
					Fehlendes Pokémon
				</div>

				<div class="highlight-content">

					<div>

						<div class="highlight-value">
							${entry.displayName}
						</div>

					</div>

					<img
						class="highlight-sprite"
						src="${spriteUrl}"
						alt="${entry.displayName}"
						data-fallback="${normalSprite}">

				</div>

			`;


			const img =
				card.querySelector(
					".highlight-sprite"
				);


			if (entry.gender === "Weiblich") {

				img.addEventListener(
					"error",
					() => {

						img.src =
							normalSprite;

					},
					{ once: true }
				);

			}


			missingGrid.appendChild(card);

		});


		list.appendChild(missingGrid);


	// =====================================================
	// Origin-Dex
	// =====================================================

	} else if (progressView === "origin") {

		const originStats =
			stats.originDex;


		// =============================================
		// Origin-Dex Fortschritt
		// =============================================

		/*const progressRow =
			document.createElement("div");

		progressRow.className =
			"pokedex-row";

		progressRow.innerHTML = `

			<div class="generation-header">

				<span class="generation-title">
					Origin-Dex
				</span>

				<span class="generation-value">
					${originStats.owned} / ${originStats.total}
				</span>

				<span class="generation-percent">
					${originStats.percent} %
				</span>

			</div>

			<div class="progress-bar">

				<div
					class="progress-fill"
					style="width:${originStats.percent}%">
				</div>

			</div>

		`;

		list.appendChild(progressRow);*/


	// =====================================================
	// Icognito-Dex
	// =====================================================

	} else if (progressView === "icognito") {

		const icognitoStats =
			stats.icognitoDex;


		// =============================================
		// Icognito-Dex Fortschritt
		// =============================================

		const progressRow =
			document.createElement("div");

		progressRow.className =
			"pokedex-row";

		progressRow.innerHTML = `

			<div class="generation-header">

				<span class="generation-title">
					Icognito-Dex
				</span>

				<span class="generation-value">
					${icognitoStats.owned} /
					${icognitoStats.total}
				</span>

				<span class="generation-percent">
					${icognitoStats.percent} %
				</span>

			</div>

			<div class="progress-bar">

				<div
					class="progress-fill"
					style="width:${icognitoStats.percent}%">
				</div>

			</div>

		`;

		list.appendChild(progressRow);


		// =============================================
		// Fehlende Icognito-Formen
		// =============================================

		const missingIcognito =
			icognitoStats.entries
				.filter(entry => !entry.owned)
				.slice(0, 3);


		const missingGrid =
			document.createElement("div");

		missingGrid.className =
			"missing-pokemon-grid";


		missingIcognito.forEach(entry => {

			const card =
				document.createElement("div");

			card.className =
				"highlight-card missing-pokemon-card";


			const spriteId =
				entry.spriteId ??
				entry.formId;

			const spriteBase =
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

			const normalSprite =
				`${spriteBase}${spriteId}.png`;


			card.innerHTML = `

				<div class="highlight-title">
					Fehlendes Icognito
				</div>

				<div class="highlight-content">

					<div>

						<div class="highlight-value">
							${entry.displayName}
						</div>

					</div>

					<img
						class="highlight-sprite"
						src="${normalSprite}"
						alt="${entry.displayName}">

				</div>

			`;


			missingGrid.appendChild(card);

		});


		list.appendChild(missingGrid);


	// =====================================================
	// Regionaler Pokédex
	// =====================================================

	} else if (progressView === "games") {

		// =============================================
		// Spiele
		// =============================================

		Object.entries(stats.pokedexes).forEach(
			([regionKey, region]) => {

				const regionBlock =
					document.createElement("div");

				regionBlock.className =
					"pokedex-region";

				regionBlock.innerHTML = `

					<div class="region-header">

						<span class="region-toggle">
							▼
						</span>

						<h3>
							${region.name}
						</h3>

					</div>

					<div class="region-content"></div>

				`;


				const regionContent =
					regionBlock.querySelector(
						".region-content"
					);


				Object.entries(region.games).forEach(
					([gameKey, game]) => {

						const row =
							document.createElement("div");

						row.className =
							"pokedex-row";

						row.innerHTML = `

							<div class="generation-header">

								<span class="generation-title">
									${game.name}
								</span>

								<span class="generation-value">
									${game.owned} / ${game.total}
								</span>

								<span class="generation-percent">
									${game.percent} %
								</span>

							</div>

							<div class="progress-bar">

								<div
									class="progress-fill"
									style="width:${game.percent}%">
								</div>

							</div>

						`;

						regionContent.appendChild(row);

					}
				);


				const header =
					regionBlock.querySelector(
						".region-header"
					);

				const content =
					regionBlock.querySelector(
						".region-content"
					);

				const arrow =
					regionBlock.querySelector(
						".region-toggle"
					);


				header.addEventListener("click", () => {

					const collapsed =
						content.classList.toggle(
							"collapsed"
						);

					arrow.textContent =
						collapsed
							? "▶"
							: "▼";

				});


				list.appendChild(regionBlock);

			}
		);


	// =====================================================
	// Generationen-Dex
	// =====================================================

	} else {

		Object.values(
			stats.generationProgress
		).forEach(gen => {

			const row =
				document.createElement("div");

			row.className =
				"pokedex-row";

			row.innerHTML = `

				<div class="generation-header">

					<span class="generation-title">
						${gen.name}
					</span>

					<span class="generation-value">
						${gen.owned} / ${gen.total}
					</span>

					<span class="generation-percent">
						${gen.percent} %
					</span>

				</div>

				<div class="progress-bar">

					<div
						class="progress-fill"
						style="width:${gen.percent}%">
					</div>

				</div>

			`;

			list.appendChild(row);

		});

	}

    return section;

}

function renderTypeSection(stats){

	return renderPieSection({

		title:
			"Typverteilung",

		data:
			stats.types.distribution,

		colors:
			item => TYPE_COLORS[item.type],

		centerContent:
			"Typen",

		legendFormatter:
			item => item.count,

		legendClass:
			"type-legend",

		colorStorageKey:
			"dashboardTypeColors",

		colorKey:
			item => item.type,

		defaultColor:
			item => TYPE_COLORS[item.type]

	});

}
function renderRibbonSection(stats) {

    const section = document.createElement("section");

    section.className = "dashboard-section";

    section.innerHTML = `

        <h2>Bänder</h2>

        <div class="forms-card">

            <div class="forms-header">

                <span>
                    Gesammelte Bänder
                </span>

                <span>
                    ${stats.ribbons.owned} / ${stats.ribbons.total}
                </span>

            </div>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width:${stats.ribbons.percent}%">
                </div>

            </div>

            <div class="forms-percent">

                ${stats.ribbons.percent} %

            </div>

        </div>

    `;

    return section;

}

function renderHighlightsSection(stats) {

    const section = document.createElement("section");

    section.className = "dashboard-section";

    const oldest = stats.highlights.oldestPokemon;
    const location = stats.locations.mostVisited;

	const sprite = oldest
    ? getSpriteUrl(oldest)
    : null;

    section.innerHTML = `

        <h2>Highlights</h2>

        <div class="highlights-grid">

            <div class="highlight-card">

				<div class="highlight-title">
					Ältestes Pokémon
				</div>

				${
					oldest
					? `
						<div class="highlight-content">

							<div>

								<div class="highlight-value">
									${oldest.name}
								</div>

								<div class="highlight-subtitle">
									${formatDate(oldest.datum)}
								</div>

							</div>

							<img
								class="highlight-sprite"
								src="${sprite.normal}"
								alt="${oldest.name}">

						</div>
					`
					: "—"
				}

			</div>

            <div class="highlight-card">

                <div class="highlight-title">
                    Meistbesuchter Ort
                </div>

                <div class="highlight-value">
                    ${location ? location.name : "—"}
                </div>

                <div class="highlight-subtitle">
                    ${location ? `${location.count} Pokémon` : ""}
                </div>

            </div>

        </div>

    `;
	
	if (sprite?.femaleRequested) {

		const img = section.querySelector(".highlight-sprite");

		const test = new Image();

		test.onload = () => {
			img.src = sprite.female;
		};

		test.onerror = () => {
			img.src = sprite.normal;
		};

		test.src = sprite.female;

	}

    return section;

}

function renderCaptureStatsSection(stats) {

	const section =
		document.createElement("section");

	section.className =
		"dashboard-section";

	section.innerHTML = `

		<h2>Fangstatistiken</h2>

		<div class="highlights-grid">

			<div class="highlight-card">

				<div class="highlight-title">
					Durchschnittliches Fanglevel
				</div>

				<div class="highlight-value">
					${
						stats.captureStats.averageCatchLevel
							? stats.captureStats.averageCatchLevel
							: "—"
					}
				</div>

			</div>

		</div>

	`;

	return section;

}

const POKEBALL_SPRITE_BASE =
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/";

	const dashboardPokeballs = [

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

		// Spezial
		{ value: "Jubelball", name: "Jubelball", sprite: "cherish-ball.png" },
		{ value: "Rätselball", name: "Rätselball", sprite: "lastrange-ball.png" }

	];

function renderTopBallsSection(stats) {

	const section =
		document.createElement("section");

	section.className =
		"dashboard-section ball-stats-section";


	const topBalls =
		stats.captureStats.topBalls;


	section.innerHTML = `

		<h2>Top 10 verwendete Bälle</h2>

		<div class="ball-ranking"></div>

	`;


	const ranking =
		section.querySelector(
			".ball-ranking"
		);


	topBalls.forEach(
		(ball, index) => {

			const row =
				document.createElement("div");

			row.className =
				"ball-ranking-row";


			/*
			 * Der Dateiname des Ball-Sprites
			 * entspricht dem Ballnamen.
			 *
			 * Beispiel:
			 * Pokéball → poke-ball.png
			 */

			const ballData =
				dashboardPokeballs.find(
					entry => entry.value === ball.ball
				);

			const spriteUrl =
				ballData
					? `${POKEBALL_SPRITE_BASE}${ballData.sprite}`
					: "";


			row.innerHTML = `

				<span class="ball-ranking-position">
					${index + 1}.
				</span>

				<div class="ball-ranking-sprite">

					${
						spriteUrl
							? `
								<img
									src="${spriteUrl}"
									alt="${ballData.name}"
									loading="lazy">
							`
							: ""
					}

				</div>

				<span class="ball-ranking-name">
					${ballData?.name ?? ball.ball}
				</span>

				<span class="ball-ranking-count">
					${ball.count}
				</span>

			`;


			ranking.appendChild(row);

		}
	);


	return section;

}

function renderNaturePersonalitySection(stats) {

	const section =
		document.createElement("section");

	section.className =
		"dashboard-section nature-personality-section";


	const natures =
		stats.captureStats.topNatures || [];

	const personalities =
		stats.captureStats.topPersonalities || [];


	const createRanking =
		(items) => {

			if (!items.length) {

				return `
					<div class="ranking-empty">
						Keine Daten vorhanden
					</div>
				`;

			}


			return items
				.map(
					(item, index) => `

						<div class="nature-personality-row">

							<span class="nature-personality-rank">
								${index + 1}.
							</span>

							<span class="nature-personality-name">
								${item.name}
							</span>

							<span class="nature-personality-count">
								${item.count}
							</span>

						</div>

					`
				)
				.join("");

		};


	section.innerHTML = `

		<h2>Wesen &amp; Persönlichkeiten</h2>


		<div class="nature-personality-grid">


			<!-- ============================= -->
			<!-- Top 10 Wesen                   -->
			<!-- ============================= -->

			<div class="ranking-card">

				<div class="ranking-card-title">
					Top 10 Wesen
				</div>

				<div class="nature-personality-list">

					${createRanking(natures)}

				</div>

			</div>


			<!-- ============================= -->
			<!-- Top 10 Persönlichkeiten       -->
			<!-- ============================= -->

			<div class="ranking-card">

				<div class="ranking-card-title">
					Top 10 Persönlichkeiten
				</div>

				<div class="nature-personality-list">

					${createRanking(personalities)}

				</div>

			</div>


		</div>

	`;


	return section;

}

function formatDate(dateString) {

    if (!dateString) return "—";

    const date = new Date(dateString);

    return date.toLocaleDateString("de-DE");

}

function getSpriteUrl(pokemon) {

    const nummer = pokemon.spriteId ?? pokemon.nummer;

    const shiny = pokemon.shiny === true;
    const female = pokemon.geschlecht === "Weiblich";

    const base =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    const normalUrl =
        shiny
            ? `${base}shiny/${nummer}.png`
            : `${base}${nummer}.png`;

    const femaleUrl =
        shiny
            ? `${base}shiny/female/${nummer}.png`
            : `${base}female/${nummer}.png`;

    return {
        normal: normalUrl,
        female: femaleUrl,
        femaleRequested: female
    };

}

function getActivityColors() {

	const defaults = {

		all:
			"#4CAF50",

		shiny:
			"#F5C542"

	};


	return {

		all:
			localStorage.getItem(
				"activityColorAll"
			)
			|| defaults.all,

		shiny:
			localStorage.getItem(
				"activityColorShiny"
			)
			|| defaults.shiny

	};

}

function renderActivitySection(stats) {
	
	const activityColors = getActivityColors();

	const section =
		document.createElement("section");

	section.className =
		"dashboard-section activity-section";


	section.innerHTML = `

		<h2>Aktivität</h2>


		<div class="activity-legend">


			<label class="activity-legend-item">

				<input
					type="color"
					class="activity-color-input"
					id="activityColorAll"
					value="${activityColors.all}">

				<span>
					Alle Pokémon
				</span>

			</label>


			<label class="activity-legend-item">

				<input
					type="color"
					class="activity-color-input"
					id="activityColorShiny"
					value="${activityColors.shiny}">

				<span>
					Schillernde Pokémon
				</span>

			</label>


		</div>


		<div class="activity-chart"></div>

	`;


	const chart =
		section.querySelector(
			".activity-chart"
		);
		
	const allColorInput =
		section.querySelector(
			"#activityColorAll"
		);

	const shinyColorInput =
		section.querySelector(
			"#activityColorShiny"
		);


	allColorInput.addEventListener(
		"input",
		() => {

			localStorage.setItem(
				"activityColorAll",
				allColorInput.value
			);

			chart
				.querySelectorAll(
					".activity-bar-all"
				)
				.forEach(bar => {

					bar.style.background =
						allColorInput.value;

				});

		}
	);


	shinyColorInput.addEventListener(
		"input",
		() => {

			localStorage.setItem(
				"activityColorShiny",
				shinyColorInput.value
			);

			chart
				.querySelectorAll(
					".activity-bar-shiny"
				)
				.forEach(bar => {

					bar.style.background =
						shinyColorInput.value;

				});

		}
	);

	const months =
		Object.entries(stats.activity);


	const shinyActivity =
		stats.shinyActivity || {};


	const pageSize =
		12;


	const maxPage =
		Math.max(
			0,
			months.length - pageSize
		);


	if (activityPage === -1) {

		activityPage =
			maxPage;

	}


	activityPage =
		Math.min(
			activityPage,
			maxPage
		);

	activityPage =
		Math.max(
			activityPage,
			0
		);


	const visibleMonths =
		months.slice(
			activityPage,
			activityPage + pageSize
		);


	// =================================================
	// Gemeinsame Skalierung
	// =================================================

	const max =
		Math.max(

			...visibleMonths.map(
				([month, count]) =>
					Math.max(
						count,
						shinyActivity[month] || 0
					)
			),

			1

		);


	// =================================================
	// Navigation
	// =================================================

	const controls =
		document.createElement("div");

	controls.className =
		"activity-controls";


	controls.innerHTML = `

		<button
			id="activityPrevYear"
			${activityPage === 0 ? "disabled" : ""}>

			◀◀

		</button>


		<button
			id="activityPrev"
			${activityPage === 0 ? "disabled" : ""}>

			◀

		</button>


		<span class="activity-range">

			${formatActivityRange(
				visibleMonths
			)}

		</span>


		<button
			id="activityNext"
			${activityPage === maxPage ? "disabled" : ""}>

			▶

		</button>


		<button
			id="activityNextYear"
			${activityPage === maxPage ? "disabled" : ""}>

			▶▶

		</button>

	`;


	section.appendChild(
		controls
	);


	controls
		.querySelector(
			"#activityPrev"
		)
		.addEventListener(
			"click",
			() => {

				if (activityPage > 0) {

					activityPage--;

					renderCollectionDashboard();

				}

			}
		);


	controls
		.querySelector(
			"#activityPrevYear"
		)
		.addEventListener(
			"click",
			() => {

				if (activityPage > 0) {

					activityPage =
						Math.max(
							0,
							activityPage - 12
						);

					renderCollectionDashboard();

				}

			}
		);


	controls
		.querySelector(
			"#activityNext"
		)
		.addEventListener(
			"click",
			() => {

				if (
					activityPage <
					maxPage
				) {

					activityPage++;

					renderCollectionDashboard();

				}

			}
		);


	controls
		.querySelector(
			"#activityNextYear"
		)
		.addEventListener(
			"click",
			() => {

				if (
					activityPage <
					maxPage
				) {

					activityPage =
						Math.min(
							maxPage,
							activityPage + 12
						);

					renderCollectionDashboard();

				}

			}
		);


	// =================================================
	// Monatsbalken
	// =================================================

	visibleMonths.forEach(
		([month, count]) => {

			const shinyCount =
				shinyActivity[month] || 0;


			const column =
				document.createElement("div");

			column.className =
				"activity-column";


			column.innerHTML = `

				<div class="activity-bars">

					<div
						class="activity-bar activity-bar-all"
						style="
							height:${(count / max) * 60}px;
							background:${activityColors.all};
						">

						<span class="activity-bar-value">
							${count}
						</span>

					</div>


					<div
						class="activity-bar activity-bar-shiny"
						style="
							height:${(shinyCount / max) * 60}px;
							background:${activityColors.shiny};
						">

						<span class="activity-bar-value">
							${shinyCount}
						</span>

					</div>

				</div>


				<div class="activity-month">

					${formatActivityMonth(month)}

				</div>

			`;


			chart.appendChild(
				column
			);

		}
	);


	return section;

}

function formatActivityMonth(month) {

    const [year, monthNumber] = month.split("-");

    return `${monthNumber}/${year}`;

}

function formatActivityRange(months){

    if(months.length === 0) return "";

    const first = new Date(months[0][0] + "-01");
    const last  = new Date(months[months.length - 1][0] + "-01");

    const formatter = new Intl.DateTimeFormat("de-DE",{
        month:"long",
        year:"numeric"
    });

    return `${formatter.format(first)} – ${formatter.format(last)}`;

}

function renderGenderSection(stats){

	return renderPieSection({

		title:
			"Geschlechter",

		data:
			stats.genders.distribution,

		colors:
			item => item.color,

		centerContent:
			"Geschlecht",

		legendFormatter:
			item => item.count,

		legendClass:
			"gender-legend",

		colorStorageKey:
			"dashboardGenderColors",

		colorKey:
			item => item.label,

		defaultColor:
			item => item.color

	});

}