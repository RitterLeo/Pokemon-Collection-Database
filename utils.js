
// ======================================================
// Sprite URL erzeugen
// ======================================================

function getSprite(pokemon, formName = "Standard") {

    // Form holen
    const form =
        pokemon.forms?.[formName] ??
        pokemon.forms?.Standard;

    // Sonderformen nutzen eigene spriteId,
    // ansonsten normale Pokédex-Nummer
    const nummer =
        form?.spriteId ??
        pokemon.nummer;

    const shiny =
        document.getElementById("shiny").value === "Ja";

    const female =
        document.getElementById("geschlecht").value === "Weiblich";

    let base =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    // shiny + female
    if (shiny && female) {

        base += "shiny/female/";

    // nur shiny
    } else if (shiny) {

        base += "shiny/";

    // nur female
    } else if (female) {

        base += "female/";
    }

    return `${base}${nummer}.png`;
}

// ======================================================
// Sprite mit Fallback setzen
// ======================================================

function setSpriteWithFallback(
    pokemon,
    formName = "Standard"
) {

    if (!pokemon) return;

    const form =
        pokemon.forms?.[formName] ??
        pokemon.forms?.Standard;

    const nummer =
        form?.spriteId ??
        pokemon.nummer;

    const img = DOM.sprite;

    img.onerror = function () {

        // Fallback:
        // female sprites existieren oft nicht
        // → normale Variante laden

        const shiny =
            document.getElementById("shiny").value === "Ja";

        let fallbackBase =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

        if (shiny) {
            fallbackBase += "shiny/";
        }

        img.src = `${fallbackBase}${nummer}.png`;

        // Endlosschleife verhindern
        img.onerror = null;
    };

    img.src = getSprite(pokemon, formName);
}

// ======================================================
// Sprite aktualisieren
// ======================================================

function updateCurrentPokemonSprite() {

    const pokemon =
        pokemonListe[state.pokemonIndex];

    if (!pokemon) return;

    const formName =
        state.formName || "Standard";

    setSpriteWithFallback(
        pokemon,
        formName
    );
}

// ======================================================
// Event Listener
// ======================================================

document
    .getElementById("shiny")
    .addEventListener("change", updateCurrentPokemonSprite);

document
    .getElementById("geschlecht")
    .addEventListener("change", updateCurrentPokemonSprite);