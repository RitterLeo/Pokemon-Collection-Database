let sortModes = [
    "number-asc"
];
let draggedCard = null;

let dragStartX = 0;
let dragStartY = 0;

let dragOffsetX = 0;
let dragOffsetY = 0;

let isDragging = false;

let dragGhost = null;
let dragPlaceholder = null;

let lastInsertTarget = null;

// auto scroll
let autoScrollSpeed = 0;
let autoScrollFrame = null;

let lastPointerX = 0;
let lastPointerY = 0;


/* How to Sort */
const SORT_DEFINITIONS = {
	
	customOrder: {

		label: "Eigene Reihenfolge",

		compare: (a,b) =>

			Number(a.customOrder) -
			Number(b.customOrder)

	},

    number: {
        label: "Nummer",
        compare: (a,b) =>
            Number(a.nummer) - Number(b.nummer)
    },

    name: {
        label: "Name",
        compare: (a,b) =>
            a.name.localeCompare(b.name,"de")
    },

    generation: {
        label: "Generation",
        compare: (a,b) =>
            Number(a.generation) - Number(b.generation)
    },

    level: {
        label: "Level",
        compare: (a,b) =>
            Number(a.level) - Number(b.level)
    },

    date: {
        label: "Datum",
        compare: (a,b) =>
            new Date(a.datum||0) - new Date(b.datum||0)
    }

};

function comparePokemon(a,b, mode){

    const [field, direction] = mode.split("-");

    const definition = SORT_DEFINITIONS[field];

    if(!definition){
        return 0;
    }

    const value = definition.compare(a,b);

    return direction === "desc"
        ? -value
        : value;

}

function createSortOptions(select, includeNone = false){

    select.innerHTML = "";

    if(includeNone){

        select.add(
            new Option(
                "Keine",
                ""
            )
        );

    }

	Object.entries(SORT_DEFINITIONS).forEach(([key, definition]) => {

		if(key === "customOrder"){

			select.add(
				new Option(
					definition.label,
					"customOrder-asc"
				)
			);

			return;
		}

		select.add(
			new Option(
				`${definition.label} ↑`,
				`${key}-asc`
			)
		);

		select.add(
			new Option(
				`${definition.label} ↓`,
				`${key}-desc`
			)
		);

	});

}

function refreshSecondarySort(primarySort, secondarySort){

    const selectedField =
        primarySort.value
            ? primarySort.value.split("-")[0]
            : "";

    const previousValue =
        secondarySort.value;

    secondarySort.innerHTML = "";

    secondarySort.add(
        new Option(
            "Keine",
            ""
        )
    );

    Object.entries(SORT_DEFINITIONS).forEach(([key, definition]) => {

        // Eigene Reihenfolge niemals als Sekundärsortierung
        if(key === "customOrder"){
            return;
        }

        // Primäres Sortierkriterium nicht erneut anbieten
        if(key === selectedField){
            return;
        }

        secondarySort.add(
            new Option(
                `${definition.label} ↑`,
                `${key}-asc`
            )
        );

        secondarySort.add(
            new Option(
                `${definition.label} ↓`,
                `${key}-desc`
            )
        );

    });

    if(
        [...secondarySort.options].some(
            option => option.value === previousValue
        )
    ){

        secondarySort.value = previousValue;

    }else{

        secondarySort.value = "";

    }

}

function updateSortModes(primarySort, secondarySort){

    const isCustomOrder =
        primarySort.value === "customOrder-asc";

    secondarySort.disabled = isCustomOrder;

    if(isCustomOrder){

        secondarySort.value = "";

    }else{

        refreshSecondarySort(
            primarySort,
            secondarySort
        );

    }

    sortModes = [
        primarySort.value
    ];

    if(
        !isCustomOrder &&
        secondarySort.value
    ){

        sortModes.push(
            secondarySort.value
        );

    }

    // Sortierung speichern
    saveSortModes();

    refreshGrid();

}

function initSorting(){

    const primarySort =
        document.getElementById("primarySort");

    const secondarySort =
        document.getElementById("secondarySort");

    createSortOptions(primarySort);
    createSortOptions(secondarySort, true);

    loadSortModes();

    const savedPrimary =
        sortModes[0];

    const savedSecondary =
        sortModes[1] || "";

    if(
        [...primarySort.options].some(
            option => option.value === savedPrimary
        )
    ){

        primarySort.value = savedPrimary;

    }else{

        primarySort.value = "customOrder-asc";

    }

    refreshSecondarySort(
        primarySort,
        secondarySort
    );

    if(
        primarySort.value !== "customOrder-asc" &&
        [...secondarySort.options].some(
            option => option.value === savedSecondary
        )
    ){

        secondarySort.value = savedSecondary;

    }else{

        secondarySort.value = "";

    }

    secondarySort.disabled =
        primarySort.value === "customOrder-asc";

    sortModes = [
        primarySort.value
    ];

    if(
        !secondarySort.disabled &&
        secondarySort.value
    ){

        sortModes.push(
            secondarySort.value
        );

    }

    primarySort.addEventListener(
        "change",
        () => updateSortModes(
            primarySort,
            secondarySort
        )
    );

    secondarySort.addEventListener(
        "change",
        () => updateSortModes(
            primarySort,
            secondarySort
        )
    );

}

// give all cards a new number after moving them
function rebuildCustomOrder(storage){

    storage.forEach((pokemon, index) => {

        pokemon.customOrder = index;

    });

}

// for old pokemon
function migrateCustomOrder(storage){

    let changed = false;

    storage.forEach((pokemon, index) => {

        if(pokemon.customOrder === undefined){

            pokemon.customOrder = index;
            changed = true;

        }

    });

    if(changed){

        localStorage.setItem(
            "customPokemon",
            JSON.stringify(storage)
        );

    }

}

//only allow drag and drop if own Order ist clicked
function canDragCards(){

    return sortModes[0] === "customOrder-asc";

}

function enableCardDrag(card){

    card.addEventListener(
        "pointerdown",
        startCardDrag
    );

}


function createDragGhost(card){

    const ghost =
        card.cloneNode(true);

    ghost.classList.add(
        "drag-ghost"
    );

    const rect =
        card.getBoundingClientRect();

    ghost.style.width =
        rect.width + "px";

    ghost.style.height =
        rect.height + "px";

    ghost.style.left =
        rect.left + "px";

    ghost.style.top =
        rect.top + "px";

    document.body.appendChild(
        ghost
    );

    return ghost;

}


function startCardDrag(event){

    lastInsertTarget = null;

    if(!canDragCards()){
        return;
    }

    if(event.button !== 0){
        return;
    }

    event.preventDefault();

    draggedCard =
        event.currentTarget;

    dragStartX =
        event.clientX;

    dragStartY =
        event.clientY;

    isDragging = false;

    const rect =
        draggedCard.getBoundingClientRect();

    dragOffsetX =
        event.clientX - rect.left;

    dragOffsetY =
        event.clientY - rect.top;

    window.addEventListener(
        "pointermove",
        moveCardDrag
    );

    window.addEventListener(
        "pointerup",
        endCardDrag
    );

}


function createDragPlaceholder(card){

    const placeholder =
        document.createElement("div");

    placeholder.className =
        "drag-placeholder";

    placeholder.style.width =
        card.offsetWidth + "px";

    placeholder.style.height =
        card.offsetHeight + "px";

    return placeholder;

}


/* =========================================================
   BOX EINER KARTE
========================================================= */

function getCardBox(card){

    return card?.closest(
        ".pokemon-box"
    ) || null;

}


/* =========================================================
   KARTEN DER BOX
========================================================= */

function getBoxCards(box){

    if(!box){
        return [];
    }

    return [
        ...box.querySelectorAll(
            ".card"
        )
    ];

}


/* =========================================================
   EINSETZPOSITION ERMITTELN
========================================================= */

function getCardAfterPointer(x, y){

    if(dragPlaceholder){

        dragPlaceholder.style.display =
            "none";

    }

    const element =
        document.elementFromPoint(
            x,
            y
        );

    if(dragPlaceholder){

        dragPlaceholder.style.display =
            "";

    }

    const card =
        element?.closest(".card");

    if(
        !card ||
        card === draggedCard
    ){

        return null;

    }

    const box =
        getCardBox(card);

    if(!box){
        return null;
    }

    const cards =
        getBoxCards(box);

    const rect =
        card.getBoundingClientRect();

    /*
        Die Karte wird eingefügt,
        sobald der Mauszeiger die
        obere Hälfte der Zielkarte
        erreicht.

        Unterhalb der Karte wird
        weiterhin die nächste Karte
        gesucht.
    */

    if(
        y >=
        rect.top +
        rect.height / 2
    ){

        const index =
            cards.indexOf(card);

        const nextCard =
            cards[index + 1];

        if(nextCard){

            return nextCard;

        }

        return null;

    }

    return card;

}


/* =========================================================
   DRAG BEWEGEN
========================================================= */

function moveCardDrag(event){

    event.preventDefault();

    lastPointerX =
        event.clientX;

    lastPointerY =
        event.clientY;

    if(!draggedCard){
        return;
    }

    const dx =
        event.clientX -
        dragStartX;

    const dy =
        event.clientY -
        dragStartY;


    /* -----------------------------------------
       DRAG STARTEN
    ----------------------------------------- */

    if(!isDragging){

        const distance =
            Math.hypot(
                dx,
                dy
            );

        if(distance < 6){
            return;
        }

        document.body.classList.add(
            "drag-active"
        );

        isDragging = true;

        dragGhost =
            createDragGhost(
                draggedCard
            );

        dragPlaceholder =
            createDragPlaceholder(
                draggedCard
            );

        const currentBox =
            getCardBox(
                draggedCard
            );

        if(currentBox){

            currentBox.insertBefore(
                dragPlaceholder,
                draggedCard
            );

        }

        draggedCard.remove();

        draggedCard.classList.add(
            "dragging"
        );

    }


    /* -----------------------------------------
       GHOST
    ----------------------------------------- */

    if(dragGhost){

        dragGhost.style.left =
            (
                event.clientX -
                dragOffsetX
            ) + "px";

        dragGhost.style.top =
            (
                event.clientY -
                dragOffsetY
            ) + "px";

    }


    /* -----------------------------------------
       ZIELKARTE
    ----------------------------------------- */

    const targetCard =
        getCardAfterPointer(
            event.clientX,
            event.clientY
        );


    if(targetCard){

        const targetBox =
            getCardBox(
                targetCard
            );

        if(
            targetBox &&
            targetCard !==
            lastInsertTarget
        ){

            targetBox.insertBefore(
                dragPlaceholder,
                targetCard
            );

            lastInsertTarget =
                targetCard;

        }

    }
    else{

        /*
           Keine Zielkarte:

           Wir prüfen, ob sich der
           Mauszeiger über einer Box
           befindet.
        */

        const element =
            document.elementFromPoint(
                event.clientX,
                event.clientY
            );

        const targetBox =
            element?.closest(
                ".pokemon-box"
            );


        if(targetBox){

            /*
               Placeholder ans Ende
               der jeweiligen Box.
            */

            if(
                lastInsertTarget !==
                null
            ){

                lastInsertTarget =
                    null;

            }

            targetBox.appendChild(
                dragPlaceholder
            );

        }

    }


    updateAutoScroll(
        event.clientY
    );

}


/* =========================================================
   DRAG BEENDEN
========================================================= */

function endCardDrag(){

    window.removeEventListener(
        "pointermove",
        moveCardDrag
    );

    window.removeEventListener(
        "pointerup",
        endCardDrag
    );

    document.body.classList.remove(
        "drag-active"
    );


    autoScrollSpeed = 0;

    if(autoScrollFrame){

        cancelAnimationFrame(
            autoScrollFrame
        );

        autoScrollFrame = null;

    }


    /* -----------------------------------------
       KEIN ECHTER DRAG
    ----------------------------------------- */

    if(!isDragging){

        removeDragGhost();

        draggedCard = null;
        dragPlaceholder = null;

        return;

    }


    /* -----------------------------------------
       KARTE AN PLACEHOLDER EINSETZEN
    ----------------------------------------- */

    if(draggedCard){

        draggedCard.classList.remove(
            "dragging"
        );


        if(dragPlaceholder){

            dragPlaceholder.parentElement
                ?.insertBefore(
                    draggedCard,
                    dragPlaceholder
                );

        }


        if(dragPlaceholder){

            dragPlaceholder.remove();

            dragPlaceholder = null;

        }


        draggedCard.style.left = "";
        draggedCard.style.top = "";
        draggedCard.style.width = "";
        draggedCard.style.pointerEvents = "";

    }


    removeDragGhost();


    /* -----------------------------------------
       REIHENFOLGE SPEICHERN
    ----------------------------------------- */

    saveCustomOrder();


    /*
       Neu rendern.

       Dadurch werden die Karten wieder
       sauber in 30er-Boxen aufgeteilt.
    */

    refreshGrid();


    draggedCard = null;

    isDragging = false;

    lastInsertTarget = null;

}


/* =========================================================
   DRAG GHOST ENTFERNEN
========================================================= */

function removeDragGhost(){

    if(!dragGhost){
        return;
    }

    dragGhost.remove();

    dragGhost = null;

}


/* =========================================================
   AUTOSCROLL
========================================================= */

function updateAutoScroll(pointerY){

    const edge = 80;

    autoScrollSpeed = 0;

    const rect =
        grid.getBoundingClientRect();


    if(
        lastPointerX < rect.left ||
        lastPointerX > rect.right ||
        pointerY < rect.top ||
        pointerY > rect.bottom
    ){

        return;

    }


    if(
        pointerY <
        rect.top + edge
    ){

        autoScrollSpeed =
            -(
                rect.top +
                edge -
                pointerY
            ) / 8;

    }
    else if(
        pointerY >
        rect.bottom - edge
    ){

        autoScrollSpeed =
            (
                pointerY -
                (
                    rect.bottom -
                    edge
                )
            ) / 8;

    }


    if(
        autoScrollSpeed !== 0 &&
        !autoScrollFrame
    ){

        autoScroll();

    }

}


function autoScroll(){

    if(
        autoScrollSpeed === 0
    ){

        autoScrollFrame = null;

        return;

    }


    const scrollContainer =
        document.getElementById(
            "grid"
        );

    scrollContainer.scrollTop +=
        autoScrollSpeed;


    autoScrollFrame =
        requestAnimationFrame(
            autoScroll
        );


    if(dragGhost){

        dragGhost.style.left =
            (
                lastPointerX -
                dragOffsetX
            ) + "px";

        dragGhost.style.top =
            (
                lastPointerY -
                dragOffsetY
            ) + "px";

    }


    const targetCard =
        getCardAfterPointer(
            lastPointerX,
            lastPointerY
        );


    if(targetCard){

        const targetBox =
            getCardBox(
                targetCard
            );

        if(
            targetBox &&
            targetCard !==
            lastInsertTarget
        ){

            targetBox.insertBefore(
                dragPlaceholder,
                targetCard
            );

            lastInsertTarget =
                targetCard;

        }

    }
    else{

        const element =
            document.elementFromPoint(
                lastPointerX,
                lastPointerY
            );

        const targetBox =
            element?.closest(
                ".pokemon-box"
            );

        if(targetBox){

            targetBox.appendChild(
                dragPlaceholder
            );

            lastInsertTarget =
                null;

        }

    }

}


/* =========================================================
   REIHENFOLGE SPEICHERN
========================================================= */

function saveCustomOrder(){

    const order = [
        ...grid.querySelectorAll(
            ".card"
        )
    ]
    .map(
        card =>
            card.dataset.id
    );


    pokemonStorage.sort(
        (a, b) => {

            return (
                order.indexOf(a.id) -
                order.indexOf(b.id)
            );

        }
    );


    rebuildCustomOrder(
        pokemonStorage
    );


    localStorage.setItem(
        "customPokemon",
        JSON.stringify(
            pokemonStorage
        )
    );

}

/* Saving the picked sort-variant */
function saveSortModes(){

    localStorage.setItem(
        "sortModes",
        JSON.stringify(sortModes)
    );

}

function loadSortModes(){

    const saved =
        localStorage.getItem("sortModes");

    if(!saved){
        return;
    }

    try{

        const loaded =
            JSON.parse(saved);

        if(!Array.isArray(loaded) || !loaded.length){
            return;
        }

        sortModes = loaded;

    }catch(error){

        console.warn(
            "Sortierung konnte nicht geladen werden.",
            error
        );

    }

}