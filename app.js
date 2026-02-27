let match = {
    gainlinePlus: 0,
    gainlineMinus: 0,
    domTackPlus: 0,
    domTackMinus: 0,
    quickBallPlus: 0,
    quickBallMinus: 0,
    turnoverWon: 0,
    turnoverLost: 0,
    penalties: 0
};

function updateStat(stat) {
    match[stat]++;
    displayStats();
}

function percent(a, b) {
    if ((a + b) === 0) return 0;
    return Math.round((a / (a + b)) * 100);
}

function displayStats() {
    let gainTotal = match.gainlinePlus + match.gainlineMinus;
    let tackleTotal = match.domTackPlus + match.domTackMinus;
    let quickTotal = match.quickBallPlus + match.quickBallMinus;

    document.getElementById("statsOutput").innerHTML =
        "Gainline: " + percent(match.gainlinePlus, match.gainlineMinus) + "% (" + match.gainlinePlus + "/" + gainTotal + ")<br>" +
        "Tackle Dominance: " + percent(match.domTackPlus, match.domTackMinus) + "% (" + match.domTackPlus + "/" + tackleTotal + ")<br>" +
        "Quick Ball: " + percent(match.quickBallPlus, match.quickBallMinus) + "% (" + match.quickBallPlus + "/" + quickTotal + ")<br>" +
        "Turnovers Won: " + match.turnoverWon + "<br>" +
        "Turnovers Lost: " + match.turnoverLost + "<br>" +
        "Penalties: " + match.penalties;
}

function resetMatch() {
    match = {
        gainlinePlus: 0,
        gainlineMinus: 0,
        domTackPlus: 0,
        domTackMinus: 0,
        quickBallPlus: 0,
        quickBallMinus: 0,
        turnoverWon: 0,
        turnoverLost: 0,
        penalties: 0
    };
    displayStats();
}

displayStats();