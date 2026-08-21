function matchesSearch(pokemon, search){

    if(!search){
        return true;
    }

    search = normalizeSearch(search);

    const terms = getSearchTerms(pokemon);

    if(matchesExactSearch(terms, search)){
        return true;
    }

    return matchesFuzzySearch(terms, search);

}

function normalizeSearch(text){

    return String(text)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .trim();

}

function getSearchTerms(pokemon){

    return [

        normalizeSearch(pokemon.name),

        normalizeSearch(String(pokemon.nummer))

    ];

}

function matchesExactSearch(terms, search){

    return terms.some(term =>

        term.startsWith(search) ||
        term.includes(search)

    );

}

function matchesFuzzySearch(terms, search){

    const maxDistance = getMaxDistance(search);

    if(maxDistance === 0){
        return false;
    }

    return terms.some(term => {

        if(Math.abs(term.length - search.length) > 2){
            return false;
        }
		
		if(!sharesPrefix(term, search)){
			return false;
		}

        return fuzzyDistance(term, search) <= maxDistance;

    });

}

function fuzzyDistance(term, search){

    if(term.length <= search.length){

        return damerauLevenshtein(term, search);

    }

    let best = Infinity;

    for(

        let i = 0;
        i <= term.length - search.length;
        i++

    ){

        const part =
            term.substring(i, i + search.length);

        const distance =
            damerauLevenshtein(part, search);

        if(distance < best){

            best = distance;

        }

    }

    return best;

}

function damerauLevenshtein(a, b){

    const alen = a.length;
    const blen = b.length;

    if(alen === 0) return blen;
    if(blen === 0) return alen;

    const matrix = Array.from(
        {length: alen + 1},
        () => new Array(blen + 1)
    );

    for(let i = 0; i <= alen; i++){
        matrix[i][0] = i;
    }

    for(let j = 0; j <= blen; j++){
        matrix[0][j] = j;
    }

    for(let i = 1; i <= alen; i++){

        for(let j = 1; j <= blen; j++){

            const cost =
                a[i-1] === b[j-1]
                    ? 0
                    : 1;

            matrix[i][j] = Math.min(

                matrix[i-1][j] + 1,
                matrix[i][j-1] + 1,
                matrix[i-1][j-1] + cost

            );

            if(

                i > 1 &&
                j > 1 &&
                a[i-1] === b[j-2] &&
                a[i-2] === b[j-1]

            ){

                matrix[i][j] = Math.min(

                    matrix[i][j],
                    matrix[i-2][j-2] + cost

                );

            }

        }

    }

    return matrix[alen][blen];

}

function getMaxDistance(search){

    if(search.length <= 4) return 0;

    if(search.length <= 8) return 1;

    return 2;

}

function sharesPrefix(term, search){

    if(search.length < 2){
        return false;
    }

    const length = Math.min(

        2,
        term.length,
        search.length

    );

    return term.substring(0, length) ===
           search.substring(0, length);

}

function getNGrams(text, n){

    const grams = [];

    if(text.length < n){
        return [text];
    }

    for(let i = 0; i <= text.length - n; i++){

        grams.push(
            text.substring(i, i + n)
        );

    }

    return grams;

}

function nGramSimilarity(a, b, n){

    const aGrams = getNGrams(a, n);
    const bGrams = getNGrams(b, n);

    let common = 0;

    const remaining = [...bGrams];

    aGrams.forEach(gram =>{

        const index = remaining.indexOf(gram);

        if(index !== -1){

            common++;

            remaining.splice(index,1);

        }

    });

    return common /
        Math.max(
            aGrams.length,
            bGrams.length,
            1
        );

}

function fuzzySimilarity(a, b){

    const bigram =
        nGramSimilarity(a, b, 2);

    const trigram =
        nGramSimilarity(a, b, 3);

    return (

        bigram * 0.4 +

        trigram * 0.6

    );

}

/* =========================
	SCORE OF SEARCH
========================= */
function getSearchScore(pokemon, search){

    if(!search){
        return 1000;
    }

    search = normalizeSearch(search);

    const terms = getSearchTerms(pokemon);

    return Math.max(

        ...terms.map(term => scoreTerm(term, search))

    );

}

function scoreTerm(term, search){

    // =========================
    // Exakter Treffer
    // =========================

    if(term === search){

        return 1000;

    }

    // =========================
    // Beginnt mit
    // =========================

    if(term.startsWith(search)){

        return 900 - (term.length - search.length);

    }

    // =========================
    // Enthält
    // =========================

    if(term.includes(search)){

        return 700 - term.indexOf(search);

    }

    let bestScore = 0;

    // =========================
    // Damerau-Levenshtein
    // =========================

    if(Math.abs(term.length - search.length) <= 2){

        const distance = fuzzyDistance(term, search);

        const maxDistance = getMaxDistance(search);

        if(distance <= maxDistance){

            bestScore = Math.max(

                bestScore,

                500 - distance * 100

            );

        }

    }

    // =========================
    // N-Gram Similarity
    // =========================

    const similarity =
        fuzzySimilarity(term, search);

    if(similarity >= 0.30){

        bestScore = Math.max(

            bestScore,

            Math.round(similarity * 450)

        );

    }

    // =========================
    // Bonus für gleichen Anfang
    // =========================

    if(

        bestScore > 0 &&
        sharesPrefix(term, search)

    ){

        bestScore += 40;

    }

    return bestScore;

}