const typeMap = {
    Feuer: "fire",
    Wasser: "water",
    Pflanze: "grass",
    Elektro: "electric",
    Normal: "normal",
    Flug: "flying",
    Käfer: "bug",
    Gift: "poison",
    Gestein: "rock",
    Boden: "ground",
    Kampf: "fighting",
    Eis: "ice",
    Psycho: "psychic",
    Geist: "ghost",
    Drache: "dragon",
    Unlicht: "dark",
    Stahl: "steel",
    Fee: "fairy"
};

const attackCategoryMap = {

    physisch: "⚔",
    spezial: "✦",
    status: "●"

};

const ATTACK_MAP = {};

ATTACKS.forEach(attack => {

    ATTACK_MAP[attack.name] = attack;

});

function getSpriteData(p){

    const shiny = p.shiny === true;
    const female = p.geschlecht === "Weiblich";

    const spriteId = p.spriteId ?? p.nummer;

    const base =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/";

    const paths = [];

    if(shiny && female){
        paths.push("pokemon/shiny/female/");
    }

    if(shiny){
        paths.push("pokemon/shiny/");
    }

    if(female){
        paths.push("pokemon/female/");
    }

    paths.push("pokemon/");

    return {

        base,
        paths,
        spriteId

    };

}

function attachSpriteFallback(img, sprite){

    let pathIndex = 0;

    img.onerror = () => {

        pathIndex++;

        if(pathIndex < sprite.paths.length){

            img.src =
                sprite.base +
                sprite.paths[pathIndex] +
                sprite.spriteId +
                ".png";

        }else{

            img.src =
                sprite.base +
                "pokemon/" +
                sprite.spriteId +
                ".png";

            img.onerror = null;

        }

    };

}

/* =========================
   KARTE ERSTELLEN
========================= */
function createCard(p, preview = false) {

	const sprite = getSpriteData(p);

	const spriteUrl =
		sprite.base +
		sprite.paths[0] +
		sprite.spriteId +
		".png";

    const card = document.createElement("div");
	
    card.className = "card";

	card.dataset.id = p.id || "";
	card.dataset.nummer = p.nummer;
	card._pokemon = p;
	card._renderVersion = p.renderVersion || 1;

	card._dragInitialized = false;

    const typeText =
        (p.typ2 && p.typ2 !== "-")
            ? `${p.typ1} / ${p.typ2}`
            : p.typ1;

    const bandCount =
        Array.isArray(p.bands)
            ? p.bands.filter(b => b.active).length
            : 0;

    // =========================
    // BASIS HTML (immer gleich)
    // =========================
    card.innerHTML = `
        <div class="card-top">
            <img src="${spriteUrl}">
            <div>
                <div class="title">
                    #${String(p.nummer).padStart(4, "0")} ${p.name}
                </div>
                <div class="type">${typeText}</div>
            </div>
        </div>

        <div class="card-info">
            <span data-role="bands">${bandCount} Bänder</span>
            <span data-role="trainer">${p.ogTrainer || "—"}</span>
        </div>
    `;

    // =========================
    // BUTTONS NUR IM INDEX
    // =========================
	if (!preview) {

		card.innerHTML += `
			<div class="card-buttons">
				<button class="fav-btn" data-action="favorite" data-role="favorite">⭐</button>
				<button class="edit-btn" data-action="edit" data-role="edit">✏️</button>
				<button class="delete-btn" data-action="delete" data-role="delete">🗑</button>
			</div>
		`;
		
		const favBtn = card.querySelector(".fav-btn");

		if (favBtn) {

			favBtn.classList.toggle(
				"active",
				p.favorit === true
			);

		}

	}

    // =========================
    // IMAGE FALLBACK
    // =========================
    const img = card.querySelector("img");

	attachSpriteFallback(img, sprite);

    return card;
}

function updateFavorite(card, pokemon){

    const button =
        card.querySelector('[data-role="favorite"]');

    if(!button){
        return;
    }

    button.classList.toggle(
        "active",
        pokemon.favorit === true
    );

}

/* =========================
   VORSCHAU ERSTELLEN
========================= */
function createDetailCard(p, showCloseButton = true) {

	const sprite = getSpriteData(p);

	const spriteUrl =
		sprite.base +
		sprite.paths[0] +
		sprite.spriteId +
		".png";

    // =========================
    // Daten ausschließlich aus p
    // =========================

    const typ1 = p.typ1 || "";
    const typ2 = p.typ2 || "";

    const level      = p.level ?? 100;
    const wesen      = p.wesen ?? "-";
    const faehigkeit = p.faehigkeit ?? "-";
    const ball       = p.ball ?? "-";

    const hp    = p.stats?.hp ?? 0;
    const atk   = p.stats?.atk ?? 0;
    const def   = p.stats?.def ?? 0;
    const spatk = p.stats?.spatk ?? 0;
    const spdef = p.stats?.spdef ?? 0;
    const init  = p.stats?.init ?? 0;

    const selectedAttacks = p.attacken ?? [];

    let attacksHTML = "";

    selectedAttacks.forEach(name => {

        const atkData = ATTACK_MAP[name];

        if (!atkData) return;

        const icon = attackCategoryMap[atkData.category] || "•";

        const power =
            atkData.category === "status"
                ? "—"
                : atkData.power;

        attacksHTML += `
            <div class="preview-attack">

                <span class="preview-category">
                    ${icon}
                </span>

                <span class="preview-attack-name">
                    ${atkData.name}
                </span>

                <span class="preview-attack-power">
                    ${power}
                </span>

            </div>
        `;

    });

    const gender =
        p.geschlecht === "Weiblich"
            ? "♀"
            : p.geschlecht === "Männlich"
                ? "♂"
                : "";

    const card = document.createElement("div");
    card.className = `preview-card type-${typeMap[typ1]}`;

    card.innerHTML = `
		<div class="preview-header">

			<div class="preview-number">
				#${String(p.nummer).padStart(4, "0")}
			</div>

			<div class="preview-title">

				<div class="preview-name">
					${p.name}
					<span class="preview-gender">${gender}</span>
				</div>

				<div class="preview-level">
					Lv.${level}
				</div>

			</div>

			${showCloseButton ? `
				<button class="preview-close" type="button">
					✖
				</button>
			` : ""}

		</div>

		<div class="preview-sprite">
			<img class="preview-sprite-img" src="${spriteUrl}">
		</div>

		<div class="preview-types">
			${typ1 ? `<div class="type-slot type-${typeMap[typ1]}">${typ1}</div>` : ""}
			${typ2 && typ2 !== "-" ? `<div class="type-slot type-${typeMap[typ2]}">${typ2}</div>` : ""}
		</div>

		<div class="preview-stats">

			<div class="preview-stat-header">
				<span>KP</span>
				<span>Atk</span>
				<span>Def</span>
				<span>SpA</span>
				<span>SpD</span>
				<span>Init</span>
			</div>

			<div class="preview-stat-values">
				<span>${hp}</span>
				<span>${atk}</span>
				<span>${def}</span>
				<span>${spatk}</span>
				<span>${spdef}</span>
				<span>${init}</span>
			</div>

		</div>

		<div class="preview-attacks">

			${attacksHTML}

		</div>

		<div class="preview-footer">

			<div class="preview-row">
				<span class="preview-label">Wesen</span>
				<span class="preview-value">${wesen}</span>
			</div>

			<div class="preview-row">
				<span class="preview-label">Fähigkeit</span>
				<span class="preview-value">${faehigkeit}</span>
			</div>

			<div class="preview-row">
				<span class="preview-label">Ball</span>
				<span class="preview-value">${ball}</span>
			</div>

		</div>
	`;

    const img = card.querySelector(".preview-sprite-img");

	attachSpriteFallback(img, sprite);
	
	const closeBtn = card.querySelector(".preview-close");

	if (closeBtn) {

		closeBtn.addEventListener("click", (e) => {

			e.stopPropagation();

			document.dispatchEvent(
				new CustomEvent("detailClose")
			);

		});

	}

    return card;
}

	function updatePreview() {

		const preview = document.getElementById("previewCard");

		if (!preview) return;

		preview.innerHTML = "";

		const pokemon = {

			...editingPokemon,

			nummer: Number(DOM.nummer.value),
			name: DOM.name.options[DOM.name.selectedIndex].text,

			spriteId:
				pokemonListe[Number(DOM.nummer.value)]
				?.forms[DOM.form.value]?.spriteId
				??
				pokemonListe[Number(DOM.nummer.value)].nummer,

			typ1: DOM.typ1.textContent,
			typ2: DOM.typ2.textContent,

			shiny: isShiny,
			geschlecht: currentGender

		};

		preview.appendChild(createDetailCard(pokemon, false));

	}